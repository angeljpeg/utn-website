"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@/components/ui/DynamicIcon";
import type { carreras } from "@/interfaces/carreras.interface";
import { LinkGenerator } from "@/components/ui/LinkGenerator";
import { PulseLoader } from "@/components/ui/Loaders/PulseLoader";

export default function NuevoModelo() {
  const [carreras, setCarreras] = useState<carreras[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/carreras");
        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Datos obtenidos: ", data);
        setCarreras(data.data); // Aquí establecemos los datos directamente
      } catch (error) {
        console.error("Error al cargar datos: ", error);
        setCarreras([]); // Establecemos un estado vacío en caso de error
      }
    };

    loadData(); // Llamada a la función asíncrona
  }, []);
  console.log("carreras: ", carreras);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {carreras.length > 0 ? (
        carreras.map((item, index) => (
          <div
            className="rounded-md p-5 bg-gradient-to-b from-stone-100 to-white hover:scale-110 hover:shadow-lg duration-150"
            key={index}
          >
            <div className="flex flex-col items-center justify-center gap-y-5 cursor-default">
              <div className="rounded-full bg-green-300/80 p-4 text-green-500">
                <Icon name={item.icon} size={42} color="currentColor" />
              </div>
              <div className="flex flex-col gap-y-3">
                <h2 className="font-bold text-2xl text-center text-balance">
                  {item.title}
                </h2>
                <ul className="flex-col flex gap-y-2 items-center">
                  {item.carreras.tsu.map((carrera) => (
                    <li
                      className="font-semibold text-center text-balance"
                      key={carrera.slug}
                    >
                      Area:{" "}
                      <LinkGenerator
                        title={carrera.title}
                        link={`/carreras/${carrera.slug}?q=hola`}
                        className="text-green-600 hover:text-green-700 duration-150"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <PulseLoader />
      )}
    </section>
  );
}
