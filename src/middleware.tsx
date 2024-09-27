// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const loginData = request.cookies.get("loginData");

  // Define the public paths where users can go without being logged in
  const publicPaths = ["/", "/login"];

  // Check if the current request is to a public path
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // If not logged in and not on a public path, redirect to home page
  if (!loginData && !isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Continue the request if the user is logged in or on a public path
  return NextResponse.next();
}

// Apply the middleware only to specific paths (excluding static files and public assets)
export const config = {
  matcher: [
    /*
     * Match all routes except for:
     *  - Static files (/_next/static/)
     *  - Image optimization files (/_next/image/)
     *  - Favicon and icons (/favicon.ico)
     *  - Public folder files (/public/* like images, videos, PDFs, etc.)
     *  - API routes (/api/*)
     *  - Custom folders in the public directory (e.g., /homepage/, /login/, /dashboard/)
     */
    "/((?!_next/static|_next/image|favicon.ico|api|homepage|login|userDashboard|nanopage|booking|public).*)",
  ],
};