import cloudinary from "@/config/cloudinary";

interface uploadImageProps {
  file: File;
  title: string;
  folder: string;
}

export const uploadImage = async ({
  file,
  folder,
  title,
}: uploadImageProps) => {
  // Convertir el archivo a Buffer y luego a Base64
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

  // Subir directamente con cloudinary.uploader.upload
  const cloudinaryResponse = await cloudinary.uploader.upload(base64Image, {
    folder: folder,
    public_id: `${title}_banner`,
  });

  return cloudinaryResponse;
};
