/**
 * Wipe only the registered users (students + alumni accounts) for a fresh demo.
 * Companies, Questions, and submitted Interview Experiences stay intact.
 *
 *   node reset-db.js     (or: npm run reset)
 *
 * - Connects to the same Mongo URL the app uses (env MONGO_URL or
 *   the default mongodb://127.0.0.1:27017/alumni).
 * - Clears the `users` collection.
 * - Clears the `sessions` collection if present (so any logged-in cookie
 *   becomes invalid; otherwise an old session would still appear "logged in"
 *   but resolve to a deleted user).
 *
 * Notes:
 * - The in-memory MongoDB fallback inside app.js is fresh on every
 *   restart anyway, so this script is only useful with a real local Mongo.
 */

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/alumni";

async function main() {
  console.log("Connecting to:", MONGO_URL);
  await mongoose.connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 });
  console.log("Connected. Clearing users only...");

  const db = mongoose.connection.db;
  const targets = ["users", "sessions"];
  for (const name of targets) {
    const exists = await db.listCollections({ name }).hasNext();
    if (!exists) { console.log(`  skip: ${name} (not present)`); continue; }
    const { deletedCount } = await db.collection(name).deleteMany({});
    console.log(`  cleared ${name}: ${deletedCount} document(s) removed`);
  }

  // Show what is still in the database so you can confirm before demo
  const counts = {};
  for (const c of await db.listCollections().toArray()) {
    counts[c.name] = await db.collection(c.name).countDocuments();
  }
  console.log("Remaining collections:", counts);
  console.log("Done. Companies, Questions, Experiences are untouched.");

  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error("\nReset failed:", err.message);
  if (err.message.includes("ECONNREFUSED") || err.message.includes("buffering")) {
    console.error("\nNo local MongoDB is running on", MONGO_URL);
    console.error("If you are using the in-memory fallback in app.js,");
    console.error("just stop the server and start it again — that already");
    console.error("gives you an empty users list.");
  }
  process.exit(1);
});
