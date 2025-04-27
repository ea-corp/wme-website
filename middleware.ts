import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/; // Regex pour détecter les fichiers statiques

export function middleware(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language") || "";
  const detectedLocale = acceptLanguage.startsWith("fr") ? "fr" : "en";

  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Si c'est un fichier statique (ex: .png, .jpg, .css, .js...), on ignore
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // Vérifie si l'utilisateur a déjà choisi /fr ou /en
  const hasLocale = pathname.startsWith("/fr") || pathname.startsWith("/en");

  if (!hasLocale) {
    url.pathname = `/${detectedLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_static|favicon.ico).*)"], // tu peux garder ça aussi
};
