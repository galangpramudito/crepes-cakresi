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
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 flex flex-col font-sans selection:bg-amber-600 selection:text-white relative">
      
      {/* Clean & Attractive Navbar */}
      <Navbar />

      {/* Main Flow */}
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

      {/* Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Contact Button to Mas Resi */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Mas%20Resi%20Hutomo,%20saya%20mau%20pesan%20crepes`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-4 py-3 rounded-2xl shadow-lg shadow-green-700/30 flex items-center gap-2 text-xs font-black transition-all hover:scale-105 active:scale-95 group"
          title="Chat Mas Resi via WhatsApp"
        >
          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Chat Mas Resi</span>
        </a>
      </div>

    </div>
  );
}
