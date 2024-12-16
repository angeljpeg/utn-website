"use client";
import { useEffect } from "react";
import { UseHeader } from "@/lib/stores/header";
import Image from "next/image";
import { HeaderPage } from "@/components/root/components/Header";

export default function EduContinua() {
  const setHeader = UseHeader((state) => state.setHeader);

  useEffect(() => {
    setHeader("Educacion Continua", "/OfertaEducativa.webp");
  }, [setHeader]);

  return (
    <section className="w-full">
      <main className="min-h-screen">
        <div className="flex justify-center w-full mb-12t">
          <div className="w-full px-4 lg:w-3/4 md:w-11/12">
            <HeaderPage
              title="Educación continua y Servicios Tecnológicos"
              subtitle="Servicios"
            />
            <div className="flex flex-col-reverse md:flex-row lg:items-center gap-6">
              {/* Imagen */}
              <div className="flex items-center justify-center h-auto md:w-1/3 lg:w-1/4">
                <Image
                  src="/utn.svg"
                  alt="Logo de la Universidad Tecnológica de Nogales"
                  className="w-48 h-auto md:w-full lg:w-auto"
                  loading="lazy"
                  height={144}
                  width={144}
                />
              </div>
              {/* Texto */}
              <div className="md:w-2/3 lg:w-3/4">
                <h2 className="text-lg italic font-medium text-neutral-800 mb-2">
                  Objetivo de ECST
                </h2>
                <p className="mb-4 text-justify">
                  Contribuir al desarrollo de la comunidad, fortaleciendo la
                  fuerza laboral mediante capacitación, cursos, seminarios,
                  asistencia técnica y evaluación de competencias profesionales.
                  La Universidad Tecnológica cuenta con registro ante la
                  Secretaría de Trabajo y Previsión Social como agente
                  capacitador. Conoce nuestro catálogo de cursos para tu empresa
                  u organización.
                </p>
                <p className="text-neutral-800">
                  <span className="font-medium">Más informes en:</span>
                  capacitacion@utnogales.edu.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
