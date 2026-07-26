import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/app/models/User";
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
  
    const { firstName, lastName, birthYear, email, password } = body;
    if (!firstName || !lastName || !birthYear || !email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are Required" },
        { status: 400 },
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email" },
        { status: 400 },
      );
    }
    if(birthYear.length!=4){
      return NextResponse.json({
        success:false,message:"Enter a Valid Birth Year"
      },
    {status:400})
    }
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 8 characters" },
        { status: 400 },
      );
    }
    const exsitingUser = await User.findOne({ email });
    if (exsitingUser) {
      return NextResponse.json(
        { success: false, message: "User already exist" },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      birthYear,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    const response = NextResponse.json(
      {
        success: true,
        message: "Signup successful",
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          birthYear: newUser.birthYear,
          email: newUser.email,
        },
      },
      { status: 201 },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.log("Signup error:", error);

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
