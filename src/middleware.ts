import { 
  convexAuthNextjsMiddleware,
  createRouteMatcher, 
  isAuthenticatedNextjs, 
  nextjsMiddlewareRedirect 
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth(.*)"]);

export default convexAuthNextjsMiddleware(async (request) => {
  console.log("MIDDLEWARE HIT")

  const isAuthenticated = await isAuthenticatedNextjs(request);

  console.log("AUTH STATE:", isAuthenticated);
  if (!isPublicPage(request) && !isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }

  if (isPublicPage(request) && isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};