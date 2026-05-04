const nodemailer = require("nodemailer");

// ─── In-memory OTP store ────────────────────────────────────────────
// Key: email, Value: { otp, expiresAt }
const otpStore = new Map();

const OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

// ─── Generate a 6-digit OTP ─────────────────────────────────────────
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ─── SMTP transporter (Gmail) ───────────────────────────────────────
// Uses environment variables so credentials are never hard-coded.
//   SMTP_EMAIL   – the Gmail address (e.g. yourapp@gmail.com)
//   SMTP_PASS    – a Gmail App Password (NOT your normal password)
//
// How to create a Gmail App Password:
//   1. Go to https://myaccount.google.com/security
//   2. Enable 2-Step Verification
//   3. Under "App passwords", generate one for "Mail"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL || "santoshmahapatra82129@gmail.com",
    pass: process.env.SMTP_PASS  || "akhe ucyy wvyp emhk",
  },
});

// ─── Send OTP email ─────────────────────────────────────────────────
async function sendOTP(email) {
  const otp = generateOTP();
  otpStore.set(email.toLowerCase(), {
    otp,
    expiresAt: Date.now() + OTP_EXPIRY_MS,
  });

  const mailOptions = {
    from: `"IGIT Connect 🎓" <${process.env.SMTP_EMAIL || "santoshmahapatra82129@gmail.com"}>`,
    to: email,
    subject: "Your IGIT Connect Verification Code",
    html: `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:480px;margin:auto;
                  background:linear-gradient(135deg,#0a0e27 0%,#1a1f4e 100%);
                  border-radius:16px;overflow:hidden;">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#667eea,#764ba2);padding:28px 32px;">
          <h1 style="color:#fff;margin:0;font-size:1.5rem;">🎓 IGIT Connect</h1>
          <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:0.9rem;">
            Email Verification
          </p>
        </div>

        <!-- Body -->
        <div style="padding:32px;">
          <p style="color:#cbd5e1;font-size:0.95rem;line-height:1.6;">
            Hello! Use the code below to verify your email and complete your registration on
            <strong style="color:#b8c5ff;">IGIT Connect</strong>.
          </p>

          <!-- OTP box -->
          <div style="margin:28px 0;text-align:center;">
            <div style="display:inline-block;background:rgba(102,126,234,0.15);
                        border:2px dashed #667eea;border-radius:12px;padding:18px 40px;">
              <span style="font-size:2.2rem;font-weight:bold;letter-spacing:10px;
                           color:#fff;font-family:monospace;">${otp}</span>
            </div>
          </div>

          <p style="color:#94a3b8;font-size:0.85rem;text-align:center;">
            This code expires in <strong style="color:#f093fb;">5 minutes</strong>.
          </p>

          <!-- Divider -->
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:28px 0;">

          <p style="color:#64748b;font-size:0.8rem;line-height:1.5;">
            If you didn't request this code, you can safely ignore this email.
            Someone may have typed your address by mistake.
          </p>
        </div>

        <!-- Footer -->
        <div style="background:rgba(0,0,0,0.3);padding:16px 32px;text-align:center;">
          <p style="color:#475569;font-size:0.75rem;margin:0;">
            © ${new Date().getFullYear()} IGIT Connect — Alumni &amp; Placement Community
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log(`OTP sent to ${email}`);
  return true;
}

// ─── Verify OTP ─────────────────────────────────────────────────────
function verifyOTP(email, otp) {
  const record = otpStore.get(email.toLowerCase());
  if (!record) return { valid: false, message: "No OTP was sent to this email. Please register again." };
  if (Date.now() > record.expiresAt) {
    otpStore.delete(email.toLowerCase());
    return { valid: false, message: "OTP has expired. Please register again." };
  }
  if (record.otp !== otp) {
    return { valid: false, message: "Invalid OTP. Please try again." };
  }
  // OTP is valid — remove it so it can't be reused
  otpStore.delete(email.toLowerCase());
  return { valid: true };
}

// ─── Send welcome email (post-registration) ──────────────────────────
async function sendWelcomeEmail(email, fullName, role) {
  const displayName = (fullName && fullName.trim()) || email.split("@")[0];
  const isStudent = role !== "alumni";
  const roleLabel = isStudent ? "Student" : "Alumni";
  const roleEmoji = isStudent ? "🎓" : "💼";
  const heroLine  = isStudent
    ? "Your placement-prep journey starts now."
    : "Welcome back! Help juniors with your interview experience.";

  const mailOptions = {
    from: `"IGIT Connect 🎓" <${process.env.SMTP_EMAIL || "santoshmahapatra82129@gmail.com"}>`,
    to: email,
    subject: "🎉 Welcome to IGIT Connect — registration successful",
    html: `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:520px;margin:auto;
                  background:linear-gradient(135deg,#0a0e27 0%,#1a1f4e 100%);
                  border-radius:16px;overflow:hidden;">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#667eea,#764ba2);padding:32px;">
          <h1 style="color:#fff;margin:0;font-size:1.7rem;">🎉 Welcome to IGIT Connect!</h1>
          <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:0.95rem;">
            ${heroLine}
          </p>
        </div>

        <!-- Body -->
        <div style="padding:32px;color:#cbd5e1;">
          <p style="font-size:1rem;line-height:1.6;margin:0 0 18px;">
            Hi <strong style="color:#b8c5ff;">${displayName}</strong>,
          </p>
          <p style="font-size:0.95rem;line-height:1.7;margin:0 0 22px;">
            Your account on <strong style="color:#fff;">IGIT Connect</strong>
            has been created successfully. You can now log in and start using the
            platform built by &amp; for IGIT Sarang students and alumni.
          </p>

          <!-- Account summary card -->
          <div style="background:rgba(102,126,234,0.10);
                      border:1px solid rgba(102,126,234,0.30);
                      border-radius:12px;padding:18px 22px;margin:18px 0 26px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <span style="font-size:1.2rem;">${roleEmoji}</span>
              <strong style="color:#fff;font-size:1rem;">Account Details</strong>
            </div>
            <div style="color:#94a3b8;font-size:0.92rem;line-height:1.7;">
              <div><span style="color:#64748b;">Name:</span> <strong style="color:#e8eaf6;">${displayName}</strong></div>
              <div><span style="color:#64748b;">Email:</span> <strong style="color:#e8eaf6;">${email}</strong></div>
              <div><span style="color:#64748b;">Role:</span>  <strong style="color:#e8eaf6;">${roleLabel}</strong></div>
            </div>
          </div>

          <!-- What's next -->
          <h3 style="color:#fff;font-size:1rem;margin:0 0 12px;">What you can do next</h3>
          <ul style="padding-left:18px;color:#cbd5e1;font-size:0.92rem;line-height:1.8;margin:0 0 24px;">
            ${isStudent ? `
              <li>Browse <strong style="color:#b8c5ff;">12+ companies</strong> that visit IGIT Sarang</li>
              <li>Read first-hand interview experiences from seniors and alumni</li>
              <li>Take <strong style="color:#b8c5ff;">15 timed mock tests</strong> covering Aptitude, English &amp; CSE Core</li>
              <li>Download ready-to-use <strong style="color:#b8c5ff;">LaTeX resume templates</strong></li>
            ` : `
              <li>Share your <strong style="color:#b8c5ff;">interview experiences</strong> to guide juniors</li>
              <li>Update your alumni profile with company &amp; designation</li>
              <li>Connect with current students who are preparing for placements</li>
              <li>Stay engaged with the IGIT Sarang placement community</li>
            `}
          </ul>

          <!-- CTA -->
          <div style="text-align:center;margin:28px 0 8px;">
            <a href="${process.env.APP_URL || "http://localhost:3000"}/login"
               style="display:inline-block;padding:13px 32px;
                      background:linear-gradient(135deg,#667eea,#764ba2);
                      color:#fff;text-decoration:none;border-radius:10px;
                      font-weight:bold;font-size:0.95rem;
                      box-shadow:0 8px 22px rgba(102,126,234,0.35);">
              Log in to IGIT Connect →
            </a>
          </div>

          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:28px 0;">

          <p style="color:#64748b;font-size:0.8rem;line-height:1.5;margin:0;">
            If you didn't sign up, you can ignore this email or
            <a href="mailto:${process.env.SMTP_EMAIL || "santoshmahapatra82129@gmail.com"}"
               style="color:#b8c5ff;">contact us</a>.
          </p>
        </div>

        <!-- Footer -->
        <div style="background:rgba(0,0,0,0.3);padding:16px 32px;text-align:center;">
          <p style="color:#475569;font-size:0.75rem;margin:0;">
            © ${new Date().getFullYear()} IGIT Connect — Alumni &amp; Placement Community<br>
            Indira Gandhi Institute of Technology, Sarang
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log(`Welcome email sent to ${email}`);
  return true;
}

module.exports = { sendOTP, verifyOTP, sendWelcomeEmail };
