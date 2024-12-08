export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Navbar website</div>
      <main>{children}</main>
      <div>footer website</div>
    </>
  );
}
