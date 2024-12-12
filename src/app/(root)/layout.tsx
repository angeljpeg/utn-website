import { Navbar } from "@/components/root/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div>footer website</div>
    </>
  );
}
