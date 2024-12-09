"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function NavbarMobile() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass =
    scrollPosition < 250 ? "text-white bg-transparent" : "bg-white text-black";
  return (
    <div
      className={`min-w-full h-14 ${headerBgClass} flex items-center gap-4 justify-between px-4 sm:px-6 md:px-10 md:hidden shadow-lg duration-300`}
    >
      {/* Botón de menú */}
      <button
        aria-label="Abrir menú"
        className="flex items-center justify-center p-2 rounded-full "
      >
        <Menu size={36} className="text-white" />
      </button>

      {/* Logo */}
      <Image
        src="/utn.svg"
        alt="Logo de la Universidad Tecnológica de Nogales (UTN)"
        height={96}
        width={96}
        className="max-w-24 w-20"
      />

      {/* Botón de llamada */}
      <a
        href="tel:+1234567890"
        className="bg-green-400 px-4 py-2 rounded-full font-bold text-white hover:bg-green-500 transition duration-300 focus:ring focus:ring-green-300"
      >
        Llámanos
      </a>
    </div>
  );
}
