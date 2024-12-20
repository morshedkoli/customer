import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name } = await req.json();

    // Server-side validation
    if (!name) {
      return NextResponse.json(
        { message: "All fields are required and balance must be a number" },
        { status: 400 }
      );
    }

    // // Save user to MongoDB using Prisma
    const newService = await prisma.serviceName.create({
      data: {
        name,
      },
    });

    return NextResponse.json(
      { message: "Add new Service successfully!", service: newService },
      { status: 201 }
    );
  } catch (error) {
    console.error("Add Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
