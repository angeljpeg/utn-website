import React from "react";
import Image from "next/image";

export function Objetivo() {
  return (
    <section>
      <div
        className="relative w-full bg-fixed bg-center bg-cover py-28 h-auto"
        style={{ backgroundImage: `url(/fondo-utn-2.webp)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          {/* Texto */}
          <div className="text-center max-w-3xl">
            <p className="px-4 py-2 text-xl font-light text-center text-white rounded-md lg:text-2xl md:text-2xl">
              &quot;El objetivo de esta dependencia es{" "}
              <span className="font-semibold text-white">
                formar profesionistas competitivos con conocimientos,
                habilidades y valores,
              </span>{" "}
              a través de un modelo educativo actualizado que les permita
              integrarse al ámbito productivo e impulsar la transformación y el
              desarrollo de la sociedad.&quot;
            </p>
          </div>

          {/* Logo */}
          <div className="mt-8">
            <Image
              src="/utn-blanco.svg"
              alt="UTN logo"
              height={92}
              width={92}
              className="animate-fadeIn delay-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
