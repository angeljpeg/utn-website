import { Aperture } from "lucide-react";
import React from "react";

export function Ventajas() {
  return (
    <section className="w-full h-auto bg-gradient-to-b from-gray-200 to-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        <h3 className="text-4xl md:text-6xl font-extrabold mb-3 text-green-500 text-center">
          ¿Por qué Nosotros?
        </h3>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8">
          Descubre las razones que nos hacen destacar como líderes en el
          mercado. Tu éxito es nuestro compromiso.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl py-5 px-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full text-white">
                  <Aperture size={36} />
                </div>
                <h4 className="font-bold text-xl sm:text-2xl text-gray-800">
                  Título {index + 1}
                </h4>
              </div>
              <p className="text-start text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                totam voluptates! Corrupti qui veritatis explicabo atque quo
                quae ab voluptatum quos enim ex. Voluptates blanditiis omnis,
                ipsa nihil modi repellat!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
