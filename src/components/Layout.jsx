import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  // Treat an unmatched single-segment path (e.g. "/reels" from a "#reels"
  // link) as a request to scroll to the section with that id on the page.
  useEffect(() => {
    const id = pathname.replace(/^\/+/, '');
    if (!id) {
      window.scrollTo({ top: 0 });
      return;
    }
    // Wait a frame so the rendered page exists before we look for the section.
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
