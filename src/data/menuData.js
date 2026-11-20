export const MENU_CATEGORIES = [
  { id: 'all', name: 'Semua Menu' },
  { id: 'manis', name: 'Crepes Manis' },
  { id: 'gurih', name: 'Crepes Gurih' },
  { id: 'minuman', name: 'Minuman Dingin' },
];

export const MENU_ITEMS = [
  // MANIS
  {
    id: 'm1',
    name: 'Cokelat Susu Klasik',
    category: 'manis',
    price: 7000,
    isPopular: true,
    description: 'Olesan margarin wangi dengan taburan cokelat meses melimpah dan kental manis.',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80',
    tags: ['Cokelat', 'Susu']
  },
  {
    id: 'm2',
    name: 'Keju Susu Gurih Manis',
    category: 'manis',
    price: 9000,
    isPopular: true,
    description: 'Parutan keju cheddar melimpah disiram susu kental manis, gurih dan manis pas.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    tags: ['Keju', 'Susu']
  },
  {
    id: 'm3',
    name: 'Choco Cheese Spesial (Cokelat + Keju)',
    category: 'manis',
    price: 11000,
    isPopular: true,
    description: 'Kombinasi paling laris di gerobak! Cokelat manis lumer berpadu keju parut gurih asin.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80',
    tags: ['Paling Laris', 'Cokelat Keju']
  },
  {
    id: 'm4',
    name: 'Pisang Cokelat Keju',
    category: 'manis',
    price: 13000,
    isPopular: true,
    description: 'Irisan buah pisang manis alami ditambah meses cokelat tebal dan keju parut.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    tags: ['Pisang Asli', 'Cokelat', 'Keju']
  },
  {
    id: 'm5',
    name: 'Strawberry Susu Manis',
    category: 'manis',
    price: 8000,
    isPopular: false,
    description: 'Selai strawberry segar manis-asam berpadu susu kental manis dan kulit crepes renyah.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    tags: ['Selai Strawberry', 'Segar']
  },
  {
    id: 'm6',
    name: 'Oreo Susu Crumble',
    category: 'manis',
    price: 10000,
    isPopular: false,
    description: 'Remahan biskuit Oreo hitam yang renyah dengan susu kental manis gurih.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
    tags: ['Oreo', 'Susu']
  },

  // GURIH
  {
    id: 'm7',
    name: 'Sosis Sapi Saus Mayo',
    category: 'gurih',
    price: 10000,
    isPopular: true,
    description: 'Potongan sosis sapi gurih dibalut mayones dan pilihan saus tomat atau sambal pedas.',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80',
    tags: ['Sosis Sapi', 'Mayo', 'Pedas/Tomat']
  },
  {
    id: 'm8',
    name: 'Sosis Keju Mayo Komplit',
    category: 'gurih',
    price: 12000,
    isPopular: true,
    description: 'Sosis sapi dengan parutan keju gurih, saus cabai, dan mayo gurih mantap.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    tags: ['Favorit Gurih', 'Sosis Keju']
  },
  {
    id: 'm9',
    name: 'Daging Asap (Smoked Beef) Mayo',
    category: 'gurih',
    price: 14000,
    isPopular: false,
    description: 'Irisan daging sapi asap beraroma khas dipadu mayones lembut dan bumbu gurih.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Daging Asap', 'Mayo']
  },

  // MINUMAN DINGIN
  {
    id: 'm10',
    name: 'Es Teh Manis Jumbo',
    category: 'minuman',
    price: 4000,
    isPopular: true,
    description: 'Es teh melati segar dingin porsi gelas jumbo, pas buat teman ngemil crepes hangat.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    tags: ['Es Teh Melati', 'Porsi Jumbo']
  },
  {
    id: 'm11',
    name: 'Es Jeruk Peras',
    category: 'minuman',
    price: 5000,
    isPopular: false,
    description: 'Perasan jeruk segar asli dengan gula pasir dan es batu dingin pelepas dahaga.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    tags: ['Jeruk Asli', 'Segar Dingin']
  },
  {
    id: 'm12',
    name: 'Air Mineral Dingin',
    category: 'minuman',
    price: 3000,
    isPopular: false,
    description: 'Air mineral botol 600ml dingin dari cooler gerobak.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
    tags: ['Air Dingin']
  }
];

export const TOPPINGS_EXTRA = [
  { name: 'Extra Keju Parut', price: 2000 },
  { name: 'Extra Cokelat Meses', price: 2000 },
  { name: 'Extra Potongan Sosis', price: 3000 },
  { name: 'Extra Irisan Pisang', price: 2000 },
  { name: 'Extra Remah Oreo', price: 2000 }
];
