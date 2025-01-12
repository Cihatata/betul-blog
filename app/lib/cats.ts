export interface CatImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
}

export const catImages: CatImage[] = [
  {
    id: 1,
    src: '/cats/cat1.jpeg',
    alt: 'İstanbul Kedisi',
    description: 'Sultanahmet\'te bir sabah kahvaltısına ortak olan sevimli dostumuz.'
  },
  {
    id: 2,
    src: '/cats/cat2.jpg',
    alt: 'Kütüphane Kedisi',
    description: 'İstanbul Üniversitesi kütüphanesinin maskotu, kitapların arasında.'
  },
  {
    id: 3,
    src: '/cats/cat3.jpg',
    alt: 'Balıkçı Kedisi',
    description: 'Eminönü\'nde balıkçıların en sadık müşterisi.'
  },
  {
    id: 4,
    src: '/cats/cat4.jpeg',
    alt: 'Boğaz Kedisi',
    description: 'Ortaköy sahilinde martıları seyreden zarif kedi.'
  },
  {
    id: 5,
    src: '/cats/cat5.jpg',
    alt: 'Çay Bahçesi Kedisi',
    description: 'Beyoğlu\'ndaki tarihi çay bahçesinin gediklisi.'
  },
  {
    id: 6,
    src: '/cats/cat6.jpg',
    alt: 'Adalar Kedisi',
    description: 'Büyükada\'da fayton durağında güneşlenen tembel kedi.'
  },
  {
    id: 7,
    src: '/cats/cat7.jpg',
    alt: 'Kapalıçarşı Kedisi',
    description: 'Kapalıçarşı\'nın en eski sakini, antikacı dükkanının bekçisi.'
  },
  {
    id: 8,
    src: '/cats/cat8.jpg',
    alt: 'Galata Kedisi',
    description: 'Galata Kulesi\'nin eteklerinde turistlerle fotoğraf çektiren sosyetik kedi.'
  },
  {
    id: 9,
    src: '/cats/hama.png',
    alt: 'hama',
    description: 'hama'nin eteklerinde turistlerle fotoğraf çektiren sosyetik kedi.'
  }
] 
