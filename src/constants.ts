
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
    description: 'Transform your look with our master stylists. From bespoke coloring to architectural cuts, we create hair that reflects your inner radiance.',
    items: ['Bespoke Haircuts', 'Signature Balayage', 'Keratin Smoothing', 'Editorial Styling'],
    imagePrompts: [
      '/assets/hair/hair_1.png',
      '/assets/hair/hair_2.png',
      '/assets/hair/hair_3.png',
      '/assets/hair/hair_4.png'
    ]
  },
  {
    id: 'nails',
    title: 'Nail Couture',
    description: 'A sanctuary for your hands and feet. Our artisans combine precision with luxury to deliver a flawless, high-gloss finish.',
    items: ['Japanese Manicure', 'Gel Extensions', 'Artistic Nail Design', 'Luxury Pedicure'],
    imagePrompts: [
      '/assets/nails/nails_1.png',
      '/assets/nails/nails_2.png',
      'https://images.unsplash.com/photo-1604654894610-df490982570d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'brows-lashes',
    title: 'Eyes & Brows',
    description: 'Enhance your natural gaze with meticulous brow shaping and lash extensions. Every detail is refined for a sophisticated look.',
    items: ['Brow Lamination', 'Bespoke Tinting', 'Lash Lifting', 'Volume Extensions'],
    imagePrompts: [
      'https://images.unsplash.com/photo-1522337660859-02fbefce4ff4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'skincare',
    title: 'Skin & Spa',
    description: 'Indulge in transformative skin treatments. Our spa experiences are designed to rejuvenate your complexion and soothe your soul.',
    items: ['Signature Hydrafacial', 'Advanced Skin Peel', 'Aromatherapy Massage', 'Glow Facial'],
    imagePrompts: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519735810506-be859678c18a?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
