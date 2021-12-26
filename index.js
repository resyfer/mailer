const nodemailer = require("nodemailer");
require("dotenv").config();

const data = require("./data.json");

(async () => {
  // nodemailer
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // If using GMail
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.PASSWORD,
    },
  });

  console.log("Mailer started");

  // Sending EMails
  await transporter.sendMail({
    from: `"${data.sender.name}" <${process.env.EMAIL_ID}>`,
    to: data.email.id.join(", "),
    subject: data.email.subject,
    html: data.email.html,
  });

  console.log("Mails sent");
})();
