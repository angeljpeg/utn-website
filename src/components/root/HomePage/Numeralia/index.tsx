import { Badge } from 'lucide-react'
import React from 'react'

export function Numeralia() {
  return (
    <section className="w-full h-auto py-16 bg-gradient-to-b from-white to-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center px-6">
          {/* Título */}
          <h4 className="text-4xl md:text-6xl font-extrabold mb-3 text-green-500 text-center">
            Numeralia
          </h4>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8">
            Conoce nuestras cifras destacadas que reflejan nuestro impacto
            educativo.
          </p>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            {[
              {
                title: "Oferta educativa",
                value: "16",
              },
              {
                title: "Alumnos egresados ING",
                value: "3168",
              },
              {
                title: "Alumnos egresados TSU",
                value: "6337",
              },
              {
                title: "Matrícula actual",
                value: "1732",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Ícono opcional */}
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                <Badge size={36}/>
                </div>
                {/* Número */}
                <p className="text-5xl font-extrabold text-green-500 mb-2">
                  {item.value}
                </p>
                {/* Título */}
                <p className="text-lg font-medium text-center text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
