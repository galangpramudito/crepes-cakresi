import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CateringSection from './components/CateringSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { waLink } from './lib/utils';

export default function App() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 text-choco-950 flex flex-col font-sans selection:bg-caramel-600 selection:text-white relative">

      {/* Skip Link for Accessibility */}
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-choco-950 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Langsung ke Menu &rarr;
      </a>

      {/* Header Navigation */}
      <Navbar />

      {/* Main Flow: Non-AI Slop, Authentic Street Food Flow */}
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <CateringSection />
        <GallerySection />
        <LocationSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Button (Zero SVG, Pure Clean CSS Badge) */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showFab ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-caramel-600 hover:bg-caramel-500 text-white font-display text-xs sm:text-sm font-black uppercase tracking-wider px-5 py-3.5 rounded-full shadow-2xl shadow-black/50 border border-caramel-400/50 hover:scale-105 active:scale-95 transition-all"
          title="Chat WhatsApp Mas Resi"
        >
          <span className="font-mono text-base font-black">&bull;</span>
          <span>Pesan via WA</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

    </div>
  );
}
