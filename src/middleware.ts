import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // host from the request
  const hostname = req.headers.get("host") || "";

  // Check if the request is coming from the ctrl-labs subdomain
  if (hostname.startsWith("ctrl.")) {
    if (!url.pathname.startsWith("/ctrl")) {
      url.pathname = `/ctrl${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  } else {
    if (url.pathname.startsWith("/ctrl")) {
      url.pathname = url.pathname.replace(/^\/ctrl/, "") || "/";
      url.host = `ctrl.${hostname.replace("www.", "")}`;
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
