"use client";

import Image from "next/image";
import { UseHeader } from "@/lib/stores/header";

export default function Header() {
  const banner = UseHeader((state) => state.banner);
  const title = UseHeader((state) => state.title);
  return (
    <header>
      <div className="relative w-full h-[50vh]">
        {/* Imagen de fondo */}
        <Image
          src={banner || "/OfertaEducativa.webp"}
          alt="Banner"
          className="object-cover w-full h-full"
          height={1024}
          width={1980}
        />
        {/* Gradiente superpuesto */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/70" />
      </div>

      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <div className="px-6 w-[90vw] py-8 mx-auto text-center text-white shadow-xl rounded-lg sm:w-[75vw] min-w-fit animate-animated-gradient bg-gradient-to-br from-lime-500 to-green-500 bg-[length:300%_300%]">
          <h1 className="text-2xl font-bold tracking-tight uppercase cursor-default sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
