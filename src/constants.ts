export interface Product {
  id: string;
  name: string;
  category: 'Sarees' | 'Suits' | 'Kurtis' | 'Co-ords' | 'Rentals';
  price: string;
  image: string;
  images?: string[];
  description: string;
  features?: string[];
  isRental?: boolean;
  note?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'EMERALD ROYALE EMBROIDERED SAREE',
    category: 'Sarees',
    price: '₹5070.00',
    image: '/uploads/saree/emerald-royale-embroidered-saree-1.png',
    images: [
      '/uploads/saree/emerald-royale-embroidered-saree-1.png',
      '/uploads/saree/emerald-royale-embroidered-saree-2.png',
      '/uploads/saree/emerald-royale-embroidered-saree-3.png'
    ],
    description: 'Luxurious olive green saree adorned with intricate embroidered border work and delicate embellishments, designed for weddings, festive celebrations, and elegant evening occasions.',
    features: ['Premium shimmer fabric with graceful drape', 'Intricate floral embroidered border detailing', 'Elegant handcrafted embellishments throughout', 'Lightweight and comfortable for long wear', 'Ideal for weddings, receptions, festive events, and parties', 'Includes matching blouse fabric'],
    isRental: false
  },
  {
    id: '2',
    name: 'Lavender Vine Embroidered Suit Set',
    category: 'Suits',
    price: '₹2,599.00',
    image: '/uploads/suits/lavender-vine-embroidered-suit-set-1.png',
    images: [
      '/uploads/suits/lavender-vine-embroidered-suit-set-1.png',
      '/uploads/suits/lavender-vine-embroidered-suit-set-2.png',
      '/uploads/suits/lavender-vine-embroidered-suit-set-3.png',
      '/uploads/suits/lavender-vine-embroidered-suit-set-4.png'
    ],
    description: 'An elegant lavender suit set adorned with delicate vine-inspired embroidery and intricate neckline detailing. Paired with matching trousers and a sheer dupatta, this graceful ensemble blends contemporary charm with timeless sophistication, making it perfect for festive gatherings, family functions, and special occasions.',
    features: [
      'Premium silk-blend fabric with a soft luxurious sheen',
      'Intricately embroidered neckline with elegant handcrafted detailing',
      'Delicate vine-inspired embroidery accented with contrast leaf motifs',
      'Matching straight-fit trousers for a refined coordinated look',
      'Lightweight sheer dupatta with graceful border finishing',
      'Perfect for festive celebrations, family gatherings, and special occasions'
    ],
    isRental: false
  },
  {
    id: '3',
    name: 'Ivory Peacock Elegance Saree',
    category: 'Sarees',
    price: '₹1,800.00 / day',
    image: '/uploads/saree/ivory-peacock-elegance-saree-1.png',
    images: [
      '/uploads/saree/ivory-peacock-elegance-saree-1.png',
      '/uploads/saree/ivory-peacock-elegance-saree-2.png',
      '/uploads/saree/ivory-peacock-elegance-saree-3.png'
    ],
    description: 'A timeless ivory saree enhanced with delicate embroidered borders and paired with a beautifully crafted peacock motif jacket. The sophisticated silhouette, intricate craftsmanship, and graceful drape make this ensemble an ideal choice for weddings, festive celebrations, cultural events, and elegant evening occasions.',
    features: [
      'Premium ivory fabric with a fluid and graceful drape',
      'Intricately embroidered peacock motif jacket with artisanal detailing',
      'Delicate embroidered border enhancing the saree’s elegance',
      'Fusion silhouette combining traditional charm with contemporary styling',
      'Lightweight and comfortable for extended wear',
      'Perfect for weddings, festive occasions, receptions, and cultural celebrations'
    ],
    isRental: true
  },
  {
    id: '4',
    name: 'Ruby Peacock Embroidered Palazzo Set',
    category: 'Suits',
    price: '₹1,200.00 / day',
    image: '/uploads/suits/rubby-peacock-embroidered-palazzo-set-1.png',
    images: [
      '/uploads/suits/rubby-peacock-embroidered-palazzo-set-1.png',
      '/uploads/suits/rubby-peacock-embroidered-palazzo-set-2.png',
      '/uploads/suits/rubby-peacock-embroidered-palazzo-set-3.png'
    ],
    description: 'A statement-making ruby red ensemble featuring exquisite peacock-inspired embroidery and intricate handcrafted embellishments. Paired with flowing palazzo pants adorned with detailed border work, this contemporary ethnic outfit is perfect for weddings, receptions, festive soirées, and special celebrations.',
      features: [
    'Premium georgette fabric with elegant flow and movement',
    'Intricately embroidered peacock motifs with rich zari detailing',
    'Handcrafted embellishments featuring sequins, beads, and threadwork',
    'Stylish halter-neck silhouette for a contemporary ethnic look',
    'Matching embroidered palazzo pants with ornate border detailing',
    'Perfect for weddings, receptions, festive occasions, and evening celebrations'
    ],
    note: ['Attachable sleeves included for optional styling and added coverage'],
    isRental: true
  },
  {
    id: '5',
    name: 'Blossom Garden Embroidered Lehenga Set',
    category: 'Rentals',
    price: '₹2,000.00 / day',
    image: '/uploads/lehenga/blossom-garden-embroidered-lehenga-set-1.png',
    images: [
      '/uploads/lehenga/blossom-garden-embroidered-lehenga-set-1.png',
      '/uploads/lehenga/blossom-garden-embroidered-lehenga-set-2.png',
      '/uploads/lehenga/blossom-garden-embroidered-lehenga-set-3.png'
    ],
    description: 'A graceful ivory lehenga set adorned with vibrant floral embroidery inspired by blooming spring gardens. Paired with a beautifully embroidered blouse and a delicate net dupatta featuring floral borders, this ensemble creates a fresh, feminine, and elegant look perfect for weddings, festive celebrations, engagement ceremonies, and daytime functions.',
    features: [
    'Premium lehenga set with vibrant all-over floral embroidery',
    'Beautifully crafted embroidered blouse with coordinated floral motifs',
    'Soft net dupatta featuring embroidered floral border detailing',
    'Flared silhouette offering elegant movement and graceful drape',
    'Lightweight and comfortable for extended festive wear',
    'Perfect for weddings, mehendi ceremonies, engagements, festive events, and celebrations'
  ],
    isRental: true
  },
  {
    id: '6',
    name: 'Terracotta Lace Co-Ord Set',
    category: 'Co-ords',
    price: '₹1,199 .00',
    image: '/uploads/cords/terracotta-lace-co-ord-set-1.png',
    images: [
      '/uploads/cords/terracotta-lace-co-ord-set-1.png'
    ],
    description: 'A chic and contemporary terracotta co-ord set crafted with intricate lace-inspired embroidery throughout. Featuring a smart collared button-down top paired with matching wide-leg trousers, this outfit offers the perfect blend of elegance and comfort for brunches, vacations, casual gatherings, and modern festive styling.',
    features: [
      'Premium embroidered fabric with intricate lace-inspired patterns',
      'Stylish collared button-down top with coordinated detailing',
      'Matching wide-leg trousers for a modern and flattering silhouette',
      'Soft, breathable, and comfortable for all-day wear',
      'Versatile design suitable for casual outings, brunches, vacations, and gatherings',
      'Effortlessly blends contemporary style with timeless elegance'
    ],
    isRental: false
  },
  {
    id: '7',
    name: 'Sunlit Blossom Draped Skirt Set',
    category: 'Rentals',
    price: '₹900 / day',
    image: '/uploads/suits/yellow-drap-1.png',
    images: [
      '/uploads/suits/yellow-drap-1.png',
      '/uploads/suits/yellow-drap-2.png',
      '/uploads/suits/yellow-drap-3.png',
    ],
    description: 'A graceful fusion ensemble featuring a floral embroidered blouse paired with a flowing ivory draped skirt and a vibrant yellow embellished cape-style dupatta. The contemporary silhouette and delicate craftsmanship make it a stunning choice for haldi ceremonies, daytime weddings, festive celebrations, and destination events.',
    features: [
      'Intricately embroidered floral blouse with handcrafted detailing',
      'Flowing draped skirt silhouette for elegant movement',
      'Embellished cape-style dupatta with colorful accents',
      'Lightweight fabric offering comfort and effortless grace',
      'Contemporary fusion design with traditional craftsmanship',
      'Perfect for Haldi ceremonies, weddings, festive occasions, and celebrations'
    ],
    isRental: true
  },
  {
    id: '8',
    name: 'Sunshine Bloom Embroidered Saree',
    category: 'Sarees',
    price: '3300.00',
    image: '/uploads/saree/sunshine-bloom-embroidered-saree-1.png',
    images: [
      '/uploads/saree/sunshine-bloom-embroidered-saree-1.png',
      '/uploads/saree/sunshine-bloom-embroidered-saree-2.png',
      '/uploads/saree/sunshine-bloom-embroidered-saree-3.png'
    ],
    description: 'Radiate elegance in this vibrant yellow saree featuring delicate floral embroidery and intricate handcrafted border detailing. Its lightweight flow and graceful drape make it a perfect choice for festive celebrations, daytime weddings, haldi ceremonies, and special occasions.',
    features: [
      'Vibrant sunshine yellow hue with elegant appeal',
      'Intricate floral embroidery with delicate threadwork',
      'Scalloped embroidered border with refined detailing',
      'Lightweight fabric for effortless draping and comfort',
      'Perfect for Haldi, Mehendi, festive celebrations, and weddings',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
  {
    id: '9',
    name: 'Amber Lace Co-Ord Set',
    category: 'Co-ords',
    price: '1199.00',
    image: '/uploads/cords/amber-lace-co-ord-set-1.png',
    images: [
      '/uploads/cords/amber-lace-co-ord-set-1.png',
      '/uploads/cords/amber-lace-co-ord-set-2.png',
      '/uploads/cords/amber-lace-co-ord-set-3.png'
    ],
    description: 'A chic mustard yellow co-ord set crafted with intricate floral lace detailing, featuring a sleeveless peplum-style top paired with straight-fit trousers. Designed for effortless elegance, this ensemble is perfect for brunches, vacations, casual celebrations, and contemporary festive styling.',
    features: [
      'Premium floral lace fabric with intricate detailing',
      'Elegant sleeveless peplum-style top design',
      'Comfortable straight-fit trousers for all-day wear',
      'Lightweight and breathable construction',
      'Perfect for brunches, vacations, casual parties, and festive gatherings',
      'Modern coordinated silhouette with effortless styling'
    ],
    isRental: false
  },
  {
    id: '10',
    name: 'Crimson Heritage Embroidered Suit Set',
    category: 'Suits',
    price: '3150.00',
    image: '/uploads/suits/crimson-heritage-embroidered-suit-set-1.png',
    images: [
      '/uploads/suits/crimson-heritage-embroidered-suit-set-1.png',
      '/uploads/suits/crimson-heritage-embroidered-suit-set-2.png',
      '/uploads/suits/crimson-heritage-embroidered-suit-set-3.png'
    ],
    description: 'A regal crimson red suit set featuring intricate zari embroidery and traditional motifs. Designed with a beautifully detailed neckline, embroidered straight kurta, matching palazzo pants, and coordinating dupatta, this ensemble is perfect for festive celebrations, weddings, and cultural occasions.',
    features: [
      'Premium festive fabric with rich sheen and elegant drape',
      'Intricately embroidered neckline with traditional zari detailing',
      'Matching embroidered palazzo pants for a coordinated look',
      'Complementary dupatta with detailed embroidered borders',
      'Comfortable silhouette ideal for extended celebrations',
      'Perfect for weddings, festive occasions, family functions, and cultural events'
    ],
    isRental: false
  },
  {
    id: '11',
    name: 'Mint Grace Embroidered Co-Ord Set',
    category: 'Co-ords',
    price: '1199.00',
    image: '/uploads/cords/mint-grace-embroidered-co-ord-set-1.png',
    images: [
      '/uploads/cords/mint-grace-embroidered-co-ord-set-1.png',
      '/uploads/cords/mint-grace-embroidered-co-ord-set-2.png',
      '/uploads/cords/mint-grace-embroidered-co-ord-set-3.png'
    ],
    description: 'A refreshing mint green co-ord set designed with delicate lace accents and elegant embroidery for a refined everyday look. Featuring a straight-fit kurta adorned with a graceful leaf motif and paired with tailored trousers, this ensemble offers effortless sophistication, comfort, and timeless charm for casual outings, office wear, and daytime gatherings.',
    features: [
      'Premium cotton-blend fabric for breathable all-day comfort',
      'Elegant embroidered leaf motif on the front panel',
      'Delicate lace detailing on neckline, sleeves, and hemline',
      'Straight-cut kurta paired with matching tailored trousers',
      'Lightweight and easy-to-wear design for daily elegance',
      'Perfect for office wear, casual outings, family gatherings, and daytime occasions'
    ],
    isRental: false
  },
];

