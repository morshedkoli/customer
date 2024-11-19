import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Parse incoming request body
    const body = await request.json();

    const {
      name,
      address,
      number,
      email,
      password,
      subscriptionTime,
      activationDate,
    } = body;

    // Validate required fields
    if (!name || !email || !password || !subscriptionTime || !activationDate) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
        }
      );
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name,
        address,
        number,
        email,
        password, // Note: Store passwords securely using hashing
        subscriptionTime: new Date(subscriptionTime),
        activationDate: new Date(activationDate),
      },
    });

    // Return success response
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
