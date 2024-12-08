import Image from "next/image";
import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0">
      <div className="min-w-full h-14 bg-white flex items-center justify-between px-14">
        <div>
          <Image
            src="/utn.svg"
            alt="Logo de UTN"
            height={96}
            width={96}
            className="min-w-24"
          />
        </div>
        <div className="bg-yellow-400">
          <ul className="flex gap-x-8 font-bold text-sm">
            <li>INICIO</li>
            <li>ALUMNOS {">"}</li>
            <li>CARRERAS {">"}</li>
            <li>ASPIRANTES {">"}</li>
            <li>SERVICIOS {">"}</li>
            <li>MAESTROS {">"}</li>
            <li>UNIVERSIDAD {">"}</li>
          </ul>
        </div>
        <div className="bg-green-400 px-4 py-2 rounded-full font-bold">Llamanos</div>
      </div>
    </nav>
  );
}
