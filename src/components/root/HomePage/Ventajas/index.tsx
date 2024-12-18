import React from "react";
import { razones } from "@/data/Ventajas";
import { Icon } from "@/components/ui/DynamicIcon";

export function Ventajas() {
  return (
    <section className="w-full h-auto bg-gradient-to-b from-gray-200 to-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20 max-w-screen-xl">
        {/* Título */}
        <h3 className="text-home-title text-4xl md:text-6xl font-extrabold mb-3 text-center py-3">
          ¿Por qué Nosotros?
        </h3>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8">
          Descubre las razones que nos hacen destacar como líderes en el
          mercado. Tu éxito es nuestro compromiso.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl py-5">
          {razones.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Ícono y Título */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full text-white">
                  <Icon name={item.icon} />
                </div>
                <h4 className="font-bold text-xl sm:text-2xl text-gray-800">
                  {item.title}
                </h4>
              </div>
              {/* Descripción */}
              <p className="text-start text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
