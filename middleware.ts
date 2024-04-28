// _middleware.ts

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: Event) {
  if (req.url === "/services") {
    // Redirige vers /remote-services
    return NextResponse.redirect("/remote-services");
  }

  // Poursuit le traitement des autres requêtes
  return NextResponse.next();
}
