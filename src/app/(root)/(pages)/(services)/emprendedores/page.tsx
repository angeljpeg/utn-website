"use client";
import { useEffect } from "react";
import { UseHeader } from "@/lib/stores/header";
import { HeaderPage } from "@/components/root/components/Header";
import Image from "next/image";

export default function Page() {
  const setHeader = UseHeader((state) => state.setHeader);

  useEffect(() => {
    setHeader("Emprendedores", 'https://res.cloudinary.com/dlfckf5zp/image/upload/v1734637658/carreras/torres_banner.jpg');
  }, [setHeader]);
  return (
    <section className="w-full">
      <main className="min-h-screen">
        <div className="flex justify-center w-full mb-12 h-fit">
          <div className="w-full px-4 lg:w-3/4 md:w-11/12">
            <HeaderPage title="Programa Emprendedores" subtitle="Vinculacion" />
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
                  Objetivo del Programa Emprendedores:
                </h2>
                <p className="mb-4 text-justify">
                  Promover, impulsar y desarrollar en los jóvenes estudiantes y
                  egresados de nuestra Institución Educativa un espíritu
                  independiente, emprendedor y la cultura empresarial para la
                  creación de más y mejores emprendedores integrando habilidades
                  técnicas, humanas y valores. Fomentar con el estudiantes la
                  cultura emprendedora mediante pláticas de sensibilización para
                  el mejoramiento del sistema empresarial, así como transformar
                  la falta de empleos que enfrentan los alumnos al egresar, en
                  oportunidades para iniciar su propia empresa y de esa ,amera
                  sean generadores de empleos. Brindar extensión para que haga
                  realidad su negocio a toda aquella persona que quiere crear su
                  empresa a partir de una idea. Canalizar a las Instituciones
                  Gubernamentales y Asociaciones Civiles del Estado y la
                  Federación, que brindan asesoría gratuita y capacitación para
                  emprendedores que deseen iniciar una empresa con una visión
                  competitiva, dándoles el seguimiento correspondiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
