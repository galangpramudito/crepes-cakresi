export const MENU_CATEGORIES = [
  { id: 'all', name: '✨ Semua Menu', icon: 'Sparkles' },
  { id: 'manis', name: '🍫 Crepes Manis', icon: 'Heart' },
  { id: 'gurih', name: '🧀 Crepes Gurih', icon: 'Award' },
  { id: 'catering', name: '🎉 Paket Catering Acara', icon: 'PartyPopper' },
  { id: 'minuman', name: '🥤 Minuman Dingin', icon: 'Coffee' },
];

export const MENU_ITEMS = [
  // MANIS
  {
    id: 'm1',
    name: 'Cokelat Susu Klasik',
    category: 'manis',
    price: 7000,
    isPopular: true,
    badge: 'Paling Murah',
    description: 'Adonan garing keemasan dengan olesan margarin harum, taburan cokelat meses tebal, dan kental manis.',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=700&q=80',
    tags: ['Cokelat Meses', 'Susu Kental', 'Ekstra Krispi']
  },
  {
    id: 'm2',
    name: 'Keju Susu Gurih Manis',
    category: 'manis',
    price: 9000,
    isPopular: true,
    badge: 'Favorit Anak-anak',
    description: 'Parutan keju cheddar melimpah disiram susu kental manis. Perpaduan asin gurih dan manis yang bikin nagih.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    tags: ['Keju Melimpah', 'Susu Manis', 'Gurih']
  },
  {
    id: 'm3',
    name: 'Choco Cheese Spesial (Cokelat + Keju)',
    category: 'manis',
    price: 11000,
    isPopular: true,
    badge: '🔥 Paling Laris',
    description: 'Menu legendaris paling dicari warga perumahan! Cokelat meses manis lumer bertemu keju cheddar parut tebal.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80',
    tags: ['Best Seller #1', 'Cokelat & Keju', 'Renyah']
  },
  {
    id: 'm4',
    name: 'Pisang Cokelat Keju',
    category: 'manis',
    price: 13000,
    isPopular: true,
    badge: 'Rekomendasi',
    description: 'Irisan buah pisang manis alami dipadukan cokelat meses legit dan taburan keju gurih melimpah.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    tags: ['Pisang Asli', 'Cokelat Keju', 'Kenyang']
  },
  {
    id: 'm5',
    name: 'Strawberry Susu Manis',
    category: 'manis',
    price: 8000,
    isPopular: false,
    badge: 'Segar Manis',
    description: 'Selai strawberry harum asam manis segar dengan siraman susu kental manis dalam balutan crepes garing.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80',
    tags: ['Selai Strawberry', 'Manis Asam', 'Krispi']
  },
  {
    id: 'm6',
    name: 'Oreo Susu Crumble',
    category: 'manis',
    price: 10000,
    isPopular: false,
    badge: 'Favorit Remaja',
    description: 'Remahan biskuit Oreo hitam yang renyah dengan siraman kental manis gurih, cemilan manis teman nongkrong.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80',
    tags: ['Biskuit Oreo', 'Susu Manis', 'Crunchy']
  },

  // GURIH
  {
    id: 'm7',
    name: 'Sosis Sapi Saus Mayo',
    category: 'gurih',
    price: 10000,
    isPopular: true,
    badge: 'Favorit Gurih',
    description: 'Potongan sosis sapi gurih dibalut mayones lembut dan pilihan saus tomat atau saus sambal pedas nikmat.',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=700&q=80',
    tags: ['Sosis Sapi', 'Mayo Gurih', 'Pedas/Tomat']
  },
  {
    id: 'm8',
    name: 'Sosis Keju Mayo Komplit',
    category: 'gurih',
    price: 12000,
    isPopular: true,
    badge: '🔥 Juara Gurih',
    description: 'Sosis sapi dengan parutan keju cheddar gurih, saus cabai, dan mayo creamy. Mantap buat ganjel perut sore.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    tags: ['Sosis & Keju', 'Mayo Creamy', 'Puas']
  },
  {
    id: 'm9',
    name: 'Daging Asap (Smoked Beef) Mayo',
    category: 'gurih',
    price: 14000,
    isPopular: false,
    badge: 'Spesial Daging',
    description: 'Irisan daging sapi asap gurih beraroma khas dipadu saus mayones lembut dan taburan bumbu rempah nikmat.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    tags: ['Daging Asap', 'Mayones', 'Aroma Asap']
  },

  // PAKET CATERING ACARA
  {
    id: 'm10',
    name: 'Paket Catering Ultah Anak (Isi 25 Porsi)',
    category: 'catering',
    price: 200000,
    isPopular: true,
    badge: '🎉 Paket Pesta',
    description: 'Paket 25 porsi crepes manis campur (Cokelat Susu, Keju Susu, Oreo). Cocok untuk ulang tahun anak atau syukuran.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80',
    tags: ['25 Porsi Hemat', 'Bisa Diantar / Live Cooking', 'Free Kemasan']
  },
  {
    id: 'm11',
    name: 'Paket Catering Arisan & Rapat RT (Isi 40 Porsi)',
    category: 'catering',
    price: 350000,
    isPopular: true,
    badge: '🎉 Paket Rame-Rame',
    description: 'Paket 40 porsi crepes kombinasi manis & sosis gurih. Sangat praktis untuk konsumsi arisan warga atau kumpul RT/RW.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    tags: ['40 Porsi Campur', 'Manis & Gurih', 'Hemat Waktu']
  },

  // MINUMAN DINGIN
  {
    id: 'm12',
    name: 'Es Teh Manis Melati Jumbo',
    category: 'minuman',
    price: 4000,
    isPopular: true,
    badge: 'Segar Banget',
    description: 'Es teh melati tradisional porsi gelas jumbo dengan es kristal dingin, teman paling nikmat ngemil crepes hangat.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80',
    tags: ['Teh Melati', 'Gelas Jumbo', 'Segar Dingin']
  },
  {
    id: 'm13',
    name: 'Es Jeruk Peras Segar',
    category: 'minuman',
    price: 5000,
    isPopular: false,
    badge: 'Jeruk Asli',
    description: 'Perasan jeruk segar asli dengan gula pasir murni dan es batu dingin pelepas dahaga sore hari.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    tags: ['Jeruk Peras', 'Asam Manis', 'Dingin']
  },
  {
    id: 'm14',
    name: 'Air Mineral Botol Dingin',
    category: 'minuman',
    price: 3000,
    isPopular: false,
    badge: 'Praktis',
    description: 'Air mineral botol 600ml dingin dari cooler lapak gerobak Mas Resi.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=700&q=80',
    tags: ['Air Mineral', 'Dingin Segar']
  }
];

export const TOPPINGS_EXTRA = [
  { name: 'Extra Keju Parut Tebal', price: 2000, icon: '🧀' },
  { name: 'Extra Cokelat Meses', price: 2000, icon: '🍫' },
  { name: 'Extra Potongan Sosis Sapi', price: 3000, icon: '🌭' },
  { name: 'Extra Irisan Pisang Manis', price: 2000, icon: '🍌' },
  { name: 'Extra Remahan Biskuit Oreo', price: 2000, icon: '🍪' }
];
