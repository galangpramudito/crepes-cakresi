export const STORE_INFO = {
  brandName: 'Crepes Cak Resi',
  ownerName: 'Resi Hutomo',
  tagline: 'Kerenyahan Klasik & Topping Melimpah Sejak 2013',
  vendorType: 'Jajanan PKL & Catering Acara',
  since: '2013',
  yearsActive: '10+ Tahun',
  phone: '0889-8905-5777',
  whatsappNumber: '6288989055777',
  targetMarket: 'Semua Umur (Anak-anak, Remaja, hingga Keluarga)',

  // Foto asli lapak & Mas Resi (file di public/images/)
  images: {
    hero: '/images/hero-lapak-taman.jpg', // Pemandangan Mas Resi di taman sore
    menuPhoto: '/images/menu-gerobak-asli.jpg', // Foto Mas Resi senyum di samping papan menu
    masResi: '/images/hero-mas-resi.jpg', // Foto Mas Resi bawa crepes jempol
    catering: '/images/live-cooking.jpg', // Live cooking di pesta
    cart: '/images/gerobak-taman.jpg'
  },

  location: {
    spotName: 'Lapak Gerobak Taman Mutiara Citra Graha',
    street: 'Taman Perumahan Mutiara Citra Graha, Desa Bligo',
    district: 'Kec. Candi, Kabupaten Sidoarjo, Jawa Timur',
    landmark: 'Area taman terbuka / lapangan santai Perumahan Mutiara Citra Graha, Dusun Rawan, Desa Bligo',
    nearbyAreas: [
      'Perum Mutiara Citra Graha',
      'Desa Bligo & Dusun Rawan',
      'Desa Larangan & Sekardangan',
      'Wedoroklurak, Klurak & Candi',
      'Sekitar Kecamatan Candi & Sidoarjo'
    ],
    hours: 'Setiap Hari: 15.00 – 18.00 WIB (Sore hingga malam)',
    openTime: '15:00',  // dipakai untuk status "Lagi buka / Tutup" (WIB)
    closeTime: '18:00',
    payment: 'Tunai & QRIS',
    mapUrl: 'https://maps.google.com/?q=Perumahan+Mutiara+Citra+Graha+Bligo+Candi+Sidoarjo',
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.861777085732!2d112.710777!3d-7.472911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e108152c1cb7%3A0x7d6a5068285c5b9!2sMutiara%20Citra%20Graha!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
    parking: 'Parkir motor & sepeda santai gratis di pelataran taman'
  },

  catering: {
    title: 'Layanan Catering & Pesanan Acara',
    desc: 'Melayani pesanan crepes hangat untuk arisan RT/RW, pesta ulang tahun anak, rapat warga, dan hajatan keluarga di Candi & Sidoarjo.',
    minOrder: 'Mulai 20 porsi (Bisa diantar langsung atau live cooking di lokasi acara)',
    leadTime: 'Pesan H-1 atau H-2 via WhatsApp Mas Resi Hutomo'
  }
};

export const FAQS = [
  {
    question: 'Di mana lokasi crepes terdekat di area Desa Bligo Candi Sidoarjo?',
    answer: 'Lapak Crepes Cak Resi (Mas Resi Hutomo) berlokasi tepat di area Taman Perumahan Mutiara Citra Graha, Dusun Rawan, Desa Bligo, Kecamatan Candi, Kabupaten Sidoarjo. Sangat mudah dijangkau bagi Anda yang mencari crepes terdekat dari wilayah Candi, Larangan, Sekardangan, Wedoroklurak, Klurak, hingga Tanggulangin. Buka setiap sore pukul 15.00 hingga 18.00 WIB.'
  },
  {
    question: 'Kenapa Crepes Cak Resi disebut salah satu crepes enak dan terbaik di Sidoarjo?',
    answer: 'Karena Mas Resi Hutomo sudah konsisten berjualan sejak tahun 2013 (lebih dari 10 tahun). Menggunakan bahan berkualitas halal tanpa pengawet, adonan dipanggang dadakan langsung di 3 loyang putar sehingga menghasilkan kerenyahan keemasan yang tahan lama, topping tidak pelit, dan harga merakyat mulai Rp 3.000.'
  },
  {
    question: 'Berapa harga crepes di Crepes Cak Resi?',
    answer: 'Harga tergantung jumlah rasa: 1 rasa Rp 3.000, 2 rasa Rp 5.000, dan 3 rasa Rp 7.000. Tersedia 11 pilihan rasa bebas campur: Strawberry, Blueberry, Melon, Nanas, Vanilla, Durian, Meses, Oreo, Keju, Milo, dan Coklat. Khusus anak yatim dan piatu, GRATIS.'
  },
  {
    question: 'Bagaimana cara pesan crepes untuk catering acara di Sidoarjo?',
    answer: 'Anda bisa langsung menghubungi Mas Resi Hutomo via WhatsApp di nomor 0889-8905-5777 minimal H-1 atau H-2 sebelum acara. Kami melayani catering crepes dan live cooking untuk ulang tahun anak, arisan RT/RW, resepsi, dan rapat warga di area Candi dan Sidoarjo dengan paket hemat mulai dari 20 porsi.'
  },
  {
    question: 'Bisa pesan via WhatsApp dulu sebelum mampir ke lapak taman?',
    answer: 'Bisa sekali! Anda bisa chat WA terlebih dahulu untuk titip pesanan, jadi saat Anda tiba di Taman Perumahan Mutiara Citra Graha Bligo, crepes hangat sudah siap diambil tanpa perlu lama mengantre.'
  },
  {
    question: 'Metode pembayaran apa saja yang diterima di lapak gerobak?',
    answer: 'Kami menerima uang tunai (cash) serta pembayaran non-tunai lewat scan barcode QRIS yang sudah tersedia di gerobak.'
  }
];

// Foto dokumentasi asli gerobak & Mas Resi
export const GALLERY = [
  {
    url: '/images/hero-mas-resi.jpg',
    title: 'Mas Resi Hutomo',
    alt: 'Mas Resi Hutomo peracik Crepes Cak Resi terdekat dan enak di Bligo Sidoarjo sejak 2013',
    desc: 'Peracik crepes legendaris sejak 2013'
  },
  {
    url: '/images/menu-gerobak-asli.jpg',
    title: 'Papan Menu Asli di Gerobak',
    alt: 'Papan harga Crepes Cak Resi mulai Rp 3.000 sampai Rp 7.000 dan gratis anak yatim di Sidoarjo',
    desc: 'Harga 1, 2, 3 rasa & anak yatim gratis'
  },
  {
    url: '/images/hero-lapak-taman.jpg',
    title: 'Suasana Lapak Taman Sore',
    alt: 'Lapak gerobak crepes terdekat di Taman Perumahan Mutiara Citra Graha Desa Bligo Candi Sidoarjo',
    desc: 'Mangkal di Taman Mutiara Citra Graha Bligo'
  },
  {
    url: '/images/live-cooking.jpg',
    title: 'Live Cooking Acara Resepsi',
    alt: 'Layanan catering crepes terbaik Sidoarjo dengan live cooking oleh Mas Resi Hutomo',
    desc: 'Mas Resi masak crepes langsung di depan tamu'
  }
];
