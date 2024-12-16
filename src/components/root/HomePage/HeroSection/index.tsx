import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function HeroSection() {
  return (
    <>
      <div className="h-full absolute -z-10 bg-gradient-to-b to-white from-gray-200" />
      <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-fixed font-extrabold bg-[url(/fondo-utn.webp)] bg-center bg-cover min-h-[75vh] flex flex-col md:flex-row justify-center items-center p-8 shadow-2xl shadow-gray-400">
        <div className="max-w-full md:max-w-3xl flex flex-col gap-y-6 sm:gap-y-8 text-center md:text-left pt-14 relative z-10">
          <div className="relative group w-fit mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-lime-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-300 animate-tilt" />
            <div className="relative px-6 py-3 bg-neutral-800/30 rounded-lg leading-none flex items-center justify-center space-x-2 border-2 border-lime-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-sm font-medium text-neutral-100 tracking-wider">
                Las inscripciones comienzan en Febrero, 2025
              </span>
            </div>
          </div>
          <h1 className="text-white text-center leading-snug sm:leading-tight text-balance text-shadow-lg">
            Tu futuro comienza en <span className="text-home-title">UTN</span>
          </h1>
          <span className="text-base text-center sm:text-lg md:text-xl text-white/90">
            Aquí, tu educación está diseñada para brindarte las habilidades y
            conocimientos que te llevarán a alcanzar el éxito.
          </span>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-white mt-6">
            <Link href={"/carreras"} className="flex items-center justify-center gap-3 text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 bg-green-500 rounded-full hover:bg-green-600 transition duration-300 shadow-lg hover:shadow-xl">
              Oferta Educativa
              <ArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0 pointer-events-none" />
      </div>
    </>
  );
}
