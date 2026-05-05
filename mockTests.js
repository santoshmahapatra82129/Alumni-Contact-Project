// Mock-test definitions for IGIT Connect.
// 5 tests x 3 difficulties = 15 tests.
// Each test pulls 15 questions from each of (aptitude, english, cseCore)
// at the test's difficulty -> 45 questions per test.
// The slice is deterministic per test so the same test always shows the
// same 45 questions.

// Each pool has 75 questions (indices 0..74). Five tests per difficulty
// pick a non-overlapping 15-index window so all 5 tests at the same
// difficulty have COMPLETELY DIFFERENT questions in every category.
const SLICE_OFFSETS = [0, 15, 30, 45, 60];
const SLICE_SIZE = 15;
const POOL_SIZE = 75;

function pickIndices(offset) {
  const out = [];
  for (let i = 0; i < SLICE_SIZE; i++) out.push((offset + i) % POOL_SIZE);
  return out;
}

const DIFFICULTY_DURATIONS = {
  easy: 60,      // minutes
  moderate: 75,
  hard: 90,
};

function buildTests() {
  const tests = [];
  ["easy", "moderate", "hard"].forEach((difficulty) => {
    SLICE_OFFSETS.forEach((offset, i) => {
      const num = i + 1;
      tests.push({
        id: `${difficulty}-${num}`,
        title: `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mock Test #${num}`,
        difficulty,
        durationMinutes: DIFFICULTY_DURATIONS[difficulty],
        // 45 questions = 15 aptitude + 15 english + 15 cseCore
        sections: [
          { category: "aptitude", indices: pickIndices(offset) },
          { category: "english",  indices: pickIndices(offset) },
          { category: "cseCore",  indices: pickIndices(offset) },
        ],
        totalQuestions: SLICE_SIZE * 3, // 45
      });
    });
  });
  return tests;
}

const TESTS = buildTests();

function getTest(id) {
  return TESTS.find(t => t.id === id) || null;
}

// Resolve test definition into a flat list of Question docs (in order:
// aptitude block then english then cseCore).
async function resolveQuestions(test, QuestionModel) {
  const blocks = [];
  for (const section of test.sections) {
    const docs = await QuestionModel.find({
      category: section.category,
      difficulty: test.difficulty,
      bankIndex: { $in: section.indices }
    });
    // Order by the indices array so the user always sees the same sequence
    const byIdx = new Map(docs.map(d => [d.bankIndex, d]));
    const ordered = section.indices.map(i => byIdx.get(i)).filter(Boolean);
    blocks.push({ category: section.category, questions: ordered });
  }
  return blocks;
}

module.exports = { TESTS, getTest, resolveQuestions, DIFFICULTY_DURATIONS };
