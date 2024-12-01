import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth"; // Ensure verifyToken is implemented to validate JWTs

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect `/dashboard` route
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
      // Verify the token
      let payload = await verifyToken(token);
      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload["email"]);

      return NextResponse.next({ request: { headers: requestHeader } });
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  // Public routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
