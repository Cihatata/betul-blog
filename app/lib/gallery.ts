export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/betul1.jpg',
    alt: 'İstanbul Boğazı',
    description: 'Öğrencilerimle İstanbul Boğazı gezisinden bir kare. Tarihi yarımadanın eşsiz manzarası.'
  },
  {
    id: 2,
    src: '/gallery/betul2.jpg',
    alt: 'Kapadokya',
    description: 'Kapadokya\'da bir sabah. Peri bacaları ve sıcak hava balonları.'
  },
  {
    id: 3,
    src: '/gallery/betul3.jpg',
    alt: 'Efes Antik Kenti',
    description: 'Efes Antik Kenti\'nde Türkçe dersi. Tarih ve dil bir arada.'
  },
  {
    id: 4,
    src: '/gallery/betul4.jpg',
    alt: 'Efes Antik Kenti',
    description: 'Efes Antik Kenti\'nde Türkçe dersi. Tarih ve dil bir arada.'
  },
  {
    id: 5,
    src: '/gallery/betul5.jpg',
    alt: 'Efes Antik Kenti',
    description: 'Efes Antik Kenti\'nde Türkçe dersi. Tarih ve dil bir arada.'
  },
  {
    id: 6,
    src: '/gallery/betul6.jpg',
    alt: 'Efes Antik Kenti',
    description: 'Efes Antik Kenti\'nde Türkçe dersi. Tarih ve dil bir arada.'
  },
  {
    id: 7,
    src: '/gallery/betul7.jpg',
    alt: 'Efes Antik Kenti',
    description: 'Efes Antik Kenti\'nde Türkçe dersi. Tarih ve dil bir arada.'
  },
  {
    id: 8,
    src: '/gallery/betul8.jpg',
    alt: 'Efes Antik Kenti',
    description: ''
  },
  // Diğer resimler...
] 