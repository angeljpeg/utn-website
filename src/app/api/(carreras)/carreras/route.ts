import { fetchCollection } from "@/lib/utils/firebaseUtils";
import { NextResponse, NextRequest } from "next/server";
import { uploadImage } from "@/lib/utils/cloudinaryUtils";

export async function GET() {
  const data = await fetchCollection("carreras");
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const banner = data.get("banner");
    const title = data.get("title");

    if (!banner || !title) {
      return NextResponse.json(
        { error: "Both 'banner' and 'title' are required" },
        { status: 400 }
      );
    }
    // Subir a Cloudinary
    const cloudinaryResponse = await uploadImage({
      file: banner as File,
      folder: "carreras",
      title: title.toString(),
    });

    return NextResponse.json({ result: cloudinaryResponse.url }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
