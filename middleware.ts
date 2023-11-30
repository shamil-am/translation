import { TLocales } from "./types/locales";
import type { NextRequest } from "next/server";

export const locales: TLocales[] = ["az", "en", "ru"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const defaultLocale = locales[0];
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
