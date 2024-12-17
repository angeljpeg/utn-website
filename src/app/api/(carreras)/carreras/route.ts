import { fetchCollection } from "@/lib/utils/firebaseUtils";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const data = fetchCollection("carreras");

  return NextResponse.json({ data }, { status: 201 });
}

export async function POST(req: NextRequest) {
    const data = {}
    console.log(req.body)


    return NextResponse.json({data}, {status: 201})
}
