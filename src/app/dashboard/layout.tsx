export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Navbar dashboard</div>
      <main>{children}</main>
      <div>footer dashboard</div>
    </>
  );
}
