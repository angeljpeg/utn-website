"use client";
import { useEffect } from "react";
import { UseHeader } from "@/lib/stores/header";
import NuevoModelo from "@/components/root/CarrerasPage/NuevoModelo";

export default function Carreras() {
  const setHeader = UseHeader((state) => state.setHeader);

  useEffect(() => {
    setHeader("Oferta Educativa", "/OfertaEducativa.webp");
  }, [setHeader]);

  return (
    <section className="w-full">
      <section className="px-20">
        <NuevoModelo />
      </section>
    </section>
  );
}
