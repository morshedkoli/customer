import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { parse } from "cookie";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    // Extract cookies from the request header
    const cookieHeader = req.headers.get("cookie"); // Edge API routes use req.headers.get()
    const cookies = parse(cookieHeader || ""); // Safely parse cookies
    const token = cookies["auth-token"];
    console.log("token", token);
    let payload = await verifyToken(token);
    console.log(payload);

    if (!token) {
      return NextResponse.json(
        { error: "Auth token not provided in cookies" },
        { status: 400 }
      );
    }

    // Replace `token` with actual email lookup if token contains email
    const user = await prisma.user.findUnique({
      where: { email: payload["email"] },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error in API route:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
