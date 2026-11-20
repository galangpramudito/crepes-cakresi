import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  MapPin, 
  Clock, 
  MessageCircle, 
  AlertCircle,
  CheckCircle2,
  Receipt
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
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('QRIS (BCA/Gopay/Dana/dll)');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  // Find target outlet phone
  const currentOutletObj = STORE_INFO.outlets.find(o => o.name === selectedOutlet) || STORE_INFO.outlets[0];
  const targetWaNumber = currentOutletObj.phone.replace(/[^0-9]/g, '').replace(/^0/, '62');

  // Format WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `Halo *Crepes Cak Resz*! 👋\n`;
    msg += `Saya mau pesan crepes krispi dengan rincian berikut:\n\n`;
    msg += `📋 *DATA PEMESAN:*\n`;
    msg += `• Nama: ${customerName ? customerName : 'Pelanggan Cak Resz'}\n`;
    if (customerPhone) msg += `• No. Kontak: ${customerPhone}\n`;
    msg += `• Cabang Outlet: ${selectedOutlet}\n`;
    msg += `• Jenis Pesanan: ${orderType}\n`;
    msg += `• Metode Bayar: ${paymentMethod}\n\n`;
    
    msg += `🥞 *RINCIAN MENU (${cart.length} item):*\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}* x${item.quantity}\n`;
      msg += `   - Harga: ${formatRupiah(item.unitPrice)}/porsi\n`;
      if (item.crispinessLevel) {
        msg += `   - Kerenyahan: ${item.crispinessLevel}\n`;
      }
      if (item.selectedToppings && item.selectedToppings.length > 0) {
        const topNames = item.selectedToppings.map(t => `${t.name} (+${formatRupiah(t.price)})`).join(', ');
        msg += `   - Topping Ekstra: ${topNames}\n`;
      }
      if (item.notes) {
        msg += `   - Catatan: "${item.notes}"\n`;
      }
      msg += `   - Subtotal: ${formatRupiah(item.unitPrice * item.quantity)}\n\n`;
    });

    msg += `💰 *TOTAL ESTIMASI: ${formatRupiah(subtotal)}*\n\n`;
    msg += `Mohon konfirmasi ketersediaan dan perkiraan waktu pembuatannya ya. Terima kasih! 🙏✨`;

    return encodeURIComponent(msg);
  };

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;
    const encoded = generateWhatsAppMessage();
    const url = `https://wa.me/${targetWaNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-amber-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-amber-100 flex items-center justify-between bg-amber-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-stone-900 text-base">Keranjang & Simulasi Pesanan</h3>
              <p className="text-xs text-stone-500">
                {cart.length === 0 ? 'Belum ada menu dipilih' : `${cart.length} varian dipilih`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="text-5xl">🥞</div>
              <h4 className="font-bold text-stone-800 text-base">Keranjang Masih Kosong</h4>
              <p className="text-stone-500 text-xs sm:text-sm max-w-xs mx-auto">
                Yuk pilih crepes manis atau gurih favoritmu di daftar menu dan nikmati kerenyahannya!
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
              >
                Pilih Menu Sekarang
              </button>
            </div>
          ) : (
            <>
              {/* Order List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold uppercase text-stone-500 tracking-wider">Item Dipesan</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-500 hover:text-red-700 font-bold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Kosongkan</span>
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="p-3.5 bg-amber-50/50 rounded-2xl border border-amber-200/70 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
                        <span className="text-xs font-black text-amber-600">
                          {formatRupiah(item.unitPrice)}
                        </span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="text-stone-400 hover:text-red-500 p-1 transition-colors"
                        title="Hapus menu ini"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Customization Details */}
                    {(item.crispinessLevel || (item.selectedToppings && item.selectedToppings.length > 0) || item.notes) && (
                      <div className="text-[11px] bg-white p-2 rounded-xl border border-amber-100 text-stone-600 space-y-1">
                        {item.crispinessLevel && (
                          <div className="flex items-center gap-1 text-amber-800 font-medium">
                            <span>✨ Tekstur:</span> <strong>{item.crispinessLevel}</strong>
                          </div>
                        )}
                        {item.selectedToppings && item.selectedToppings.length > 0 && (
                          <div className="text-stone-600">
                            <span>Topping: </span>
                            {item.selectedToppings.map(t => t.name).join(', ')}
                          </div>
                        )}
                        {item.notes && (
                          <div className="text-stone-500 italic">
                            Catatan: "{item.notes}"
                          </div>
                        )}
                      </div>
                    )}

                    {/* Quantity Stepper & Subtotal */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-stone-200">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                          className="text-stone-500 hover:text-stone-900 p-0.5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-extrabold text-xs text-stone-800 w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                          className="text-stone-500 hover:text-stone-900 p-0.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-black text-xs text-stone-800">
                        Subtotal: {formatRupiah(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options Form */}
              <div className="space-y-4 pt-4 border-t border-amber-100">
                <span className="text-xs font-extrabold uppercase text-stone-500 tracking-wider block">
                  Pengaturan Pengambilan
                </span>

                {/* Pilih Outlet */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>Pilih Cabang Outlet Tujuan:</span>
                  </label>
                  <select
                    value={selectedOutlet}
                    onChange={(e) => setSelectedOutlet(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-stone-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  >
                    {STORE_INFO.outlets.map((o) => (
                      <option key={o.id} value={o.name}>
                        {o.name} ({o.district})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Jenis Pesanan */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    Jenis Pesanan:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Bungkus (Take Away)', 'Makan di Tempat (Dine In)'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setOrderType(type)}
                        className={`p-2.5 rounded-xl border text-center font-bold transition-all ${
                          orderType === type
                            ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nama Pemesan */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Nama Pemesan:
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Cth: Budi"
                      className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Metode Pembayaran:
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full text-xs bg-white border border-stone-200 rounded-xl px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    >
                      <option value="QRIS (Semua Bank / E-Wallet)">QRIS</option>
                      <option value="Tunai / Cash di Kasir">Tunai (Cash)</option>
                    </select>
                  </div>
                </div>

              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Grand Total & WA Trigger */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-amber-100 bg-amber-50/60 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-stone-600">Total Pembayaran:</span>
              <span className="text-2xl font-black text-amber-600 font-display">
                {formatRupiah(subtotal)}
              </span>
            </div>

            <p className="text-[11px] text-stone-500 leading-tight">
              *Pesanan akan otomatis dirangkum dan diteruskan ke WhatsApp kasir cabang <strong>{selectedOutlet}</strong>.
            </p>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-lg shadow-green-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Kirim Pesanan ke WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
