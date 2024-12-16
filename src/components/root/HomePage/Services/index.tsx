import React from "react";
import HeaderSection from "@/components/root/HomePage/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-white to-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 max-w-screen-xl">
        <HeaderSection
          title="Nuestros Servicios"
          description="Esto es lo que Universidad Tecnológica de Nogales te puede ofrecer"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl text-balance transition-shadow duration-300"
            >
              {/* Icono */}
              <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
                <Image
                  src={service.img}
                  alt={`Servicio de ${service.title}`}
                  height={128}
                  width={128}
                  className="object-contain"
                />
              </div>
              {/* Título */}
              <h6 className="font-bold text-lg md:text-xl text-center text-gray-800 mt-4">
                {service.title}
              </h6>
              {/* Descripción */}
              <p className="text-sm text-center text-gray-600 leading-relaxed mt-2">
                {service.description}
              </p>
              {/* Botón */}
              <Link
                href="/emprendedores"
                className="mt-4 text-green-600 font-medium text-sm hover:text-green-800 transition duration-150"
              >
                Leer más...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
