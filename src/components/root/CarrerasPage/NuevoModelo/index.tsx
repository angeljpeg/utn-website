"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@/components/ui/DynamicIcon";
import type {carreras} from '@/interfaces/carreras.interface'

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
    <div>
      Nuevo Modelo
      <section>
        {carreras.length > 0 ? (
          <div>
            {carreras.map((item, index) => (
              <div key={item.id || index}>
                {/* Renderiza detalles de la carrera */}
                <Icon name={item.icon} size={96} color="#3e9392" />
                <h2>{item.title}</h2>
                <ul>
                  {item.carreras.tsu.map((carrera) => (
                    <li key={carrera.slug}>{carrera.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron carreras.</p>
        )}
      </section>
    </div>
  );
}
