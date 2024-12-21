import { findTsuBySlug, findIngById } from "@/interfaces/carreras.interface";
import { env } from "@/config/env";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await fetch(`${env.API_URL}/carreras`).then((res) => res.json());
  const slug = (await params).slug;

  const tsu = findTsuBySlug(data.data, slug);

  if (!tsu) {
    notFound();
  }
  const ing = findIngById(data.data, tsu.ing);
  
  if (!ing) {
    notFound();
  }

  return (
    <div>
      <h1>{tsu.title}</h1>
      <h2>{ing.title}</h2>
    </div>
  );
}
