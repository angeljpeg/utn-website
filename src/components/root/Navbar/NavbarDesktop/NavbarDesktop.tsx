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
    scrollPosition < 250 ? "text-white bg-transparent" : "bg-white text-black";

  return (
    <div
      className={`min-w-full h-14 ${headerBgClass} items-center gap-2 justify-between px-10 hidden md:flex shadow-lg duration-300`}
    >
      <div>
        <Image
          src="/utn.svg"
          alt="Logo de UTN"
          height={96}
          width={96}
          className="min-w-24"
        />
      </div>

      <ul className="flex flex-wrap items-center justify-between gap-x-2 font-bold text-sm">
        {NavbarItems.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className="flex items-center relative"
          >
            <SubmenuGenerator menu={item} />
          </li>
        ))}
      </ul>

      <div className="bg-green-400 px-4 py-2 rounded-full font-bold">
        Llamanos
      </div>
    </div>
  );
}
