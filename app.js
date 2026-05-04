// const express = require("express");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const passport = require("passport");
// const User = require("./models/user");
// const path = require("path");
// const Company = require("./models/company");
// const Experience = require("./models/experience");


// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.static("public"));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/alumni");
//   console.log("Database connected successfully");
// }
// main().catch(err => console.log(err));

// // Session setup
// app.use(
//   session({
//     secret: "mysupersecretcode",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//       httpOnly: true,
//     },
//   })
// );

// // Passport setup
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// /* =======================
//    AUTH MIDDLEWARE
// ======================= */
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }

// /* =======================
//    ROUTES
// ======================= */

// // Register
// app.get("/register", (req, res) => {
//   res.render("register");
// });

// app.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const newUser = new User({ email });

//     await User.register(newUser, password);

//     passport.authenticate("local")(req, res, () => {
//       res.redirect("/landing"); // ✅ go to landing
//     });
//   } catch (err) {
//     console.log(err);
//     res.send(err.message);
//   }
// });

// // Login
// // app.get("/login", (req, res) => {
// //   res.render("login");
// // });
// app.get("/login", (req, res) => {
//   if (req.query.redirect) {
//     req.session.returnTo = req.query.redirect;
//   }
//   res.render("login");
// });


// // app.post("/login", (req, res, next) => {
// //   passport.authenticate("local", (err, user, info) => {
// //     if (err) {
// //       console.log("Auth error:", err);
// //       return next(err);
// //     }

// //     if (!user) {
// //       console.log("Login failed");
// //       return res.redirect("/login");
// //     }

// //     req.logIn(user, (err) => {
// //       if (err) {
// //         console.log("Login error:", err);
// //         return next(err);
// //       }

// //       console.log("Login successful");
// //       return res.redirect("/landing"); // ✅ GUARANTEED redirect
// //     });
// //   })(req, res, next);
// // });

// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) return next(err);
//     if (!user) return res.redirect("/login");

//     req.logIn(user, (err) => {
//       if (err) return next(err);

//       // Redirect to intended page
//       const redirectUrl = req.session.returnTo || "/landing";
//       delete req.session.returnTo;
//       return res.redirect(redirectUrl);
//     });
//   })(req, res, next);
// });

// // Landing Page (Protected)
// app.get("/landing", isLoggedIn, (req, res) => {
//   res.render("landing", { user: req.user });
// });
// // List all companies
// app.get("/companies", async (req, res) => {
//   try {
//     const companies = await Company.find({});
//     res.render("companies", { companies }); // pass to EJS
//   } catch (err) {
//     console.log(err);
//     res.send("Error fetching companies");
//   }
// });

// // Get single company details
// // app.get("/companies/:id", async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const company = await Company.findById(id);
// //     if (!company) return res.status(404).send("Company not found");
// //     res.render("companyDetails", { company });
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).send("Error fetching company details");
// //   }
// // });
// // app.get("/companies/:id", async (req, res) => {
// //   try {
// //     const company = await Company.findById(req.params.id);

// //     const experiences = await Experience.find({
// //       company: company._id,
// //       status: "approved"
// //     }).populate("student", "email");

// //     res.render("companyDetails", { 
// //       company, 
// //       experiences,
// //       user: req.user 
// //     });

// //   } catch (err) {
// //     console.log(err);
// //     res.send("Error");
// //   }
// // });
// app.get("/companies/:id", async (req, res) => {
//   try {
//     const company = await Company.findById(req.params.id);

//     // Get all approved experiences
//     const experiences = await Experience.find({
//       company: company._id,
//       status: "approved"
//     }).populate("student", "email"); // show student email

//     res.render("companyDetails", { 
//       company, 
//       experiences,
//       user: req.user // pass user if logged in
//     });

//   } catch (err) {
//     console.log(err);
//     res.send("Error fetching company details");
//   }
// });


// app.post("/companies/:id/experience", isLoggedIn, async (req, res) => {
//   try {
//     await Experience.create({
//       company: req.params.id,
//       student: req.user._id,
//       batchYear: req.body.batchYear,
//       role: req.body.role,
//       roundsDescription: req.body.roundsDescription,
//       questionsAsked: req.body.questionsAsked,
//       tips: req.body.tips,
//       difficultyLevel: req.body.difficultyLevel,
//        status: "approved" 
//     });

//     res.redirect(`/companies/${req.params.id}`);

//   } catch (err) {
//     console.log(err);
//     res.send("Error saving experience");
//   }
// });
// // Show add experience page
// // app.get("/companies/:id/experience/new", isLoggedIn, async (req, res) => {
// //   const company = await Company.findById(req.params.id);
// //   res.render("addExperience", { company });
// // });

// // Show add experience page
// app.get("/companies/:id/experience/new", isLoggedIn, async (req, res) => {
//   const company = await Company.findById(req.params.id);
  
//   // Pass user to EJS
//   res.render("addExperience", { 
//     company, 
//     user: req.user 
//   });
// });

// // Logout
// app.get("/logout", (req, res, next) => {
//   req.logout(function (err) {
//     if (err) return next(err);
//     res.redirect("/login");
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const User = require("./models/user");
const path = require("path");
const Company = require("./models/company");
const Experience = require("./models/experience");
const Question = require("./models/Question");
const multer = require("multer");
const fs = require("fs");

const { sendOTP, verifyOTP, sendWelcomeEmail } = require("./otpService");
 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

const { MongoMemoryServer } = require("mongodb-memory-server");

// MongoDB connection — prefer real local Mongo (data persists), fall back to in-memory
async function tryConnect(url, label) {
  await mongoose.connect(url, { serverSelectionTimeoutMS: 3000 });
  console.log(`Connected to ${label}: ${url}`);
}

async function main() {
  let MONGO_URL = process.env.MONGO_URL;
  if (MONGO_URL) {
    await tryConnect(MONGO_URL, "MongoDB (env)");
  } else {
    try {
      await tryConnect("mongodb://127.0.0.1:27017/alumni", "local MongoDB");
    } catch (e) {
      console.log("Local MongoDB not reachable — starting embedded memory server (DATA WILL NOT PERSIST across restarts)...");
      await mongoose.disconnect().catch(() => {});
      const mongoServer = await MongoMemoryServer.create();
      await tryConnect(mongoServer.getUri(), "in-memory MongoDB");
    }
  }

  // Auto-seed if empty (memory server starts fresh each time)
  const companiesData = require("./data");
  const questionsData = require("./question");
  if (await Company.countDocuments() === 0) {
    await Company.insertMany(companiesData);
    console.log(`Seeded ${companiesData.length} companies`);
  } else {
    for (const c of companiesData) {
      await Company.updateOne(
        { companyName: c.companyName },
        { $set: { companyImage: c.companyImage } }
      );
    }
    console.log("Refreshed company logos from data.js");
  }
  // Re-seed Questions when schema changed (old docs lacked category/difficulty)
  const existing = await Question.countDocuments();
  const tagged   = await Question.countDocuments({ category: { $exists: true } });
  if (existing === 0 || tagged !== existing) {
    await Question.deleteMany({});
    await Question.insertMany(questionsData);
    console.log(`Seeded ${questionsData.length} questions (with category + difficulty tags)`);
  }
}
main().catch(err => {
  console.error("\n❌ MongoDB connection failed!", err);
});

// Session setup
app.use(session({
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true },
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Auth middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect(`/login?redirect=${req.originalUrl}`);
}

// ================= ROUTES =================

// Public landing page (3D animated marketing site)
app.get("/", (req, res) => {
  if (req.isAuthenticated()) return res.redirect("/landing");
  res.render("home");
});

// Register
// Students must use their official institute email; alumni may use any address.
const STUDENT_EMAIL_DOMAIN = "@igitsarang.ac.in";
function isStudentEmailValid(email) {
  return typeof email === "string" &&
    email.toLowerCase().endsWith(STUDENT_EMAIL_DOMAIN);
}
function emailErrorPage(title, msg, backHref) {
  return `
    <div style="font-family:Arial;text-align:center;padding:40px;">
      <h2 style="color:#c0392b;">${title}</h2>
      <p>${msg}</p>
      <p><a href="${backHref}">Go back</a></p>
    </div>`;
}

// Strong-password rule: 8+ chars, at least one upper, one lower, one digit,
// one special character. Mirrors the client-side meter in views/register.ejs.
function isStrongPassword(pw) {
  return typeof pw === "string"
    && pw.length >= 8
    && /[A-Z]/.test(pw)
    && /[a-z]/.test(pw)
    && /\d/.test(pw)
    && /[^A-Za-z0-9]/.test(pw);
}

app.get("/register", (req, res) => res.render("register"));

// Step 1: Validate inputs & send OTP to email
app.post("/register", async (req, res) => {
  try {
    const { email, password, role, fullName } = req.body;
    const userRole = role === "alumni" ? "alumni" : "student";

    if (userRole === "student" && !isStudentEmailValid(email)) {
      return res.status(400).send(emailErrorPage(
        "Student email required",
        `Students must register with their official institute email ending in <strong>${STUDENT_EMAIL_DOMAIN}</strong>.`,
        "/register"
      ));
    }

    if (!isStrongPassword(password)) {
      return res.status(400).send(emailErrorPage(
        "Weak password",
        "Password must be at least <strong>8 characters</strong> long and include an <strong>uppercase letter</strong>, a <strong>lowercase letter</strong>, a <strong>number</strong>, and a <strong>special character</strong>.",
        "/register"
      ));
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send(emailErrorPage(
        "Email already registered",
        "An account with this email already exists. Please <a href='/login'>login</a> instead.",
        "/register"
      ));
    }

    // Send OTP to user's email
    await sendOTP(email);

    // Render OTP verification page (pass form data along)
    res.render("verifyOtp", { email, password, role: userRole, fullName });
  } catch (err) {
    console.error("Registration OTP error:", err);
    res.status(500).send(emailErrorPage(
      "Could not send OTP",
      "We couldn't send the verification email. Please check the email address and try again.",
      "/register"
    ));
  }
});

// Step 2: Verify OTP and create the account
app.post("/verify-otp", async (req, res) => {
  try {
    const { email, password, role, fullName, otp } = req.body;

    const result = verifyOTP(email, otp);
    if (!result.valid) {
      // OTP invalid — re-render verification page with error
      return res.render("verifyOtp", {
        email, password, role, fullName,
        error: result.message
      });
    }

    // OTP verified — create the user
    const newUser = new User({ email, role, fullName });
    await User.register(newUser, password);

    // Fire-and-forget welcome email — don't block login if SMTP is slow
    sendWelcomeEmail(email, fullName, role).catch(err => {
      console.error("Welcome email failed (registration still successful):", err.message);
    });

    passport.authenticate("local")(req, res, () => {
      res.redirect("/landing");
    });
  } catch (err) {
    console.error("OTP verification error:", err);
    res.send(err.message);
  }
});

// Resend OTP
app.post("/resend-otp", async (req, res) => {
  try {
    const { email, password, role, fullName } = req.body;
    await sendOTP(email);
    res.render("verifyOtp", { email, password, role, fullName, error: null });
  } catch (err) {
    console.error("Resend OTP error:", err);
    const { email, password, role, fullName } = req.body;
    res.render("verifyOtp", {
      email, password, role, fullName,
      error: "Failed to resend OTP. Please try again."
    });
  }
});

// =========== PROFILE PHOTO UPLOAD ===========
const AVATAR_DIR = path.join(__dirname, "public", "uploads", "avatars");
if (!fs.existsSync(AVATAR_DIR)) fs.mkdirSync(AVATAR_DIR, { recursive: true });

const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, AVATAR_DIR),
  filename: (req, file, cb) => {
    const ext = (path.extname(file.originalname) || ".jpg").toLowerCase();
    const safe = String(req.user._id) + "-" + Date.now() + ext;
    cb(null, safe);
  }
});
const avatarUpload = multer({
  storage: avatarStorage,
  limits: { fileSize: 3 * 1024 * 1024 }, // 3 MB
  fileFilter: (req, file, cb) => {
    if (!/^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)) {
      return cb(new Error("Only JPEG / PNG / WEBP / GIF images are allowed."));
    }
    cb(null, true);
  }
});

// Upload / replace profile photo
app.post("/profile/photo", isLoggedIn, (req, res) => {
  avatarUpload.single("photo")(req, res, async (err) => {
    if (err) return res.status(400).send(`<div style="font-family:Arial;text-align:center;padding:40px;"><h2 style="color:#c0392b;">Upload failed</h2><p>${err.message}</p><p><a href="/profile">Back to profile</a></p></div>`);
    if (!req.file) return res.redirect("/profile");
    const newPath = "/uploads/avatars/" + req.file.filename;
    // Delete previous file if it lived under our avatars folder
    const old = req.user.photo;
    if (old && old.startsWith("/uploads/avatars/")) {
      const oldFs = path.join(__dirname, "public", old);
      fs.unlink(oldFs, () => {}); // best-effort
    }
    await User.findByIdAndUpdate(req.user._id, { photo: newPath });
    res.redirect("/profile");
  });
});

// Remove profile photo
app.post("/profile/photo/remove", isLoggedIn, async (req, res) => {
  const old = req.user.photo;
  if (old && old.startsWith("/uploads/avatars/")) {
    fs.unlink(path.join(__dirname, "public", old), () => {});
  }
  await User.findByIdAndUpdate(req.user._id, { photo: "" });
  res.redirect("/profile");
});

// Login
// app.get("/login", (req, res) => {
//   if (req.query.redirect) req.session.returnTo = req.query.redirect;
//   res.render("login");
// });
app.get("/login", (req, res) => {
  // If a redirect query exists, store it in session
  if (req.query.redirect) {
    req.session.returnTo = req.query.redirect;
  }
  res.render("login");
});


// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user) => {
//     if (err) return next(err);
//     if (!user) return res.redirect("/login");

//     req.logIn(user, (err) => {
//       if (err) return next(err);
//       const redirectUrl = req.session.returnTo || "/landing";
//       delete req.session.returnTo;
//       res.redirect(redirectUrl);
//     });
//   })(req, res, next);
// });
app.post("/login", (req, res, next) => {
  const selectedRole = req.body.role === "alumni" ? "alumni" : "student";

  if (selectedRole === "student" && !isStudentEmailValid(req.body.email)) {
    return res.status(400).send(emailErrorPage(
      "Student email required",
      `Students must log in with their official institute email ending in <strong>${STUDENT_EMAIL_DOMAIN}</strong>.`,
      "/login"
    ));
  }

  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      const msg = (info && info.message) || "Invalid email or password";
      console.log("Login failed:", msg, "for email:", req.body.email);
      return res.status(401).send(`
        <div style="font-family:Arial;text-align:center;padding:40px;">
          <h2 style="color:#c0392b;">Login Failed</h2>
          <p>${msg}</p>
          <p><a href="/login">Try again</a> | <a href="/register">Register</a></p>
        </div>
      `);
    }
    if (user.role && user.role !== selectedRole) {
      return res.status(401).send(`
        <div style="font-family:Arial;text-align:center;padding:40px;">
          <h2 style="color:#c0392b;">Wrong Login Type</h2>
          <p>You registered as <strong>${user.role}</strong>, but tried to log in as <strong>${selectedRole}</strong>.</p>
          <p><a href="/login">Go back & select ${user.role}</a></p>
        </div>
      `);
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      const redirectUrl = req.session.returnTo || "/landing";
      delete req.session.returnTo;
      return res.redirect(redirectUrl);
    });
  })(req, res, next);
});

// Logout
app.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
});

// Landing page
app.get("/landing", isLoggedIn, (req, res) => res.render("landing", { user: req.user }));

// Profile (role-based)
app.get("/profile", isLoggedIn, (req, res) => {
  if (req.user.role === "alumni") {
    return res.render("alumniProfile", { user: req.user });
  }
  res.render("studentProfile", { user: req.user });
});

app.post("/profile", isLoggedIn, async (req, res) => {
  try {
    const updates = {
      fullName: req.body.fullName,
      branch: req.body.branch,
      batchYear: req.body.batchYear || undefined,
      bio: req.body.bio
    };
    if (req.user.role === "alumni") {
      updates.company = req.body.company;
      updates.designation = req.body.designation;
      updates.linkedin = req.body.linkedin;
    } else {
      // CGPA must be a number in [0, 10] with up to 2 decimal places.
      if (req.body.cgpa !== undefined && req.body.cgpa !== "") {
        const cg = parseFloat(req.body.cgpa);
        if (Number.isNaN(cg) || cg < 0 || cg > 10) {
          return res.status(400).send(`
            <div style="font-family:Arial;text-align:center;padding:40px;">
              <h2 style="color:#c0392b;">Invalid CGPA</h2>
              <p>CGPA must be a number between <strong>0 and 10</strong> with at most 2 decimal places.</p>
              <p><a href="/profile">Go back</a></p>
            </div>`);
        }
        // Round to 2 decimal places so DB never stores 8.567
        updates.cgpa = Math.round(cg * 100) / 100;
      } else {
        updates.cgpa = undefined;
      }
    }
    await User.findByIdAndUpdate(req.user._id, updates);
    res.redirect("/profile");
  } catch (err) {
    res.send("Error updating profile: " + err.message);
  }
});

// List all companies
app.get("/companies", async (req, res) => {
  delete require.cache[require.resolve("./data")];
  const companiesData = require("./data");
  for (const c of companiesData) {
    await Company.updateOne(
      { companyName: c.companyName },
      { $set: { companyImage: c.companyImage } }
    );
  }
  const companies = await Company.find({});
  res.render("companies", { companies });
});

// Company details + experiences
app.get("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    const experiences = await Experience.find({ company: company._id, status: "approved" })
                                        .populate("student", "email");
    res.render("companyDetails", { company, experiences, user: req.user });
  } catch (err) { res.send("Error fetching company details"); }
});

// Add experience page
app.get("/companies/:id/experience/new", isLoggedIn, async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.render("addExperience", { company, user: req.user });
});

// Submit experience
app.post("/companies/:id/experience", isLoggedIn, async (req, res) => {
  try {
    await Experience.create({
      company: req.params.id,
      student: req.user._id,
      batchYear: req.body.batchYear,
      role: req.body.role,
      roundsDescription: req.body.roundsDescription,
      questionsAsked: req.body.questionsAsked,
      tips: req.body.tips,
      difficultyLevel: req.body.difficultyLevel,
      status: "approved"
    });
    res.redirect(`/companies/${req.params.id}`);
  } catch (err) { res.send("Error saving experience"); }
});
// Resources page
app.get("/resources", isLoggedIn, (req, res) => {
    res.render("resources");
});

// You can create further routes for each resource
app.get("/resources/aptitude", isLoggedIn, (req, res) => {
    res.render("comingSoon", {
        title: "Aptitude Practice",
        icon: "🧮",
        description: "Curated quantitative aptitude, logical reasoning, and verbal ability practice resources are being prepared. Check back soon!"
    });
});

app.get("/resources/dsa", isLoggedIn, (req, res) => {
    res.render("comingSoon", {
        title: "DSA & Coding",
        icon: "💻",
        description: "Hand-picked data structures, algorithms, and problem-solving tutorials are on the way. We're curating the best content from across the web."
    });
});

const resumeTemplates = require("./resumeTemplates");

app.get("/resources/resume", isLoggedIn, (req, res) => {
    res.render("resumeTemplates", { templates: resumeTemplates });
});

app.get("/resources/resume/:id", isLoggedIn, (req, res) => {
    const template = resumeTemplates.find(t => t.id === req.params.id);
    if (!template) return res.status(404).send("Template not found");
    res.render("resumeTemplate", { template });
});

app.get("/resources/resume/:id/download", isLoggedIn, (req, res) => {
    const template = resumeTemplates.find(t => t.id === req.params.id);
    if (!template) return res.status(404).send("Template not found");
    res.setHeader("Content-Type", "application/x-tex");
    res.setHeader("Content-Disposition", `attachment; filename="${template.id}-resume.tex"`);
    res.send(template.latex);
});

app.get("/resources/mock-interviews", isLoggedIn, (req, res) => {
    res.render("comingSoon", {
        title: "Mock Interview Prep",
        icon: "🎤",
        description: "Behavioral & technical interview preparation guides, common questions database, and live mock interview scheduling are coming soon."
    });
});
// =========== MOCK TEST ROUTES ===========
const { TESTS: MOCK_TESTS, getTest: getMockTest, resolveQuestions: resolveMockQuestions }
  = require("./mockTests");

// Test list page
app.get("/mock-test", isLoggedIn, (req, res) => {
  // Group by difficulty for the listing UI
  const grouped = { easy: [], moderate: [], hard: [] };
  MOCK_TESTS.forEach(t => grouped[t.difficulty].push(t));
  res.render("mockTest", { grouped });
});

// Start / take a specific test
app.get("/mock-test/:id", isLoggedIn, async (req, res) => {
  const test = getMockTest(req.params.id);
  if (!test) return res.status(404).send("Test not found.");
  const blocks = await resolveMockQuestions(test, Question);
  const totalLoaded = blocks.reduce((s, b) => s + b.questions.length, 0);
  if (totalLoaded === 0) {
    return res.status(500).send("Question bank not seeded yet. Restart the server.");
  }
  res.render("mockTestStart", { test, blocks });
});

// Submit a specific test
app.post("/mock-test/:id", isLoggedIn, async (req, res) => {
  const test = getMockTest(req.params.id);
  if (!test) return res.status(404).send("Test not found.");
  const blocks = await resolveMockQuestions(test, Question);

  let score = 0, total = 0;
  const breakdown = { aptitude: { correct: 0, total: 0 }, english: { correct: 0, total: 0 }, cseCore: { correct: 0, total: 0 } };
  blocks.forEach(b => {
    b.questions.forEach(q => {
      total++;
      breakdown[b.category].total++;
      const submitted = Number(req.body[q._id]);
      if (!Number.isNaN(submitted) && submitted === q.answer) {
        score++;
        breakdown[b.category].correct++;
      }
    });
  });

  const timeTakenSec = parseInt(req.body.__timeTaken, 10) || 0;
  res.render("mockResult", { test, score, total, breakdown, timeTakenSec });
});
// Server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
