import { CalendarClock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export function Map() {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20 max-w-screen-xl">
        {/* Título */}
        <h4 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 tracking-tight">
          Encuéntranos
        </h4>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10">
          Estamos ubicados en el corazón de la ciudad. Encuentra nuestras
          oficinas y visítanos para obtener más información.
        </p>

        <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-center">
          {/* Información adicional */}
          <div className="flex flex-col items-start gap-8 max-w-sm">
            {[
              {
                icon: <MapPin size={32} className="shrink-0" />,
                text: "Av. Universidad #271, Colonia Universitaria, Nogales, Sonora",
              },
              {
                icon: <CalendarClock size={32} className="shrink-0" />,
                text: "Lunes a Viernes, 9:00 AM - 6:00 PM",
              },
              {
                icon: <Phone size={32} className="shrink-0" />,
                text: "(631) 31 11830 - 44",
              },
              {
                icon: <Mail size={32} className="shrink-0" />,
                text: "rectoria@utnogales.edu.mx",
              },
            ].map(({ icon, text }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-green-500 p-4 w-full"
              >
                {icon}
                <p className="text-lg text-gray-800">{text}</p>
              </div>
            ))}
          </div>

          {/* Contenedor del mapa */}
          <div className="w-full md:w-2/3 h-auto aspect-video bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.5003665765705!2d-110.97979339775263!3d31.23409798204942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d1134c717c2469%3A0xf6cf37832a2814da!2sUniversidad%20Tecnol%C3%B3gica%20de%20Nogales!5e0!3m2!1ses-419!2smx!4v1733971882528!5m2!1ses-419!2smx"
              allowFullScreen
              loading="lazy"
              title="Ubicación en Google Maps"
              aria-label="Mapa de ubicación de la Universidad Tecnológica de Nogales"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
