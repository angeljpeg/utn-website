import { Navbar } from "@/components/root/Navbar/Navbar";
import { Footer } from "@/components/root/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
