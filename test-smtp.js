/**
 * Quickly verify the SMTP / OTP service.
 *
 *   node test-smtp.js you@example.com
 *
 * 1. Verifies the transporter handshake (login to Gmail).
 * 2. Sends an OTP email to the address you passed.
 * 3. Prints the OTP that was generated so you can compare it
 *    with what arrives in your inbox.
 *
 * Uses the same SMTP_EMAIL / SMTP_PASS env vars (and fallback) as
 * otpService.js, so this is a true end-to-end test of the live config.
 */

const nodemailer = require("nodemailer");
const { sendOTP } = require("./otpService");

const target = process.argv[2];
if (!target) {
  console.error("Usage: node test-smtp.js <email-address>");
  process.exit(1);
}

const SMTP_EMAIL = process.env.SMTP_EMAIL || "santoshmahapatra82129@gmail.com";
const SMTP_PASS  = process.env.SMTP_PASS  || "akhe ucyy wvyp emhk";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: SMTP_EMAIL, pass: SMTP_PASS },
});

(async () => {
  console.log("───────────────────────────────────────────────");
  console.log(" SMTP test for IGIT Connect");
  console.log("───────────────────────────────────────────────");
  console.log("Sender :", SMTP_EMAIL);
  console.log("Target :", target);
  console.log();

  // Step 1: handshake
  process.stdout.write("1. Verifying SMTP credentials... ");
  try {
    await transporter.verify();
    console.log("OK ✓");
  } catch (err) {
    console.log("FAILED ✗");
    console.error("\nSMTP login failed:", err.message);
    if (/Invalid login|Username and Password not accepted/i.test(err.message)) {
      console.error(
        "\nThis usually means:\n" +
        "  - 2-Step Verification is not enabled on the Gmail account, OR\n" +
        "  - The app password is wrong, OR\n" +
        "  - SMTP_EMAIL / SMTP_PASS env vars don't match the credentials.\n" +
        "Generate a fresh app password at https://myaccount.google.com/apppasswords"
      );
    }
    process.exit(1);
  }

  // Step 2: send a real OTP through the real otpService code path
  process.stdout.write("2. Sending OTP email through otpService... ");
  try {
    await sendOTP(target);
    console.log("OK ✓");
  } catch (err) {
    console.log("FAILED ✗");
    console.error("\nsendMail error:", err.message);
    process.exit(1);
  }

  console.log();
  console.log("Done. Check the inbox of " + target + " (also spam folder).");
  console.log("If the email arrived, SMTP is fully working.");
  process.exit(0);
})();
