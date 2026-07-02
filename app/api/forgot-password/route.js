import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/db";
import User from "@/app/models/User";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: cleanEmail });

    if (!user) {
      return NextResponse.json(
        {
          success: true,
          message:
            "If an account with this email exists, a password reset link has been generated.",
        },
        { status: 200 }
      );
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = hashedResetToken;
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    await user.save();

   const resetLink = `${request.nextUrl.origin}/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: `"JugantaK.Boruah" <${process.env.EMAIL_USER}>`,
  to: user.email,
  subject: "Reset your password",
  html: `
    <h2>Password Reset Request</h2>
    <p>Hello ${user.firstName},</p>
    <p>You requested to reset your password.</p>
    <p>Click the link below to reset your password:</p>
    <a href="${resetLink}">${resetLink}</a>
    <p>This link will expire in 15 minutes.</p>
    <p>If you did not request this, you can ignore this email.</p>
  `,
};



const info = await transporter.sendMail(mailOptions);


return NextResponse.json(
  {
    success: true,
    message: "Password reset link has been sent to your email",
  },
  { status: 200 }
);
  } catch (error) {
    console.log("Forgot password error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}