import { ArrowRight } from "lucide-react";
import React from "react";

export function HeroSection() {
  return (
    <>
      <div className="h-full absolute -z-10 bg-gradient-to-b to-white from-gray-200" />
      <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-fixed font-extrabold bg-[url(/fondo-utn.webp)] bg-center bg-cover min-h-[70vh] flex flex-col md:flex-row justify-between items-center p-8 md:pl-36 shadow-2xl shadow-gray-400">
        <div className="max-w-full md:max-w-3xl flex flex-col gap-y-6 sm:gap-y-8 text-center md:text-left pt-14 relative z-10">
          <h1 className="text-white leading-snug sm:leading-tight text-balance text-shadow-lg">
            Tu futuro comienza en <span className="text-home-title">UTN</span>
          </h1>
          <span className="text-base sm:text-lg md:text-xl text-white/90">
            Aquí, tu educación está diseñada para brindarte las habilidades y
            conocimientos que te llevarán a alcanzar el éxito.
          </span>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-white mt-6">
            <button className="flex items-center justify-center gap-3 text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 bg-green-600 rounded-full hover:bg-green-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg hover:shadow-xl">
              Modelo Educativo
              <ArrowRight />
            </button>
            <button className="text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-green-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg hover:shadow-xl">
              Conoce más
            </button>
          </div>
        </div>
        <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0 pointer-events-none" />
      </div>
    </>
  );
}
