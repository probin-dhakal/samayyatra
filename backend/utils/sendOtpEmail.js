import nodemailer from "nodemailer";

export const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "OTP for Password Reset",
    text: `Your OTP for password reset is ${otp}. It is valid for 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendCapsuleCreatedEmail = async (email, capsuleName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Capsule Created Successfully",
    text: `Dear User,

We are excited to inform you that your capsule "${capsuleName}" has been created successfully! You can now access and manage your capsule from your account.

Thank you for using our service.

Best regards,  
The Samayyatra Team`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendCapsuleReminderEmail = async (email, title, unlockTime) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reminder: Your Capsule is Opening Soon",
    text: `Hello,

Your capsule titled "${title}" is scheduled to unlock on ${unlockTime}. This is a friendly reminder that the opening is just 3 days away!

We hope you're excited to revisit your memories!

Best regards,
The Capsule Team`,
  };

  await transporter.sendMail(mailOptions);
};
