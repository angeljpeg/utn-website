"use client";
import { useEffect } from "react";
import { UseHeader } from "@/lib/stores/header";

export default function EduContinua() {
  const setHeader = UseHeader((state) => state.setHeader);

  useEffect(() => {
    setHeader("Educacion Continua", "/OfertaEducativa.webp");
  }, [setHeader]);

  return <div className="">EduContinua</div>;
}
