
import imgHair1 from './assets/hair/1.jpg';
import imgHair2 from './assets/hair/2.jpg';
import imgHair3 from './assets/hair/3.jpg';
import imgHair4 from './assets/hair/4.jpg';
import imgNails1 from './assets/nails/download.png';
import imgNails2 from './assets/nails/images.jpg';
import imgNails3 from './assets/nails/nails_1.png';
import imgNails4 from './assets/nails/nails_2.png';
import imgBrows1 from './assets/brows/3.png';
import imgBrows2 from './assets/brows/5.png';
import imgBrows3 from './assets/brows/6.jpg';
import imgBrows4 from './assets/brows/7.webp';
import imgSkin1 from './assets/skin/8.png';
import imgSkin2 from './assets/skin/7.jpg';
import imgSkin3 from './assets/skin/9.webp';
import imgSkin4 from './assets/skin/10.png';     
   
  

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
            imgHair1,
            imgHair2,
            imgHair3,
            imgHair4
        ]
    },
    {
        id: 'nails',
        title: 'Nail Couture',
        description: 'Where precision meets luxury. Experience a flawless high-gloss finish in every detail.',
        items: ['Japanese Manicure', 'Artistic Design', 'Luxury Pedicure', 'Gel Extensions'],
        imagePrompts: [
            imgNails1,
            imgNails2,
            imgNails3,
            imgNails4
           
        ]
        
    },
    {
        id: 'brows',
        title: 'Eyes & Brows',
        description: 'Meticulous shaping and sophisticated enhancement to frame your natural beauty.',
        items: ['Brow Lamination', 'Bespoke Tinting', 'Lash Lifting', 'Volume Extensions'],
        imagePrompts: [
            imgBrows1,
            imgBrows2,
            imgBrows3,
            imgBrows4
        ]
    },
    {
        id: 'skin',
        title: 'Skin & Spa',
        description: 'Transformative treatments and serene rituals to rejuvenate your complexion and spirit.',
        items: ['Signature Hydrafacial', 'Advanced Peels', 'Aromatherapy', 'Glow Facials'],
        imagePrompts: [
            imgSkin1,
            imgSkin2,
            imgSkin3,
            imgSkin4
        ]
    }
];
