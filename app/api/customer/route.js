import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        services: true, // Include related services
        paidHistories: true, // Include related paid histories
        user: { select: { id: true, name: true } }, // Include user details
      },
    });
    console.log(customers);

    return NextResponse.json(customers);
  } catch (error) {
    console.log("hello", error);
    return NextResponse.json(
      { message: "Failed to fetch customers" },
      { status: 500 }
    );
  }
}
