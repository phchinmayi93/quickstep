import nodemailer from "nodemailer";

export async function sendEmail(
  to: string,
  name: string,
  course: string
) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `Quickstep Institute <${process.env.EMAIL_USER}>`,
    to,
    subject: "Enrollment Confirmation",
    html: `
      <h2>Enrollment Confirmed</h2>
      <p>Hello ${name},</p>
      <p>Your enrollment for <b>${course}</b> has been received.</p>
      <p>Our team will contact you shortly.</p>
      <br/>
      <p>Quickstep Computer Center</p>
    `,
  });

}