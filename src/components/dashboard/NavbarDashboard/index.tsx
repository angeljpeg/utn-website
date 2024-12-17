"use client";
// import Image from "next/image";
import React from "react";

interface props {
  isOpen: boolean;
}

export function NavbarDashboard({ isOpen }: props) {
  return (
    <div
      className={`min-h-screen fixed inset-0 bg-white px-4 py-5 ${
        isOpen ? "w-64" : "w-24"
      }`}
    >
      {/* header */}
      <header className="border-b-2 flex items-center justify-center gap-2">
        <div className="w-10 h-10 bg-green-300/50 p-2 flex items-center justify-center rounded-md mb-2">
          {/* <Image src={'/utn.svg'} alt="UTN logo" width={80} height={80}/>  */}
          <span className="text-3xl text-green-600 font-black">A</span>
        </div>
        <span className="font-medium">Angel Gonzalez</span>
      </header>
      {/* nav */}
      <nav>
        <ul className="py-5">
            <li>Home</li>
        </ul>
      </nav>
      {/* footer */}
    </div>
  );
}
