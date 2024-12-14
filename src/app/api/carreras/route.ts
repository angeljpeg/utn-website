import { NextResponse } from "next/server";
import {fetchCollection} from '@/lib/utils/firebaseUtils'


export async function GET() {
    const data = await fetchCollection("Carreras")

    console.log(data)

  return NextResponse.json({ data }, { status: 200 });
}