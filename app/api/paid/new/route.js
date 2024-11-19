import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { amount, customerId, date } = await req.json();

    // Server-side validation
    if (!date || !customerId || isNaN(amount)) {
      return NextResponse.json(
        { message: "All fields are required and balance must be a number" },
        { status: 400 }
      );
    }

    // // Save user to MongoDB using Prisma
    const newPaid = await prisma.paidHistory.create({
      data: {
        date,
        amount: parseFloat(amount),
        customerId,
      },
    });

    return NextResponse.json(
      { message: "paid registered successfully!", paid: newPaid },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
