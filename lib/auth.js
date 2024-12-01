// lib/auth.js
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key"
);

export async function signToken(payload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h") // Token valid for 2 hours
    .sign(secret);
  return token;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

// export async function getEmailFromToken(token) {
//   try {
//     const { payload } = await jwtVerify(token, secret); // Verifies and decodes the token
//     return payload.email; // Assuming the JWT includes an `email` field
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return null;
//   }
// }
