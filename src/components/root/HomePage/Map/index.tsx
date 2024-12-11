import React from "react";

export function Map() {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        {/* Título */}
        <h4 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-500 text-center">
          Encuéntranos
        </h4>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
          Estamos ubicados en el corazón de la ciudad. Encuentra nuestras
          oficinas y visítanos para obtener más información.
        </p>

        {/* Contenedor del mapa */}
        <div className="w-3/4 md:w-2/3 h-[400px] lg:h-[500px] bg-green-50 rounded-lg shadow-md overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.911070720905!2d-122.08424968468993!3d37.42199997981959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e44f24c935%3A0xd6d6d0b99ac0c7c2!2sGoogleplex!5e0!3m2!1sen!2sus!4v1639468326357!5m2!1sen!2sus"
            allowFullScreen={false}
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>

        {/* Información adicional */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-800">
            Dirección: Calle Ejemplo 123, Ciudad, País
          </p>
          <p className="text-lg font-medium text-gray-800">
            Horario: Lunes a Viernes, 9:00 AM - 6:00 PM
          </p>
          <button className="mt-4 px-6 py-2 bg-green-500 text-white text-lg rounded-md shadow hover:bg-green-600 transition">
            Abrir en Google Maps
          </button>
        </div>
      </div>
    </section>
  );
}
