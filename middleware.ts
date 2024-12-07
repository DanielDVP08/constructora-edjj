// import NextAuth from "next-auth";
// import authConfig from "./auth.config";
// import { NextResponse } from "next/server";

// const { auth: middleware } = NextAuth(authConfig);

// const publicRoutes = [
//   "/",
//   "/signin",
//   "/signup",
//   "/sales",
//   "/api/auth/verify-email",
// ];

// export default middleware((req) => {
//   const { nextUrl, auth } = req;
//   const isLoggedIn = !!auth?.user;
//   // const isLoggedIn = !auth?.user;

//   console.log({isLoggedIn})

//   if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
//     return NextResponse.redirect(new URL("/signin", nextUrl));
//     // return NextResponse.redirect(new URL("/signin", req.nextUrl));
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|icomi|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

// v2
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|icomi|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//     "/user/account"
//   ],
// };

// // Configuración del middleware
// // export const config = {
// //   matcher: [
// //     // Rutas protegidas (puedes agregar más según sea necesario)
// //     '/dashboard/:path*',
// //     '/perfil/:path*',
// //   ],
// // };

// export async function middleware(req: NextRequest) {
//   const token = await getToken({
//     req,
//     secret: process.env.AUTH_SECRET, // Asegúrate de tener este valor en tu .env
//   });

//   // Si no hay token, redirige a la página de inicio de sesión
//   if (!token) {
//     const loginUrl = new URL('/signin', req.url);
//     loginUrl.searchParams.set('callbackUrl', req.url); // Redirige al usuario de vuelta a donde intentó acceder después de iniciar sesión
//     return NextResponse.redirect(loginUrl);
//   }

//   // Si el usuario está autenticado, permite el acceso
//   return NextResponse.next();
// }

// v3

import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

const publicRoutes = ["/", "/about"];
const authRoutes = ["/signin", "/signup"];
const apiAuthPrefix = "/api/auth";

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log(req)
  console.log(nextUrl)
  // console.log({ isLoggedIn, path: nextUrl.pathname });

  console.log("Middleware Log:", {
    isLoggedIn,
    path: nextUrl.pathname,
  });

  // Permitir todas las rutas de API de autenticación
  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next();
  }

  // Permitir acceso a rutas públicas sin importar el estado de autenticación
  if (publicRoutes.includes(nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Redirigir a / si el usuario está logueado y trata de acceder a rutas de autenticación
  if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // Redirigir a /signin si el usuario no está logueado y trata de acceder a una ruta protegida
  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/signin", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  // matcher: ["/((?!_next|favicon\\.ico|static|images).*)"],
  // matcher: ["/"],
  // matcher: [""],
};

// v4
// import NextAuth from "next-auth";
// import authConfig from "./auth.config";
// import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "@/libs/routes";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;

//   const isAuthenticated = !!req.auth;
//   const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

//   if (isPublicRoute && isAuthenticated)
//     return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

//   if (!isAuthenticated && !isPublicRoute)
//     return Response.redirect(new URL(ROOT, nextUrl));
// });

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
