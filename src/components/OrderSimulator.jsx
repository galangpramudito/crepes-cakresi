import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  MapPin
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function OrderSimulator({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}) {
  const [selectedOutlet, setSelectedOutlet] = useState(STORE_INFO.outlets[0].name);
  const [orderType, setOrderType] = useState('Bungkus (Take Away)');
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('QRIS');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const currentOutletObj = STORE_INFO.outlets.find(o => o.name === selectedOutlet) || STORE_INFO.outlets[0];
  const targetWaNumber = currentOutletObj.phone.replace(/[^0-9]/g, '').replace(/^0/, '62');

  const generateWhatsAppMessage = () => {
    let msg = `Halo *Crepes Cak Resz*! 👋\n`;
    msg += `Saya mau pesan crepes:\n\n`;
    msg += `📋 *DATA PEMESAN:*\n`;
    msg += `• Nama: ${customerName ? customerName : 'Pelanggan'}\n`;
    msg += `• Cabang: ${selectedOutlet}\n`;
    msg += `• Jenis: ${orderType}\n`;
    msg += `• Pembayaran: ${paymentMethod}\n\n`;
    
    msg += `🥞 *RINCIAN MENU:*\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}* x${item.quantity} (${formatRupiah(item.unitPrice * item.quantity)})\n`;
      if (item.crispinessLevel) msg += `   - Tekstur: ${item.crispinessLevel}\n`;
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        msg += `   - Topping: ${item.selectedToppings.map(t => t.name).join(', ')}\n`;
      }
      if (item.notes) msg += `   - Catatan: "${item.notes}"\n`;
    });

    msg += `\n💰 *TOTAL: ${formatRupiah(subtotal)}*\n\n`;
    msg += `Mohon konfirmasi pesanan saya ya. Terima kasih! 🙏`;

    return encodeURIComponent(msg);
  };

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/${targetWaNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/40 backdrop-blur-xs flex justify-end">
      <div 
        className="bg-white w-full max-w-sm h-full shadow-2xl flex flex-col border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-stone-800" />
            <h3 className="font-bold text-stone-900 text-sm">Pesanan Anda</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-2 text-stone-500">
              <p className="text-sm font-semibold text-stone-700">Keranjang masih kosong</p>
              <p className="text-xs">Silakan pilih menu crepes yang Anda inginkan.</p>
              <button
                onClick={onClose}
                className="mt-3 text-xs font-bold text-amber-800 underline"
              >
                Lihat Menu
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-500 uppercase text-[11px]">Daftar Item ({cart.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-stone-400 hover:text-red-600 text-[11px]"
                  >
                    Kosongkan
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <strong className="text-stone-900 block font-semibold">{item.name}</strong>
                        <span className="text-stone-500 text-[11px]">{formatRupiah(item.unitPrice)}</span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="text-stone-400 hover:text-red-500 p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Custom details */}
                    {(item.crispinessLevel || (item.selectedToppings && item.selectedToppings.length > 0) || item.notes) && (
                      <div className="text-[10px] text-stone-500 bg-white p-2 rounded border border-stone-200/80 space-y-0.5">
                        {item.crispinessLevel && <div>Tekstur: {item.crispinessLevel}</div>}
                        {item.selectedToppings && item.selectedToppings.length > 0 && (
                          <div>Topping: {item.selectedToppings.map(t => t.name).join(', ')}</div>
                        )}
                        {item.notes && <div>Catatan: "{item.notes}"</div>}
                      </div>
                    )}

                    {/* Quantity & Subtotal */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-white px-2 py-0.5 rounded border border-stone-200">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                          className="text-stone-500 p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-xs text-stone-800 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                          className="text-stone-500 p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-stone-900">
                        {formatRupiah(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="space-y-3 pt-3 border-t border-stone-200 text-xs">
                <div>
                  <label className="block text-stone-600 font-semibold mb-1">
                    Pilih Cabang:
                  </label>
                  <select
                    value={selectedOutlet}
                    onChange={(e) => setSelectedOutlet(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-lg p-2 text-xs focus:outline-none"
                  >
                    {STORE_INFO.outlets.map((o) => (
                      <option key={o.id} value={o.name}>{o.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-stone-600 font-semibold mb-1">
                    Jenis Pesanan:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {['Bungkus (Take Away)', 'Makan di Tempat'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setOrderType(type)}
                        className={`p-2 rounded-lg border text-center font-semibold text-xs transition-colors ${
                          orderType === type
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white text-stone-700 border-stone-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">Nama Pemesan:</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">Metode Bayar:</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full p-2 bg-white border border-stone-200 rounded-lg text-xs focus:outline-none"
                    >
                      <option value="QRIS">QRIS</option>
                      <option value="Tunai / Cash">Tunai</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-stone-900">
              <span>Total Pesanan:</span>
              <span className="text-base text-stone-900 font-display">{formatRupiah(subtotal)}</span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5 text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Kirim Pesanan ke WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
