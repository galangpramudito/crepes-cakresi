# 🥞 Crepes Cak Resi - Landing Page Jajanan Kaki Lima

Landing page statis, bersih, dan ramah untuk UMKM kuliner gerobak kaki lima **Crepes Cak Resi**. Dibuat dengan **React 18 + Vite + Tailwind CSS**, tanpa sistem digitalisasi yang berlebihan, mencerminkan identitas lapak kaki lima yang otentik dan merakyat.

---

## 📌 Karakteristik & Fitur

1. **Konsep Kaki Lima Otentik**:
   - Satu titik lapak mangkal: Taman Perum Mutiara Citra Graha, Desa Bligo, Candi, Sidoarjo.
   - Jam mangkal sore hingga malam: **15.00 - 18.00 WIB** (atau sampai adonan habis).
   - Badge "Lagi buka / Tutup" otomatis mengikuti jam WIB (atur di `storeData.js` → `openTime` / `closeTime`).

2. **Daftar Menu & Harga (sesuai papan gerobak)** — diatur di `src/data/menuData.js`:
   - **1 Rasa**: Rp 3.000 · **2 Rasa**: Rp 5.000 · **3 Rasa**: Rp 7.000
   - **11 Rasa**: Strawberry, Blueberry, Melon, Nanas, Vanilla, Durian, Meses, Oreo, Keju, Milo, Coklat.
   - **Anak yatim / piatu: GRATIS.**
   - **Catering**: Paket Ultah Anak 25 porsi (Rp 200rb), Paket Arisan 40 porsi (Rp 350rb).

3. **Tanpa Digitalisasi Berlebihan**:
   - Tidak ada keranjang belanja e-commerce atau form checkout yang rumit.
   - Tersedia tombol cepat **"Titip Pesan via WA"** untuk pelanggan yang ingin memesan terlebih dahulu agar tidak perlu antre lama saat tiba di gerobak.

4. **Informasi Lokasi Mangkal**:
   - Peta Google Maps embed langsung ke titik mangkal.
   - Pembayaran: Tunai & QRIS gerobak.

---

## 🚀 Menjalankan Project

```bash
# Masuk ke folder project
cd crewebs

# Jalankan server development
npm run dev

# Build produksi statis
npm run build
```
Hasil build statis tersimpan di folder `dist/` dan siap diunggah ke hosting statis mana pun.
