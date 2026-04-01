import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Analytics } from "@vercel/analytics/react";


export function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

      <Analytics />
    </>
  );
}
