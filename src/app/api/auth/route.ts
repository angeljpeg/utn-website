import { getAuthUrl } from "@/config/google";
import { NextResponse } from "next/server";

export async function GET() {
  const authUrl = getAuthUrl();
  return NextResponse.redirect(authUrl);
}
