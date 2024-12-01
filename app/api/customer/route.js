import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Instantiate Prisma Client
const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch customers along with related services, paid histories, and user details
    const customers = await prisma.customer.findMany({
      include: {
        services: true, // Include related services
        paidHistories: true, // Include related paid histories
        user: { select: { id: true, name: true } }, // Include user details
      },
    });

    console.log("Fetched Customers:", customers);

    // Return the fetched customers as a JSON response
    return NextResponse.json(customers);
  } catch (error) {
    // Handle errors by logging and returning a response with a 500 status
    console.error("Error fetching customers:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch customers", error: error.message },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client after the query is done
    await prisma.$disconnect();
  }
}
