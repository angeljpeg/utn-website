"use client";
import { useEffect } from "react";
import { UseHeader } from "@/lib/stores/header";
import Image from "next/image";
import { HeaderPage } from "@/components/root/components/Header";
import { CheckCircleIcon } from "lucide-react";
import { services, standards, steps } from "@/data/Certificaciones";

export default function Certificaciones() {
  const setHeader = UseHeader((state) => state.setHeader);

  useEffect(() => {
    setHeader("Certificaciones", "/OfertaEducativa.webp");
  }, [setHeader]);

  return (
    <section className="w-full">
      <main className="min-h-screen">
        {/* Contenedor principal */}
        <div className="flex justify-center w-full mb-12">
          <div className="w-full px-4 lg:w-3/4 md:w-11/12">
            {/* Encabezado */}
            <HeaderPage
              title="Certificaciones de competencia"
              subtitle="Entidad de Certificación y Evaluación"
            />

            {/* Contenedor de imagen y texto */}
            <div className="flex flex-col-reverse md:flex-row lg:items-center gap-6">
              {/* Imagen */}
              <div className="flex items-center justify-center h-auto md:w-1/3 lg:w-1/4">
                <Image
                  src="/utn.svg"
                  alt="Logo de la Universidad Tecnológica de Nogales"
                  className="w-32 h-auto sm:w-48 md:w-full lg:w-auto"
                  loading="lazy"
                  height={144}
                  width={144}
                />
              </div>

              {/* Texto explicativo */}
              <div className="md:w-2/3 lg:w-3/">
                <p className="mb-4 text-justify">
                  En 2013 nos acreditamos como una Entidad de Certificación y
                  Evaluación de Competencias Laborales, la cual tiene la
                  facultad de capacitar, evaluar y certificar a las personas en
                  algún estándar de Competencia Laboral que estén inscritos en
                  el Registro Nacional de Estándares de Competencia Laboral
                  (RENEC) del Consejo Nacional de Normalización y Certificación
                  de Competencias Laborales (CONOCER).
                </p>
                <p className="text-lg italic font-medium text-neutral-800">
                  Universidad Tecnológica de Nogales, Sonora.
                </p>
              </div>
            </div>

            {/* Servicios */}
            <div className="flex flex-col items-center justify-center w-full px-4 py-10 bg-neutral-100 mt-10">
              <h3 className="pb-3 text-xl font-medium text-center text-neutral-600 lg:text-3xl md:text-2xl">
                Servicios que Ofrecemos
              </h3>
              <ul>
                {services.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 pb-4">
                    <CheckCircleIcon className="text-2xl text-neutral-600" />
                    <p className="text-sm md:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Estándares de Competencia */}
            <div className="flex justify-center w-full py-10 bg-green-50">
              <div className="w-full px-4 lg:w-3/4 md:w-11/12">
                <h3 className="pb-3 mb-10 text-xl font-medium text-center text-green-600 lg:text-3xl md:text-2xl">
                  Estándares de Competencia Laboral Acreditados en la Entidad
                </h3>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {standards.map((standard, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center p-4 bg-green-100 rounded-lg"
                    >
                      <p className="text-lg font-medium">{standard.code}</p>
                      <p className="text-center text-sm md:text-base">
                        {standard.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pasos a seguir */}
            <div className="flex justify-center w-full mt-10 mb-12">
              <div className="w-full px-4 lg:w-3/4 md:w-11/12">
                <h3 className="pb-3 text-xl font-medium text-neutral-600 lg:text-3xl md:text-2xl">
                  Si estás interesado realiza lo siguiente:
                </h3>
                <ul className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <p className="text-sm md:text-base">
                        {`${index + 1}.- ${step}`}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
