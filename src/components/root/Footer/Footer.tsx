import Image from "next/image";
import React from "react";

export const linksFooter = [
  {
    name: "Políticas Internas de Admón",
    link: "/pdf",
  },
  {
    name: "Certificación de competencias",
    link: "/certificaciones",
  },
  {
    name: "Educación continua",
    link: "/edu-continua",
  },
  {
    name: "Programa emprendedores",
    link: "/emprendedores",
  },
  {
    name: "Informes de Cuenta Pública",
    link: "/pdf",
  },
  {
    name: "Comité de Control y Desempeño Institucional (COCODI)",
    link: "/pdf",
  },
  {
    name: "LGCG Artículos 60 al 63",
    link: "/pdf",
  },
  {
    name: "Aviso de Privacidad",
    link: "/pdf",
  },
  {
    name: "Plataforma Nacional de Transparencia",
    link: "https://www.plataformadetransparencia.org.mx/Inicio",
  },
];

export function Footer() {
  return (
    <footer className="min-h-[50vh] bg-neutral-800 flex flex-col">
      {/* PARTE DE ARRIBA */}
      <div className="flex flex-wrap items-center justify-between px-8 py-10 gap-10 h-full">
        {/* Logo y Nombre */}
        <div className="flex items-center justify-center flex-col gap-3">
          <Image
            src={"/utn-blanco.svg"}
            alt="logo UTN"
            width={176}
            height={176}
          />
          <h1 className="text-xl font-bold text-center text-neutral-50">
            Universidad Tecnologica De Nogales
          </h1>
          <span className="text-sm text-stone-600 font-bold">
            Opción con Futuro
          </span>
        </div>

        {/* Enlaces de interés */}
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold text-neutral-50">
            Sitios de Interés
          </span>
          <ul className="flex flex-col gap-4">
            {linksFooter.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-center duration-150 ease-in-out text-neutral-400 hover:text-green-500 hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PARTE DE ABAJO */}
      <div className="bg-neutral-900 text-neutral-400 text-sm text-center py-4">
        © {new Date().getFullYear()} Universidad Tecnologica De Nogales. Todos
        los derechos reservados.
      </div>
    </footer>
  );
}
