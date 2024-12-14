import React from "react";
import Image from "next/image";

export function Objetivo() {
  return (
    <section>
      <div
        className="relative w-full bg-fixed bg-center bg-cover py-28 h-auto aspect-video md:aspect-auto"
        style={{ backgroundImage: `url(/fondo-utn-2.webp)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-emerald-950/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-10">
          {/* Texto */}
          <div className="text-center max-w-screen-md">
            <p className="px-4 py-2 text-lg md:text-2xl font-light text-center text-white rounded-md animate-fadeIn">
              &quot;El objetivo de esta dependencia es{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                formar profesionistas competitivos con conocimientos,
                habilidades y valores,
              </span>{" "}
              a través de un modelo educativo actualizado que les permita
              integrarse al ámbito productivo e impulsar la transformación y el
              desarrollo de la sociedad.&quot;
            </p>
          </div>

          {/* Logo */}
          <div className="mt-10 animate-fadeIn delay-500">
            <Image
              src="/utn-blanco.svg"
              alt="UTN logo"
              height={92}
              width={92}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
