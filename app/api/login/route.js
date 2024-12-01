// app/api/login/route.js
import { signToken } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User Not Found" }), {
        status: 401,
      });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Password Invalid " }), {
        status: 401,
      });
    }

    // Generate JWT token
    const token = await signToken({ email });

    const { password: _, ...userWithoutPassword } = user;

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: userWithoutPassword,
      }),
      {
        status: 200,

        headers: {
          "Set-Cookie": `auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict;`,
        },
      }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
