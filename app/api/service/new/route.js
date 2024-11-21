import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const {
      serviceNameId,
      cost,
      customerId,
      deliveryDate,
      status,
      name,
      birthDate,
      ref,
    } = await req.json();

    // Server-side validation
    if (
      !serviceNameId ||
      !cost ||
      !customerId ||
      !deliveryDate ||
      !status ||
      !name ||
      !birthDate ||
      !ref
    ) {
      return NextResponse.json(
        { message: "All fields are required and balance must be a number" },
        { status: 400 }
      );
    }

    // // Save user to MongoDB using Prisma
    const newService = await prisma.service.create({
      data: {
        serviceNameId,
        cost,
        customerId,
        deliveryDate,
        status,
        name,
        birthDate,
        ref,
      },
    });

    return NextResponse.json(
      { message: "Service registered successfully!", service: newService },
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
