import Header from "@/components/root/Header/Header";


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />      
      <section className="min-h-screen overflow-y-hidden pt-24">{children}</section>
    </>
  );
}
