import { Metadata } from "next";
import { poppins } from "@/config/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bienvenidos UTN",
  description: "Website oficial de la Universidad Tecnologica de Nogales",
  icons: "/utn.svg",
  keywords: "Universidad, tecnologica, nogales,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
