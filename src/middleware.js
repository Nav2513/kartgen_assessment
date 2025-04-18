import { clerkMiddleware } from "@clerk/nextjs/server";

const middleware = clerkMiddleware();

export default middleware;

export const config = {
  matcher: [

    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/survey(.*)'
  ],
};

