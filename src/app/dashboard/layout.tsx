import {NavbarDashboard} from '@/components/dashboard/NavbarDashboard'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarDashboard isOpen={true} />
      <main>{children}</main>
      <div>footer dashboard</div>
    </>
  );
}
