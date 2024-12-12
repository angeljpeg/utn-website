import {
  HeroSection,
  Ventajas,
  Objetivo,
  Numeralia,
  Map,
  Noticias,
} from "@/components/root/HomePage";

export default function Page() {
  return (
    <section>
      {/* HERO SECTION */}
      <HeroSection />

      {/* VENTAJAS */}
      <Ventajas />

      {/* NOTICIAS */}
      <Noticias />
      
      {/* OBJETIVO */}
      <Objetivo />

      {/* NUMERALIA */}
      <Numeralia />

      {/* GOOGLE MAPS */}
      <Map />
    </section>
  );
}
