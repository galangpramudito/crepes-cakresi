import { STORE_INFO } from '../data/storeData';

export const formatRupiah = (value) =>
  'Rp ' + new Intl.NumberFormat('id-ID').format(value);

export const waLink = (text = 'Halo Mas Resi Hutomo, saya mau pesan crepes') =>
  `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;

// "16:00" -> "15.00"
export const formatTime = (hhmm) => hhmm.replace(':', '.');

export const hoursLabel = () => {
  const { openTime, closeTime } = STORE_INFO.location;
  return `${formatTime(openTime)}–${formatTime(closeTime)}`;
};
