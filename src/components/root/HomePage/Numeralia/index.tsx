import React from "react";
import { numeralia } from "@/data/Numeralia";

/* 
TODO: CountUp en la Numeralia
*/

export function Numeralia() {
  return (
    <section className="w-full h-auto py-10 bg-gradient-to-b from-white to-gray-200">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div
          className="
        flex flex-wrap items-center justify-center gap-5 
        px-4 py-6 bg-green-300/30 rounded-full
      "
        >
          {numeralia.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-24 sm:w-28 lg:w-32 transition-transform duration-200 transform hover:scale-105 cursor-default"
              role="listitem"
            >
              {/* Valor */}
              <p
                className="
              text-lg sm:text-xl lg:text-2xl font-extrabold 
              text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700
            "
                aria-label={`Valor: ${item.value}`}
              >
                {item.value}
              </p>
              {/* Título */}
              <p
                className="
              text-xs sm:text-sm font-medium 
              text-gray-700 text-center
            "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
