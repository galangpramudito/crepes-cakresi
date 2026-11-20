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

import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

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
          crispinessLevel: 'Extra Crispy',
          notes: '',
          unitPrice: item.price
        }
      ]);
    }
    showToast(`Ditambahkan: ${item.name}`);
  };

  const handleConfirmCustomAdd = (customizedItem) => {
    setCart([...cart, customizedItem]);
    showToast(`Ditambahkan: ${customizedItem.name}`);
  };

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

  const handleRemoveItem = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col font-sans selection:bg-amber-600 selection:text-white relative">
      
      {/* Subtle Promo Strip */}
      <PromoBanner />

      {/* Clean Navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        
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

      {/* Clean Footer */}
      <Footer />

      {/* Floating Cart Button (Clean, Non-intrusive) */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-5 right-5 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-stone-950 hover:bg-stone-800 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-xs font-semibold transition-all"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-stone-200" />
              <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            </div>
            <span>Pesanan ({totalCartCount})</span>
          </button>
        </div>
      )}

      {/* Customizer Modal */}
      <CustomizerModal
        item={customizingItem}
        isOpen={Boolean(customizingItem)}
        onClose={() => setCustomizingItem(null)}
        onConfirmAdd={handleConfirmCustomAdd}
      />

      {/* Order Simulator / Cart Drawer */}
      <OrderSimulator
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Minimal Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-3.5 py-2 rounded-xl shadow-lg text-xs font-medium">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
