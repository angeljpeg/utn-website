"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavbarMobile() {
  const [scrollPosition, setScrollPosition] = useState(() => window.scrollY); // Estado inicial correcto
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass =
    scrollPosition < 250
      ? "text-white bg-transparent"
      : "bg-white text-black shadow-md";

  return (
    <div
      className={`fixed top-0 left-0 z-20 w-full gap-4 h-14 ${headerBgClass} md:hidden flex items-center justify-between px-4 sm:px-6 md:px-10 transition duration-300`}
    >
      {/* Botón de menú */}
      <button
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        className="z-30 mb-6 w-7 md:mx-6 mx-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <Menu
            size={28}
            className={`absolute transform transition-all duration-300 ${
              isOpen
                ? "rotate-180 opacity-0 text-black"
                : "rotate-0 opacity-100 text-white"
            }`}
          />
          <X
            size={28}
            className={`absolute transform transition-all duration-300 ${
              isOpen
                ? "rotate-0 opacity-100 text-black"
                : "-rotate-180 opacity-0 text-white"
            }`}
          />
        </div>
      </button>

      {/* Logo */}
      <Image
        src="/utn.svg"
        alt="Logo de la Universidad Tecnológica de Nogales (UTN)"
        height={80}
        width={80}
        className="mx-4"
      />

      {/* Menú desplegable */}

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      />
      <div
        className={`fixed inset-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full z-10"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-red-50 w-3/4 h-screen py-16 px-8">
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
