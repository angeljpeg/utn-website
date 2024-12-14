"use client";
import React, { useEffect } from "react";

export default function NuevoModelo() {
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/carreras");
        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Datos obtenidos: ", data);
      } catch (error) {
        console.error("Error al cargar datos: ", error);
      }
    };

    loadData(); // Llamada a la función asíncrona
  }, []);

  return <div> Nuevo Modelo </div>;
}
