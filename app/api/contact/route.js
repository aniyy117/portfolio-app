import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting store
const rateLimitMap = new Map();

function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  const limit = 2; // 2 requests
  const windowMs = 60 * 1000; // per minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, [now]);
    return false;
  }

  const requests = rateLimitMap.get(ip).filter((time) => now - time < windowMs);

  if (requests.length >= limit) {
    return true;
  }

  requests.push(now);
  rateLimitMap.set(ip, requests);
  return false;
}

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, phoneNumber, message, website } = body;

  // Get client IP for rate limiting
  const clientIp = getClientIp(request);

  // Check rate limit
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      {
        message: "Too many requests. Please try again later.",
        status: 429,
        success: false,
      },
      { status: 429 },
    );
  }

  // Honeypot check - if website field is filled, it's a bot
  if (website && website.trim().length > 0) {
    // Silently fail for bots (don't reveal honeypot)
    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
      success: true,
    });
  }

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
      error: error.message,
      status: 500,
      success: false,
    });
  }
}
