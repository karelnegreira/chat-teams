import { 
  convexAuthNextjsMiddleware,
  createRouteMatcher, 
  isAuthenticatedNextjs, 
  nextjsMiddlewareRedirect 
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware((request) => {
  console.log("MIDDLEWARE HIT")
  if (!isPublicPage(request) && isAuthenticatedNextjs(request)) {
    return nextjsMiddlewareRedirect(request, "/signin");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};