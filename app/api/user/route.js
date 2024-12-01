import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Extract email from headers
    const email = request.headers.get("email");
    console.log("headers", request.headers);
    if (!email) {
      return NextResponse.json(
        { error: "Email not provided in headers" },
        { status: 400 }
      );
    }

    // Query user from the database using the extracted email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
