// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const loginData = request.cookies.get("loginData");


//   const publicPaths = ["/", "/login"];

//   const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

//   if (!loginData && !isPublicPath) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// // Apply the middleware only to specific paths (excluding static files and public assets)
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api|homepage|login|userDashboard|nanopage|symbols|booking|assets|admin|public).*)",
//   ],
// };


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Extract base path dynamically
const BASE_PATH ="/amazon/makerspace-blr";

// Helper function to add base path to URLs
const withBasePath = (path: string) => `${BASE_PATH}${path}`;

export function middleware(request: NextRequest) {
  const loginData = request.cookies.get("loginData");

  const publicPaths = ["/", "/login"].map(withBasePath);
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  if (!loginData && !isPublicPath) {
    return NextResponse.redirect(new URL(withBasePath("/"), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|assets|public|admin|homepage|login|userDashboard|nanopage|symbols|booking).*)",
  ],
};
