import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// Ensure you match all routes, excluding _next and specific file types
export const config = {
  matcher: ['/((?!_next|.*\\.[\\w]+$).*)', '/(api|trpc)(.*)'],
};
