import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const loginData = request.cookies.get("loginData");


  const publicPaths = ["/", "/login"];

  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  if (!loginData && !isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Apply the middleware only to specific paths (excluding static files and public assets)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|homepage|login|userDashboard|nanopage|symbols|booking|assets|admin|public).*)",
  ],
};