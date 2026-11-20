import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import CustomizerModal from './components/CustomizerModal';
import OrderSimulator from './components/OrderSimulator';
import LocationSection from './components/LocationSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import { ShoppingBag, MessageCircle, ArrowUp } from 'lucide-react';
import { STORE_INFO } from './data/storeData';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Show temporary toast notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add standard item to cart directly
  const handleQuickAddToCart = (item) => {
    const existingIndex = cart.findIndex(
      (c) => c.id === item.id && (!c.selectedToppings || c.selectedToppings.length === 0)
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          cartId: `${item.id}-${Date.now()}`,
          quantity: 1,
          selectedToppings: [],
          crispinessLevel: 'Extra Crispy (Golden)',
          notes: '',
          unitPrice: item.price
        }
      ]);
    }
    showToast(`Berhasil menambah "${item.name}" ke pesanan!`);
  };

  // Add customized item from modal
  const handleConfirmCustomAdd = (customizedItem) => {
    setCart([...cart, customizedItem]);
    showToast(`Berhasil menambah "${customizedItem.name}" ke pesanan!`);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCart(
      cart.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  // Clear all cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Total quantity count in cart
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white relative">
      
      {/* Top Announcement Promo Bar */}
      <PromoBanner />

      {/* Main Navigation Header */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenMenu={() => {
            const menuEl = document.querySelector('#menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCart={() => setIsCartOpen(true)}
        />
        
        <Features />
        
        <MenuSection 
          onAddToCart={handleQuickAddToCart}
          onCustomizeItem={(item) => setCustomizingItem(item)}
        />

        <LocationSection />

        <GallerySection />

        <Testimonials />

        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Action Buttons (Sticky at Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Floating WhatsApp Quick Order Button */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Crepes%20Cak%20Resz,%20saya%20mau%20pesan%20crepes!`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white p-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
          title="Chat WhatsApp Langsung"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:group-hover:inline-block text-xs font-bold pr-1 transition-all">
            Chat WhatsApp
          </span>
        </a>

        {/* Floating Cart Button */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="pointer-events-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 animate-bounce"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            </div>
            <span className="text-xs font-black">
              Lihat Pesanan ({totalCartCount})
            </span>
          </button>
        )}

      </div>

      {/* Item Customizer Modal */}
      <CustomizerModal
        item={customizingItem}
        isOpen={Boolean(customizingItem)}
        onClose={() => setCustomizingItem(null)}
        onConfirmAdd={handleConfirmCustomAdd}
      />

      {/* Order Simulator / Cart Slide-over Drawer */}
      <OrderSimulator
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-stone-900/90 text-white px-4 py-2.5 rounded-2xl shadow-xl text-xs sm:text-sm font-semibold flex items-center gap-2 backdrop-blur animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="text-amber-400">🥞</span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
