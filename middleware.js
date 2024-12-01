import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth"; // Ensure verifyToken validates JWTs properly

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect routes that match the specified pattern (e.g., `/dashboard`)
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("auth-token")?.value;

    if (!token) {
      // Redirect to login if token is missing
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
      // Verify the token and extract payload
      const payload = await verifyToken(token);

      if (!payload || !payload.email) {
        throw new Error("Invalid token payload");
      }

      // Clone request headers and attach the user's email
      const requestHeaders = new Headers(req.headers);

      // Add new request headers
      requestHeaders.set("x-hello-from-middleware1", "hello");
      requestHeaders.set("x-hello-from-middleware2", "world!");

      // Update an existing request header
      requestHeaders.set(
        "user-agent",
        "New User Agent overriden by middleware!"
      );
      return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error("Token verification failed:", error.message);

      // Redirect to login if token verification fails
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // Allow public routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Specify route patterns to protect
};
