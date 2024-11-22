import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, phone, address, balance } = await req.json();

    // Server-side validation
    if (!name || !phone || !address || isNaN(balance)) {
      return NextResponse.json(
        { message: "All fields are required " },
        { status: 400 }
      );
    }

    // // Save user to MongoDB using Prisma
    const newCustomer = await prisma.customer.create({
      data: {
        name,
        phone,
        address,
        balance: parseFloat(balance),
        userId: "673cda4fb638410a586b4d02",
      },
    });

    return NextResponse.json(
      { message: "Customer registered successfully!", customer: newCustomer },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
