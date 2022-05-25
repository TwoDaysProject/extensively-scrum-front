import { getToken } from "next-auth/jwt";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  if (pathname.includes("/signup") || token) {
    return NextResponse.next();
  }
  if (pathname.includes("/add") || token) {
    return NextResponse.next();
  }

  /*if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }*/
}
