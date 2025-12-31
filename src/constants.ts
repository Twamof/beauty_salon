
export const COLORS = {
  primary: '#fdfbf7', // Pearl White / Background
  secondary: '#e9d5ca', // Soft Nude Pink / Accents
  accent: '#d4bdae', // Warm Gold / Light Peach
  text: '#292524', // Stone 800
  textLight: '#78716c', // Stone 500
};

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  imagePrompts: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'hair',
    title: 'Hair Artistry',
    description: 'Bespoke coloring and architectural cuts designed to reveal your inner radiance.',
    items: ['Tailored Balayage', 'Precision Cutting', 'Editorial Styling', 'Scalp Rituals'],
    imagePrompts: [
      'assets/hair/hair_1.png',
      'assets/hair/hair_2.png',
      'assets/hair/hair_3.png',
      'assets/hair/hair_4.png'
    ]
  },
  {
    id: 'nails',
    title: 'Nail Couture',
    description: 'Where precision meets luxury. Experience a flawless high-gloss finish in every detail.',
    items: ['Japanese Manicure', 'Artistic Design', 'Luxury Pedicure', 'Gel Extensions'],
    imagePrompts: [
      'assets/nails/nails_1.png',
      'assets/nails/nails_2.png',
      'https://picsum.photos/seed/nails3/800/800',
      'https://picsum.photos/seed/nails4/800/800'
    ]
  },
  {
    id: 'brows',
    title: 'Eyes & Brows',
    description: 'Meticulous shaping and sophisticated enhancement to frame your natural beauty.',
    items: ['Brow Lamination', 'Bespoke Tinting', 'Lash Lifting', 'Volume Extensions'],
    imagePrompts: [
      'https://picsum.photos/seed/brows1/800/800',
      'https://picsum.photos/seed/brows2/800/800',
      'https://picsum.photos/seed/brows3/800/800',
      'https://picsum.photos/seed/brows4/800/800'
    ]
  },
  {
    id: 'skin',
    title: 'Skin & Spa',
    description: 'Transformative treatments and serene rituals to rejuvenate your complexion and spirit.',
    items: ['Signature Hydrafacial', 'Advanced Peels', 'Aromatherapy', 'Glow Facials'],
    imagePrompts: [
      'https://picsum.photos/seed/skin1/800/800',
      'https://picsum.photos/seed/skin2/800/800',
      'https://picsum.photos/seed/skin3/800/800',
      'https://picsum.photos/seed/skin4/800/800'
    ]
  }
];
