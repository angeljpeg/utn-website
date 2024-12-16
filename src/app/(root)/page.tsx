import {
  HeroSection,
  Ventajas,
  Objetivo,
  Numeralia,
  Map,
  Noticias,
  Footer,
  Services
} from "@/components/root/HomePage";

export default function Page() {
  return (
    <section>
      {/* HERO SECTION */}
      <HeroSection />

      {/* NUMERALIA */}
      <Numeralia />

      {/* VENTAJAS */}
      <Ventajas />

      {/* NOTICIAS */}
      <Noticias />

      {/* SERVICIOS */}
      <Services />

      {/* OBJETIVO */}
      <Objetivo />

      {/* GOOGLE MAPS */}
      <Map />

      <Footer />
    </section>
  );
}
