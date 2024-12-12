import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <div className="relative w-full h-[50vh]">
          {/* Imagen de fondo */}
          <Image
            src={"/OfertaEducativa.webp"}
            alt="Banner"
            className="object-cover w-full h-full"
            height={1024}
            width={1980}
          />
          {/* Gradiente superpuesto */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/70" />
        </div>

        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2">
          <div>Titulo</div>
        </div>
      </header>
      <section className="min-h-screen overflow-y-hidden pt-10">{children}</section>
    </>
  );
}
