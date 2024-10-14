import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, phoneNumber, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${email}" <dittosays@gmail.com>`,
    to: "janiket112@gmail.com",
    subject: `New message from ${firstName} ${lastName || ""}`,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName || ""}
      Email: ${email}
      Phone: ${phoneNumber}
      Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Email not sent",
      status: 500,
      success: false,
    });
  }
}
