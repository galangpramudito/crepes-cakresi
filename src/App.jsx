import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CateringSection from './components/CateringSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from './data/storeData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col font-sans selection:bg-amber-800 selection:text-white relative">
      
      {/* Clean Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        
        <Features />

        <CateringSection />
        
        <MenuSection />

        <LocationSection />

        <GallerySection />

        <Testimonials />

        <FaqSection />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Contact Button to Mas Resi */}
      <div className="fixed bottom-4 right-4 z-40">
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi%20Hutomo,%20saya%20mau%20pesan%20crepes`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-xs font-bold transition-all"
          title="Hubungi Mas Resi via WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Mas Resi (WA)</span>
        </a>
      </div>

    </div>
  );
}
