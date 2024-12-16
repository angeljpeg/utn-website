import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface razones {
    title: string
    description: string
    icon: keyof typeof dynamicIconImports
}

export const razones : razones[] = [
  {
    title: "Compromiso con el crecimiento personal y profesional",
    description:
      "Además de la formación académica, la UTN fomenta el desarrollo integral de sus estudiantes, brindándoles herramientas y oportunidades para crecer tanto a nivel personal como profesional.",
    icon: "trending-up",
  },
  {
    title: "Programas de estudio innovadores y tecnológicos",
    description:
      "Con programas diseñados para atender las necesidades actuales de la industria, la UTN ofrece una formación moderna en áreas clave de tecnología, innovación y desarrollo sustentable.",
    icon: "badge-check",
  },
  {
    title: "Educación práctica y orientada al mercado laboral",
    description:
      "La UTN se enfoca en un modelo educativo basado en competencias, asegurando que los estudiantes obtengan experiencia práctica que los prepara directamente para las demandas del mercado laboral.",
    icon: "handshake",
  },
];
