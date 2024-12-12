"use client";

import Image from "next/image";
import SubmenuGenerator from "@/components/root/Navbar/NavbarDesktop/SubmenuGenerator";
import { NavbarItems } from "@/data/NavbarItems";
import { useEffect, useState } from "react";

export default function NavbarDesktop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBgClass =
    scrollPosition < 250 ? "text-white bg-transparent" : "bg-white text-gray-700";

  return (
    <div
      className={`min-w-full h-16 ${headerBgClass} items-center gap-6 justify-between hidden md:flex md:px-10 lg:px-16 shadow-lg duration-300`}
    >
      {/* Logo */}
      <div className="flex">
        <Image
          src="/utn.svg"
          alt="Logo de UTN"
          height={96}
          width={96}
          className="min-w-24 max-w-24 h-full"
        />
      </div>

      {/* Menú principal */}
      <ul className="flex flex-wrap items-center gap-x-6 font-semibold text-base">
        {NavbarItems.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className="flex items-center relative group"
          >
            <SubmenuGenerator menu={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
