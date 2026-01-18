
import { Theme, Package, FAQ, Testimonial } from './types';

export const THEMES: Theme[] = [
  {
    id: 'movie-night',
    name: 'Movie Night',
    description: 'Golden popcorn, velvet cushions, and twinkling star lights for the ultimate cinematic sleepover.',
    // UPDATED WITH MOVIE NIGHT DIRECT LINK:
    image: 'https://i.postimg.cc/xdT3mSs7/Screenshot-2026-01-14-at-6-48-46-PM.png',
    tags: ['Classic', 'Cozy']
  },
  {
    id: 'spa-party',
    name: 'Spa Party',
    description: 'Serene white teepees, fluffy robes, and cucumber-scented relaxation for little queens.',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800',
    tags: ['Luxury', 'Self-Care']
  },
  {
    id: 'lilo-stitch',
    name: 'Lilo & Stitch',
    description: 'An Ohana-inspired tropical getaway with blue hues, hibiscus flowers, and surf vibes.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    tags: ['Tropical', 'Character']
  },
  {
    id: 'halloween',
    name: 'Halloween Spooktacular',
    description: 'Spooky but sweet setups with plush pumpkins, purple lights, and friendly ghost decor.',
    image: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?auto=format&fit=crop&q=80&w=800',
    tags: ['Seasonal', 'Spooky']
  },
  {
    id: 'summer',
    name: 'Summer Vibes',
    description: 'Bright citrus colors, flamingo pillows, and sunshine-ready styling for warm nights.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    tags: ['Bright', 'Cheerful']
  },
  {
    id: 'taylor-swift',
    name: 'The Eras Tour',
    description: 'Friendship bracelets, disco balls, and all the glitter for your favorite Swiftie.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800',
    tags: ['Pop Culture', 'Sparkly']
  },
  {
    id: 'sports',
    name: 'All-Star Sports',
    description: 'Field-green rugs, trophy lamps, and sports-themed pillows for the active dreamer.',
    image: 'https://images.unsplash.com/photo-1461891211039-4959227f3110?auto=format&fit=crop&q=80&w=800',
    tags: ['Active', 'Fun']
  },
  {
    id: 'tiffanys',
    name: 'Breakfast at Tiffany’s',
    description: 'Diamonds, Pearls & Besties! A sophisticated palette of Tiffany blue, silver, and black with lace teepees, pearl accessories, and custom letterboards.',
    image: 'https://i.postimg.cc/s2KNhmsn/Screenshot-2026-01-14-at-2-00-10-PM.png', 
    video: 'https://player.vimeo.com/external/370331493.sd.mp4?s=27d7301c34a3174291886e0932c69501a1c8764b&profile_id=164&oauth2_token_id=57447761',
    tags: ['Elegant', 'Classy', 'Signature']
  },
  {
    id: 'boho',
    name: 'Boho Dreamscape',
    description: 'A serene sanctuary of macramé, pampas grass, and neutral earth tones. Perfect for a sophisticated and peaceful night under the stars.',
    image: 'https://i.postimg.cc/XYPTHxT1/Screenshot-2026-01-14-at-6-34-10-PM.png',
    tags: ['Natural', 'Earthbound', 'Sophisticated']
  },
  {
    id: 'spiderman',
    name: 'Spider-Man',
    description: 'Web-slinging adventures with bold red and blue decor, city silhouettes, and hero masks.',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800',
    tags: ['Superhero', 'Bold']
  },
  {
    id: 'unicorn',
    name: 'Unicorn Dreams',
    description: 'Rainbow manes, golden horns, and pastel clouds for a truly magical evening.',
    image: 'https://images.unsplash.com/photo-1550747528-cdb45925b3f7?auto=format&fit=crop&q=80&w=800',
    tags: ['Whimsical', 'Fantasy']
  },
  {
    id: 'mermaid',
    name: 'Under the Sea',
    description: 'Shimmering scales, shell pillows, and iridescent lighting for mermaid royalty.',
    image: 'https://images.unsplash.com/photo-1544623026-6ff441314a97?auto=format&fit=crop&q=80&w=800',
    tags: ['Fantasy', 'Ocean']
  },
  {
    id: 'safari',
    name: 'Wild Safari',
    description: 'Animal prints, tropical leaves, and wooden accents for the little explorers.',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',
    tags: ['Adventure', 'Nature']
  },
  {
    id: 'new-year',
    name: 'Midnight Celebration',
    description: 'Black, gold, and silver sparkle with countdown clocks and party hats.',
    image: 'https://images.unsplash.com/photo-1546733080-dcc21288c860?auto=format&fit=crop&q=80&w=800',
    tags: ['Festive', 'Glam']
  }
];

export const PACKAGES: Package[] = [
  {
    name: 'The Essential Dream',
    price: '$250',
    description: 'Perfect for a cozy small gathering.',
    features: ['3 Premium Teepees', 'Standard Mattresses', 'Themed Bedding', 'Styling Decor', 'Twinkle Lights', 'Delivery & Setup']
  },
  {
    name: 'The Ultimate Celebration',
    price: '$450',
    description: 'Our most popular choice for birthdays.',
    features: ['6 Premium Teepees', 'High-Density Foam Mattresses', 'Full Themed Styling', 'Personalized Name Boards', 'Breakfast Trays', 'Luxury Gift Packs', 'Full Setup & Breakdown']
  },
  {
    name: 'The Grand Gala',
    price: 'Custom',
    description: 'When bigger is better. Fully customized.',
    features: ['10+ Teepees', 'Custom Backdrop Styling', 'Balloon Garland', 'Dedicated Party Host for 1hr', 'Customized Themes', 'Priority Setup']
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What is included in a setup?",
    answer: "Each teepee setup includes the teepee tent, a professional-grade mattress, fresh linens, themed pillows, blankets, breakfast trays, decorative lighting, and themed accessories."
  },
  {
    question: "How much space is required?",
    answer: "Each teepee setup requires approximately 3ft x 6ft of clear floor space. We recommend clearing the area before our arrival for a smooth setup."
  },
  {
    question: "Do you clean the items?",
    answer: "Absolutely. Cleanliness is our top priority. All linens are laundered with hypo-allergenic detergent after every use, and all hard surfaces are sanitized."
  },
  {
    question: "How long is the rental for?",
    answer: "Our standard rental is for overnight (approx. 20-22 hours). We typically set up in the morning or early afternoon and pick up the following morning."
  },
  {
    question: "Do you provide pillows for sleeping?",
    answer: "For hygiene reasons, we provide decorative themed pillows only. We ask that children bring their own personal pillow for sleeping."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah J.",
    location: "Blauvelt, NY",
    text: "Ali made my daughter's birthday absolutely magical. I didn't have to lift a finger—she handled everything from setup to cleanup!",
    rating: 5
  },
  {
    name: "Michael R.",
    location: "Bergenfield, NJ",
    text: "Exceeded all expectations. The attention to detail in the Taylor Swift theme was incredible. The girls haven't stopped talking about it!",
    rating: 5
  },
  {
    name: "Emily W.",
    location: "New City, NY",
    text: "Being a busy mom, this service was a lifesaver. Beautiful, high-quality, and so professional. Ali is the best!",
    rating: 5
  }
];
