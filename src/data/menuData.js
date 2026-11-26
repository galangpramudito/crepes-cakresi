// =====================================================
// MENU CREPES CAK RESI (sesuai papan menu di gerobak)
// Harga ditentukan oleh jumlah rasa yang dipilih.
// =====================================================

// Daftar rasa (urutan sesuai papan gerobak)
export const FLAVORS = [
  'Strawberry',
  'Blueberry',
  'Melon',
  'Nanas',
  'Vanilla',
  'Durian',
  'Meses',
  'Oreo',
  'Keju',
  'Milo',
  'Coklat',
];

// Paket harga. `featured: true` -> kartu ditonjolkan.
export const PRICE_TIERS = [
  {
    id: 'r1',
    flavors: 1,
    price: 3000,
    title: '1 Rasa',
    note: 'Pilih satu rasa favorit dari 11 pilihan.',
    combos: [['Coklat'], ['Keju'], ['Oreo'], ['Strawberry'], ['Milo']],
    combosLabel: 'Paling sering dipilih',
  },
  {
    id: 'r2',
    flavors: 2,
    price: 5000,
    title: '2 Rasa',
    note: 'Campur dua rasa, bebas pilih.',
    combos: [
      ['Strawberry', 'Keju'],
      ['Meses', 'Keju'],
      ['Blueberry', 'Oreo'],
      ['Nanas', 'Melon'],
      ['Vanilla', 'Milo'],
    ],
  },
  {
    id: 'r3',
    flavors: 3,
    price: 7000,
    title: '3 Rasa',
    note: 'Paling puas, tiga rasa sekaligus.',
    featured: true,
    combos: [
      ['Vanilla', 'Meses', 'Keju'],
      ['Strawberry', 'Blueberry', 'Meses'],
      ['Durian', 'Oreo', 'Keju'],
      ['Melon', 'Coklat', 'Oreo'],
      ['Nanas', 'Meses', 'Durian'],
    ],
  },
];

export const MIN_PRICE = Math.min(...PRICE_TIERS.map((t) => t.price));

// Paket catering acara (harga per paket)
export const CATERING_PACKAGES = [
  {
    id: 'c1',
    name: 'Ultah Anak',
    portions: 25,
    price: 200000,
    desc: 'Rasa favorit anak-anak',
  },
  {
    id: 'c2',
    name: 'Arisan & Rapat RT',
    portions: 40,
    price: 350000,
    desc: 'Bebas campur rasa',
  },
];
