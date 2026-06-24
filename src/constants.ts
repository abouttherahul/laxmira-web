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
  color: string;
  note?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'EMERALD ROYALE EMBROIDERED SAREE',
    category: 'Sarees',
    price: '₹5,070',
    color: 'Green',
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
    price: '₹2,599',
    color: 'Purple',
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
    price: '₹1,800 / day',
    color: 'Ivory',
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
    price: '₹1,200 / day',
    color: 'Red',
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
    price: '₹2,000 / day',
    color: 'Ivory',
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
    price: '₹1,199',
    color: 'Terracotta',
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
    color: 'Yellow',
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
    price: '₹3,300',
    color: 'Yellow',
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
    price: '₹1,199',
    color: 'Amber',
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
    price: '₹3,150',
    color: 'Red',
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
    price: '₹1,199',
    color: 'Green',
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
  {
    id: '12',
    name: 'Blush Pearl Festive Suit Set',
    category: 'Suits',
    price: '₹1,000/day',
    color: 'Pink',
    image: '/uploads/suits/blush-pearl-festive-suit-set-1.png',
    images: [
      '/uploads/suits/blush-pearl-festive-suit-set-1.png',
      '/uploads/suits/blush-pearl-festive-suit-set-2.png'
    ],
    description: 'An elegant blush pink suit set crafted in lustrous shimmer fabric and enhanced with intricate zari embroidery. Paired with matching embellished trousers and a graceful organza dupatta finished with delicate borders and tassel accents, this ensemble exudes timeless sophistication for festive celebrations, weddings, and special occasions.',
    features: [
      'Premium shimmer fabric with a luxurious soft sheen',
      'Intricate zari and thread embroidery on the kurta and trousers',
      'Elegant organza dupatta with embellished border detailing',
      'Matching straight-fit pants with coordinated embroidery',
      'Lightweight and comfortable for long festive celebrations',
      'Perfect for weddings, festive gatherings, receptions, and traditional occasions'
    ],
    isRental: true
  },
  {
    id: '13',
    name: 'Celeste Ruffle Gown',
    category: 'Rentals',
    price: '₹2,000/day',
    color: 'Green',
    image: '/uploads/gown/celeste-ruffle-lehenga-set-1.png',
    images: [
      '/uploads/gown/celeste-ruffle-lehenga-set-1.png',
      '/uploads/gown/celeste-ruffle-lehenga-set-2.png',
      '/uploads/gown/celeste-ruffle-lehenga-set-3.png'
    ],
    description: 'A dreamy sage green gown crafted in luminous organza with delicate floral embroidery and statement cascading ruffle detailing. The flowing silhouette, elegant shimmer, and feminine design make it a perfect choice for receptions, engagement parties, cocktail evenings, and special celebrations.',
    features: [
      'Premium organza fabric with a graceful luminous finish',
      'Intricate floral embroidery across the bodice for elegant detailing',
      'Statement cascading ruffle drape creating a dramatic silhouette',
      'Flowing flared skirt with soft movement and volume',
      'Lightweight and comfortable for extended wear at celebrations',
      'Perfect for receptions, engagement parties, cocktail events, and special occasions'
    ],
    isRental: true
  },
  {
    id: '14',
    name: 'Midnight Sapphire Layered Gown Set',
    category: 'Rentals',
    price: '₹2,000/day',
    color: 'Blue',
    image: '/uploads/gown/midnight-sapphire-layered-gown-set-1.png',
    images: [
      '/uploads/gown/midnight-sapphire-layered-gown-set-1.png',
      '/uploads/gown/midnight-sapphire-layered-gown-set-2.png',
      '/uploads/gown/midnight-sapphire-layered-gown-set-3.png'
    ],
    description: 'A striking sapphire blue gown set featuring intricate embroidery, shimmering embellishments, and dramatic layered organza drapes. Paired with a beautifully embroidered cropped blouse and matching embellished jacket, this statement ensemble blends contemporary elegance with regal charm, making it ideal for receptions, cocktail parties, weddings, and grand celebrations.',
    features: [
      'Premium organza fabric with luxurious layered drape detailing',
      'Intricately embroidered blouse and jacket with shimmering embellishments',
      'Statement tiered silhouette creating graceful volume and movement',
      'Elegant three-piece ensemble with coordinated jacket styling',
      'Lightweight construction for comfort during long celebrations',
      'Perfect for receptions, cocktail parties, weddings, festive events, and evening occasions'
    ],
    isRental: true
  },
  {
    id: '15',
    name: 'Sage Aura Cape Palazzo Set',
    category: 'Rentals',
    price: '₹1,000/day',
    color: 'Green',
    image: '/uploads/suits/sage-aura-cape-palazzo-set-1.png',
    images: [
      '/uploads/suits/sage-aura-cape-palazzo-set-1.png',
      '/uploads/suits/sage-aura-cape-palazzo-set-2.png',
      '/uploads/suits/sage-aura-cape-palazzo-set-3.png'
    ],
    description: 'A sophisticated sage green ensemble featuring an exquisitely embellished crop top paired with flowing draped palazzo pants and an elegant cape-style overlay. Designed with shimmering embroidery and graceful silhouettes, this contemporary ethnic outfit offers effortless glamour for receptions, engagement ceremonies, festive occasions, and evening celebrations.',
   features: [
      'Premium flowy fabric with elegant drape and movement',
      'Heavily embellished crop top with intricate embroidery and beadwork',
      'Stylish cape overlay with shimmering embellished borders',
      'Contemporary draped palazzo silhouette for a graceful look',
      'Lightweight and comfortable for extended festive wear',
      'Perfect for receptions, engagement ceremonies, cocktail parties, and festive celebrations'
    ],
    isRental: true
  },
  {
    id: '16',
    name: 'Blush Stardust Sequin Lehenga Set',
    category: 'Rentals',
    price: '₹3,500/day',
    color: 'Pink',
    image: '/uploads/lehenga/blush-stardust-sequin-lehenga-set-1.png',
    images: [
      '/uploads/lehenga/blush-stardust-sequin-lehenga-set-1.png',
      '/uploads/lehenga/blush-stardust-sequin-lehenga-set-2.png',
      '/uploads/lehenga/blush-stardust-sequin-lehenga-set-3.png'
    ],
    description: 'A dazzling blush pink lehenga set embellished with shimmering sequins and delicate sparkle detailing throughout. Featuring a stylish embellished blouse and a graceful attached drape accentuated with floral shoulder embellishments, this ensemble radiates modern glamour and elegance, making it perfect for receptions, cocktail parties, engagements, and grand celebrations.',
   features: [
      'Premium sequin-embellished fabric with all-over sparkle detailing',
      'Elegant embellished blouse with contemporary silhouette',
      'Flowing flared lehenga offering graceful movement and volume',
      'Attached soft drape accented with delicate floral shoulder details',
      'Lightweight construction designed for comfort during long celebrations',
      'Perfect for receptions, cocktail parties, engagements, sangeet nights, and festive occasions'
    ],
    isRental: true
  },
  {
    id: '17',
    name: 'Blush Royale Indo-Western Set',
    category: 'Rentals',
    price: '₹900/day',
    color: 'Pink',
    image: '/uploads/suits/blush-royale-indo-western-set-1.png',
    images: [
      '/uploads/suits/blush-royale-indo-western-set-1.png',
      '/uploads/suits/blush-royale-indo-western-set-2.png',
      '/uploads/suits/blush-royale-indo-western-set-3.png'
    ],
    description: 'A sophisticated blush pink Indo-Western ensemble featuring a flowing floor-length gown paired with an intricately embellished jacket-style bodice. Adorned with delicate mirror, bead, and thread embroidery, this contemporary outfit beautifully blends traditional craftsmanship with modern elegance, making it an ideal choice for receptions, engagement ceremonies, festive gatherings, and special occasions.',
   features: [
      'Premium flowy fabric with elegant movement and graceful drape',
      'Intricately embellished jacket-style bodice with mirror and beadwork',
      'Contemporary Indo-Western silhouette with a sophisticated finish',
      'Floor-length flared gown creating a regal and flattering look',
      'Matching lightweight dupatta for enhanced elegance',
      'Perfect for receptions, engagement ceremonies, festive celebrations, and evening events'
    ],
    isRental: true
  },
  {
    id: '18',
    name: 'Ivory Bloom Cape Lehenga Set',
    category: 'Rentals',
    price: '₹2,000/day',
    color: 'Ivory',
    image: '/uploads/lehenga/ivory-bloom-cape-lehenga-set-1.png',
    images: [
      '/uploads/lehenga/ivory-bloom-cape-lehenga-set-1.png',
      '/uploads/lehenga/ivory-bloom-cape-lehenga-set-2.png',
      '/uploads/lehenga/ivory-bloom-cape-lehenga-set-3.png'
    ],
    description: 'A graceful ivory lehenga set adorned with vibrant floral prints and paired with a heavily embellished blouse. The statement cape-style net drape, embellished with delicate shimmer detailing, adds a contemporary touch to this elegant ensemble. Perfectly balancing modern glamour and timeless charm, this outfit is ideal for weddings, receptions, engagement ceremonies, and festive celebrations.',
   features: [
      'Premium printed lehenga featuring elegant floral motifs',
      'Heavily embellished blouse with intricate bead and sequin work',
      'Statement cape-style net drape with shimmering embellishments',
      'Flowing flared silhouette with graceful movement and volume',
      'Lightweight and comfortable for extended festive wear',
      'Perfect for weddings, receptions, engagement ceremonies, cocktail parties, and festive occasions'
    ],
    isRental: true
  },
  {
    id: '19',
    name: 'Rose Gold Shimmer Gown',
    category: 'Rentals',
    price: '₹2,500/day',
    color: 'Pink',
    image: '/uploads/lehenga/rose-gold-shimmer-gown-1.png',
    images: [
      '/uploads/lehenga/rose-gold-shimmer-gown-1.png',
      '/uploads/lehenga/rose-gold-shimmer-gown-2.png',
      '/uploads/lehenga/rose-gold-shimmer-gown-3.png'
    ],
    description: 'A stunning rose gold evening gown crafted with luxurious shimmer fabric and a beautifully embellished bodice. The intricate sequin and beadwork on the fitted upper silhouette flows into a voluminous floor-length skirt, creating a graceful and sophisticated look. Perfect for receptions, cocktail parties, engagement celebrations, and glamorous evening events.',
   features: [
      'Premium shimmer fabric with elegant metallic sheen',
      'Intricately embellished bodice with sequin and bead detailing',
      'Flowing floor-length silhouette with graceful flare',
      'Lightweight layered construction for comfortable wear',
      'Sophisticated sleeveless design for a contemporary look',
      'Ideal for receptions, cocktail parties, engagements, and evening celebrations'
    ],
    isRental: true
  },
  {
    id: '20',
    name: 'Heritage Peach Floral Lehenga Set',
    category: 'Rentals',
    price: '₹2,500/day',
    color: 'Orange',
    image: '/uploads/lehenga/heritage-Peach-Floral-Lehenga-Set-1.png',
    images: [
      '/uploads/lehenga/heritage-Peach-Floral-Lehenga-Set-1.png',
      '/uploads/lehenga/heritage-Peach-Floral-Lehenga-Set-2.png',
      '/uploads/lehenga/heritage-Peach-Floral-Lehenga-Set-3.png'
    ],
    description: 'A timeless peach lehenga adorned with intricate floral prints and rich traditional motifs, paired with a beautifully embroidered blouse and a delicate net dupatta. The contrasting maroon and green detailing adds regal charm, making this ensemble a perfect choice for weddings, festive celebrations, and special occasions.',
   features: [
      'Elegant peach lehenga with intricate floral and heritage-inspired prints',
      'Heavily embroidered blouse with multicolor thread and zari detailing',
      'Soft net dupatta with embroidered border accents',
      'Beautiful maroon and green contrast elements for a regal look',
      'Lightweight silhouette with graceful flare and movement',
      'Ideal for weddings, festive occasions, engagement ceremonies, and celebrations'
    ],
    isRental: true
  },
  {
    id: '21',
    name: 'Royal Violet Festive Lehenga',
    category: 'Rentals',
    price: '₹2,500/day',
    color: 'Purple',
    image: '/uploads/lehenga/royal-violet-festive-lehenga-1.png',
    images: [
      '/uploads/lehenga/royal-violet-festive-lehenga-1.png',
      '/uploads/lehenga/royal-violet-festive-lehenga-2.png'
    ],
    description: 'A graceful violet lehenga set featuring intricate thread and sequin embroidery throughout the blouse and skirt. The richly patterned panels, embellished border, and lightweight net dupatta create a sophisticated festive look without the heaviness of a bridal ensemble. Perfect for wedding guests, sangeet nights, festive gatherings, and special celebrations.',
   features: [
      'Elegant violet lehenga with intricate thread and sequin embroidery',
      'Embellished blouse featuring delicate floral and geometric motifs',
      'Flared skirt with detailed panel work and ornate border design',
      'Lightweight net dupatta with scattered embellishments and finished edging',
      'Comfortable festive silhouette with graceful movement and flair',
      'Ideal for wedding functions, sangeet, festive celebrations, receptions, and parties'
    ],
    isRental: true
  },
  {
    id: '22',
    name: 'Champagne Stardust Mermaid Lehenga',
    category: 'Rentals',
    price: '₹5,500/day',
    color: 'Yellow',
    image: '/uploads/lehenga/champagne-stardust-mermaid-lehenga-1.png',
    images: [
      '/uploads/lehenga/champagne-stardust-mermaid-lehenga-1.png',
      '/uploads/lehenga/champagne-stardust-mermaid-lehenga-2.png',
      '/uploads/lehenga/champagne-stardust-mermaid-lehenga-3.png'
    ],
    description: 'A glamorous champagne-toned fish cut lehenga adorned with intricate sequin and geometric embroidery. Designed to accentuate the silhouette, this elegant ensemble features a fitted embroidered skirt, embellished blouse, and a delicately detailed net dupatta. Perfect for engagement ceremonies, receptions, cocktail evenings, and contemporary festive celebrations.',
   features: [
      'Elegant fish cut silhouette with flattering fitted design',
      'Intricate sequin, bead, and geometric embroidery throughout',
      'Heavily embellished full-sleeve blouse with premium craftsmanship',
      'Soft net dupatta featuring delicate shimmer detailing',
      'Premium shimmer fabric with graceful movement and luxurious appeal',
      'Ideal for engagements, receptions, cocktail parties, and festive occasions'
    ],
    isRental: true
  },
  {
    id: '23',
    name: 'Sunset Rani Brocade Lehenga',
    category: 'Rentals',
    price: '₹4,000/day',
    color: 'Orange',
    image: '/uploads/lehenga/sunset-rani-brocade-lehenga-1.png',
    images: [
      '/uploads/lehenga/sunset-rani-brocade-lehenga-1.png',
      '/uploads/lehenga/sunset-rani-brocade-lehenga-2.png',
      '/uploads/lehenga/sunset-rani-brocade-lehenga-4.png'
    ],
    description: 'A vibrant lehenga set showcasing a striking blend of sunset orange and rani pink hues, enriched with intricate brocade weaving and traditional zari craftsmanship. Paired with an embellished blouse and a shimmering net dupatta, this ensemble radiates festive elegance and timeless charm. A perfect choice for wedding functions, festive celebrations, and cultural occasions.',
   features: [
      'Rich brocade-inspired lehenga with intricate zari woven motifs',
      'Beautiful dual-tone combination of sunset orange and rani pink',
      'Statement blouse featuring detailed traditional pattern work',
      'Soft embellished net dupatta with elegant border detailing',
      'Graceful flared silhouette offering comfort and movement',
      'Ideal for festive celebrations, wedding functions, sangeet, and special occasions'
    ],
    isRental: true
  },
  {
    id: '24',
    name: 'Lavender Regal Jacket Lehenga',
    category: 'Rentals',
    price: '₹2,000/day',
    color: 'Purple',
    image: '/uploads/lehenga/lavender-regal-jacket-lehenga-1.png',
    images: [
      '/uploads/lehenga/lavender-regal-jacket-lehenga-1.png',
      '/uploads/lehenga/lavender-regal-jacket-lehenga-2.png',
      '/uploads/lehenga/lavender-regal-jacket-lehenga-3.png'
    ],
    description: 'A sophisticated lavender lehenga set featuring intricate all-over embroidery, paired with a stylish embroidered blouse and a matching cropped jacket. The delicate pastel hue and ornate craftsmanship create a contemporary ethnic look that is both elegant and versatile. Perfect for engagement ceremonies, receptions, festive gatherings, and wedding celebrations.',
   features: [
      'Elegant lavender lehenga with intricate all-over embroidery',
      'Fashion-forward three-piece set with matching embroidered jacket',
      'Heavily embellished blouse offering a refined designer look',
      'Detailed sequin and threadwork craftsmanship throughout',
      'Graceful flared silhouette with luxurious movement and comfort',
      'Ideal for engagements, receptions, festive occasions, cocktail events, and wedding functions'
    ],
    isRental: true
  },
  {
    id: '25',
    name: 'Champagne Éclat Lehenga',
    category: 'Rentals',
    price: '₹4,500/day',
    color: 'Yellow',
    image: '/uploads/lehenga/champagne-eclat-lehenga-1.png',
    images: [
      '/uploads/lehenga/champagne-eclat-lehenga-1.png',
      '/uploads/lehenga/champagne-eclat-lehenga-2.png',
      '/uploads/lehenga/champagne-eclat-lehenga-3.png'
    ],
    description: 'A breathtaking champagne-toned lehenga adorned with intricate sequin, bead, and shimmer embroidery that radiates elegance from every angle. Paired with a delicately embellished blouse and a soft net dupatta, this ensemble creates a refined statement for modern celebrations. Perfect for engagements, receptions, cocktail evenings, and grand festive occasions.',
   features: [
      'Luxurious champagne-toned lehenga with all-over shimmer embroidery',
      'Intricate sequin, bead, and threadwork craftsmanship throughout',
      'Elegant embellished blouse with contemporary silhouette',
      'Soft net dupatta featuring delicate border detailing',
      'Premium lightweight construction with graceful flare and movement',
      'Ideal for engagements, receptions, cocktail parties, and festive celebrations'
    ],
    isRental: true
  },
  {
    id: '26',
    name: 'Emerald Royale Lehenga',
    category: 'Rentals',
    price: '₹3,500/day',
    color: 'Green',
    image: '/uploads/lehenga/emerald-royale-lehenga-1.png',
    images: [
      '/uploads/lehenga/emerald-royale-lehenga-1.png',
      '/uploads/lehenga/emerald-royale-lehenga-2.png',
      '/uploads/lehenga/emerald-royale-lehenga-3.png'
    ],
    description: 'A luxurious emerald green lehenga embellished with intricate gold-toned embroidery and shimmering sequin work. Paired with a beautifully crafted blouse, elegant net dupatta, and matching potli bag, this ensemble exudes regal sophistication. Perfect for wedding celebrations, receptions, festive occasions, and grand evening events.',
   features: [
      'Rich emerald green lehenga with intricate gold embroidery',
      'Heavily embellished blouse featuring premium sequin and zari detailing',
      'Elegant net dupatta with embroidered border and shimmer accents',
      'Comes with a matching embellished potli bag',
      'Graceful flared silhouette with luxurious movement and drape',
      'Ideal for wedding functions, receptions, festive celebrations, and special occasions'
    ],
    isRental: true
  },
  {
    id: '27',
    name: 'Velvet Amethyst Lehenga',
    category: 'Rentals',
    price: '₹3,500/day',
    color: 'Purple',
    image: '/uploads/lehenga/velvet-amethyst-lehenga-1.png',
    images: [
      '/uploads/lehenga/velvet-amethyst-lehenga-1.png',
      '/uploads/lehenga/velvet-amethyst-lehenga-2.png',
      '/uploads/lehenga/velvet-amethyst-lehenga-3.png',
      '/uploads/lehenga/velvet-amethyst-lehenga-4.png'
    ],
    description: 'A regal velvet lehenga in a rich amethyst purple hue, accentuated with intricate gold-toned borders and elegant traditional detailing. Paired with a structured velvet blouse and a delicate net dupatta, this ensemble strikes the perfect balance between royal charm and contemporary sophistication. Ideal for wedding festivities, receptions, sangeet nights, and grand celebrations.',
   features: [
      'Luxurious velvet lehenga in a rich amethyst purple shade',
      'Elegant gold-toned embroidered borders and panel detailing',
      'Structured velvet blouse with refined traditional craftsmanship',
      'Soft net dupatta adorned with delicate embellishments',
      'Graceful flared silhouette offering a regal and flattering look',
      'Ideal for wedding functions, receptions, sangeet, festive occasions, and evening celebrations'
    ],
    isRental: true
  },
   {
    id: '28',
    name: 'Blush Beige Floral Organza Saree',
    category: 'Sarees',
    price: '₹3,300',
    color: 'Beige',
    image: '/uploads/saree/blush-beige-floral-organza-saree-1.png',
    images: [
      '/uploads/saree/blush-beige-floral-organza-saree-1.png',
      '/uploads/saree/blush-beige-floral-organza-saree-2.png',
      '/uploads/saree/blush-beige-floral-organza-saree-3.png'
    ],
    description: 'A graceful blush beige saree crafted in sheer organza, adorned with delicate floral embroidery and intricate lace border detailing. The soft pastel tone and elegant craftsmanship create a timeless look that is perfect for daytime celebrations, festive gatherings, and sophisticated occasions.',
    features: [
      'Premium organza fabric with a lightweight and airy drape',
      'Delicate floral embroidery with intricate threadwork detailing',
      'Elegant scalloped lace border for a refined finish',
      'Soft blush beige color offering timeless sophistication',
      'Comfortable silhouette with graceful flow and movement',
      'Ideal for festive occasions, daytime celebrations, parties, and family functions'
    ],
    isRental: false
  },
   {
    id: '29',
    name: 'Ruby Diamond Sequin Saree',
    category: 'Sarees',
    price: '₹5,590',
    color: 'Red',
    image: '/uploads/saree/ruby-diamond-sequin-saree-1.png',
    images: [
      '/uploads/saree/ruby-diamond-sequin-saree-1.png',
      '/uploads/saree/ruby-diamond-sequin-saree-2.png',
      '/uploads/saree/ruby-diamond-sequin-saree-3.png'
    ],
    description: 'A captivating ruby red silk saree adorned with shimmering diamond-pattern sequin embroidery and delicate lace border detailing. The rich silk drape combined with sparkling embellishments creates a graceful statement, making it a perfect choice for festive celebrations, wedding functions, receptions, and evening occasions.',
    features: [
      'Premium silk fabric with a luxurious and fluid drape',
      'Elegant diamond-pattern sequin embroidery throughout',
      'Intricate lace border detailing for a refined finish',
      'Rich ruby red hue with radiant festive appeal',
      'Lightweight construction for comfortable all-day wear',
      'Ideal for weddings, receptions, festive celebrations, and parties',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '30',
    name: 'Lilac Blossom Sequin Saree',
    category: 'Sarees',
    price: '₹5,590',
    color: 'Purple',
    image: '/uploads/saree/lilac-blossom-sequin-saree-1.png',
    images: [
      '/uploads/saree/lilac-blossom-sequin-saree-1.png',
      '/uploads/saree/lilac-blossom-sequin-saree-2.png',
      '/uploads/saree/lilac-blossom-sequin-saree-3.png'
    ],
    description: 'A graceful purple silk saree adorned with shimmering sequin lattice embroidery and intricate handcrafted border detailing. The soft lilac-purple hue combined with sparkling embellishments creates an elegant and contemporary festive look, perfect for receptions, cocktail evenings, engagement ceremonies, festive gatherings, and special celebrations.',
    features: [
      'Premium silk fabric with a soft, luxurious drape',
      'All-over sequin lattice embroidery for a glamorous look',
      'Intricate handcrafted embellished border detailing',
      'Elegant purple shade with subtle shimmer finish',
      'Lightweight and comfortable for extended wear',
      'Ideal for receptions, cocktail parties, festive occasions, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '31',
    name: 'Rose Gold Bloom Saree',
    category: 'Sarees',
    price: '₹5,590',
    color: 'Pink',
    image: '/uploads/saree/rose-gold-bloom-saree-1.png',
    images: [
      '/uploads/saree/rose-gold-bloom-saree-1.png',
      '/uploads/saree/rose-gold-bloom-saree-2.png',
      '/uploads/saree/rose-gold-bloom-saree-3.png'
    ],
    description: 'A stunning pink silk saree adorned with delicate floral embroidery and intricate rose gold embellishments throughout. The graceful drape, scalloped embroidered borders, and shimmering handcrafted details create a timeless festive look, making it an elegant choice for weddings, receptions, festive celebrations, and evening occasions.',
    features: [
      'Premium silk fabric with a soft and luxurious drape',
      'Delicate floral embroidery with intricate rose gold embellishments',
      'Elegant scalloped embroidered border detailing',
      'Graceful pink hue with subtle festive shimmer',
      'Lightweight and comfortable for extended wear',
      'Ideal for weddings, receptions, festive occasions, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '32',
    name: 'Emerald Grace Embroidered Saree',
    category: 'Sarees',
    price: '₹3,300',
    color: 'Green',
    image: '/uploads/saree/emerald-grace-embroidered-saree-1.png',
    images: [
      '/uploads/saree/emerald-grace-embroidered-saree-1.png',
      '/uploads/saree/emerald-grace-embroidered-saree-2.png',
      '/uploads/saree/emerald-grace-embroidered-saree-3.png'
    ],
    description: 'A luxurious green silk saree featuring intricate floral embroidery and elegant zari-inspired detailing along the borders and pallu. The vibrant emerald and lime green combination, paired with a graceful sheen, creates a regal festive look perfect for weddings, celebrations, traditional gatherings, and special occasions.',
    features: [
      'Premium silk fabric with a rich lustrous finish',
      'Intricate floral embroidery on the border and pallu',
      'Elegant zari-inspired detailing for a timeless appeal',
      'Beautiful dual-tone green color combination',
      'Lightweight and comfortable for extended wear',
      'Ideal for weddings, festive occasions, cultural events, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '33',
    name: 'Ruby Red Floral Embroidered Saree',
    category: 'Sarees',
    price: '₹3,300',
    color: 'Red',
    image: '/uploads/saree/ruby-red-floral-embroidered-saree-1.png',
    images: [
      '/uploads/saree/ruby-red-floral-embroidered-saree-1.png',
      '/uploads/saree/ruby-red-floral-embroidered-saree-2.png'
    ],
    description: 'A luxurious red silk saree adorned with intricate floral embroidery and elegant zari-inspired detailing along the borders and pallu. The rich ruby red hue, combined with delicate handcrafted motifs and a lustrous silk finish, creates a timeless festive ensemble perfect for weddings, celebrations, traditional gatherings, and special occasions.',
    features: [
      'Premium silk fabric with a rich lustrous finish',
      'Intricate floral embroidery on the border and pallu',
      'Elegant zari-inspired detailing for a regal appeal',
      'Rich ruby red color with timeless festive charm',
      'Lightweight and comfortable for extended wear',
      'Ideal for weddings, festive occasions, cultural events, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '34',
    name: 'Turquoise Bird Motif Saree',
    category: 'Sarees',
    price: '₹3,800',
    color: 'Green',
    image: '/uploads/saree/turquoise-bird-motif-saree-1.png',
    images: [
      '/uploads/saree/turquoise-bird-motif-saree-1.png',
      '/uploads/saree/turquoise-bird-motif-saree-2.png',
      '/uploads/saree/turquoise-bird-motif-saree-3.png'
    ],
    description: 'A graceful green silk saree featuring exquisite bird-inspired motifs and intricate floral embroidery throughout. The refreshing turquoise and emerald green tones, paired with delicate zari-inspired detailing, create a sophisticated ethnic look perfect for festive celebrations, family functions, cultural gatherings, and special occasions.',
   features: [
      'Premium silk fabric with a rich and elegant sheen',
      'Intricate bird and floral motif embroidery throughout',
      'Beautiful embroidered border and pallu detailing',
      'Refreshing green dual-tone color combination',
      'Lightweight and comfortable for long hours of wear',
      'Ideal for festive occasions, weddings, cultural events, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '35',
    name: 'Rani Pink Bird Motif Saree',
    category: 'Sarees',
    price: '₹3,800',
    color: 'Pink',
    image: '/uploads/saree/ranipink-bird-motif-saree-1.png',
    images: [
      '/uploads/saree/ranipink-bird-motif-saree-1.png',
      '/uploads/saree/ranipink-bird-motif-saree-2.png',
      '/uploads/saree/ranipink-bird-motif-saree-3.png'
    ],
    description: 'A vibrant pink silk saree adorned with elegant bird-inspired motifs and intricate floral embroidery throughout. The rich rani pink hue, combined with ornate embroidered borders and delicate handcrafted detailing, creates a timeless festive ensemble perfect for weddings, celebrations, traditional gatherings, and special occasions.',
   features: [
      'Premium silk fabric with a rich lustrous finish',
      'Intricate bird and floral motif embroidery throughout',
      'Beautiful embroidered border and pallu detailing',
      'Vibrant rani pink color with elegant festive appeal',
      'Lightweight and comfortable for extended wear',
      'Ideal for weddings, festive occasions, cultural events, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '36',
    name: 'Mint Blossom Embroidered Saree',
    category: 'Sarees',
    price: '₹3,800',
    color: 'Green',
    image: '/uploads/saree/mint-blossom-embroidered-saree-1.png',
    images: [
      '/uploads/saree/mint-blossom-embroidered-saree-1.png',
      '/uploads/saree/mint-blossom-embroidered-saree-2.png',
      '/uploads/saree/mint-blossom-embroidered-saree-3.png'
    ],
    description: 'A graceful green silk saree featuring delicate floral embroidery and elegant handcrafted detailing throughout. The refreshing mint green and soft yellow dual-tone palette adds a contemporary charm, while the intricate embroidered border and floral motifs create a sophisticated festive look. Perfect for daytime celebrations, weddings, festive gatherings, and special occasions.',
   features: [
      'Premium silk fabric with a smooth lustrous finish',
      'Elegant floral embroidery across the saree',
      'Beautiful embroidered border and pallu detailing',
      'Refreshing green dual-tone color palette',
      'Lightweight and comfortable for all-day wear',
      'Ideal for weddings, festive occasions, celebrations, and cultural events',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '37',
    name: 'Royal Fuchsia Checkered Saree',
    category: 'Sarees',
    price: '₹2,899',
    color: 'Pink',
    image: '/uploads/saree/royal-fuchsia-checkered-saree-1.png',
    images: [
      '/uploads/saree/royal-fuchsia-checkered-saree-1.png',
      '/uploads/saree/royal-fuchsia-checkered-saree-2.png',
      '/uploads/saree/royal-fuchsia-checkered-saree-3.png'
    ],
    description: 'A striking pink silk saree adorned with an elegant checkered embroidery pattern and intricate floral motifs. The rich fuchsia hue combined with delicate handcrafted detailing creates a sophisticated festive look. Finished with decorative tassels on the pallu, this saree is perfect for weddings, festive celebrations, cultural gatherings, and special occasions.',
   features: [
      'Premium silk fabric with a luxurious sheen',
      'Elegant checkered embroidery throughout the saree',
      'Intricate floral motifs woven into the design',
      'Beautiful tassel detailing on the pallu',
      'Rich pink color with festive appeal',
      'Comfortable drape with graceful fall',
      'Ideal for weddings, festive occasions, parties, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '38',
    name: 'Regal Amethyst Checkered Saree',
    category: 'Sarees',
    price: '₹2,899',
    color: 'Purple',
    image: '/uploads/saree/regal-amethyst-checkered-saree-1.png',
    images: [
      '/uploads/saree/regal-amethyst-checkered-saree-1.png',
      '/uploads/saree/regal-amethyst-checkered-saree-2.png',
      '/uploads/saree/regal-amethyst-checkered-saree-3.png'
    ],
    description: 'A luxurious purple silk saree featuring an elegant checkered embroidery pattern accented with delicate floral motifs. The rich amethyst tone paired with intricate zari-inspired detailing creates a graceful and festive silhouette. Finished with charming tassel accents on the pallu, this saree is an ideal choice for weddings, festive gatherings, receptions, and special celebrations.',
   features: [
    'Premium silk fabric with a rich lustrous finish',
    'Elegant checkered embroidery design',
    'Delicate floral motifs woven across the saree',
    'Decorative tassel detailing on the pallu',
    'Rich purple color with timeless appeal',
    'Lightweight and comfortable drape',
    'Perfect for festive occasions, weddings, and celebrations',
    'Includes matching blouse fabric'
  ],
    isRental: false
  },
   {
    id: '39',
    name: 'Scarlet Heritage Banarasi Saree',
    category: 'Sarees',
    price: '₹2,250',
    color: 'Red',
    image: '/uploads/saree/scarlet-heritage-banarasi-saree-1.png',
    images: [
      '/uploads/saree/scarlet-heritage-banarasi-saree-1.png',
      '/uploads/saree/scarlet-heritage-banarasi-saree-2.png',
      '/uploads/saree/scarlet-heritage-banarasi-saree-3.png'
    ],
    description: 'A timeless red silk saree adorned with classic woven patterns, regal gold zari borders, and traditional checkered detailing on the pallu. The rich scarlet hue and heritage-inspired craftsmanship create an elegant festive look, making it perfect for weddings, cultural celebrations, festive occasions, and family gatherings.',
   features: [
      'Premium silk fabric with a luxurious sheen',
      'Traditional Banarasi-inspired woven detailing',
      'Rich gold zari border and pallu work',
      'Elegant checkered motifs on the pallu',
      'Classic red color with festive appeal',
      'Graceful drape and comfortable wear',
      'Perfect for weddings, festive occasions, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '40',
    name: 'Crimson Lotus Border Saree',
    category: 'Sarees',
    price: '₹2,250',
    color: 'Red',
    image: '/uploads/saree/crimson-lotus-border-saree-1.png',
    images: [
      '/uploads/saree/crimson-lotus-border-saree-1.png',
      '/uploads/saree/crimson-lotus-border-saree-2.png',
      '/uploads/saree/crimson-lotus-border-saree-3.png'
    ],
    description: 'A graceful red silk saree highlighted with delicate gold motifs and an exquisite multicolor floral border inspired by traditional lotus patterns. The vibrant crimson shade paired with intricate craftsmanship creates a refined festive look, making it an ideal choice for weddings, festive celebrations, religious occasions, and cultural events.',
   features: [
      'Premium silk fabric with a rich lustrous finish',
      'Elegant gold woven motifs throughout the saree',
      'Intricate multicolor lotus-inspired border detailing',
      'Traditional craftsmanship with timeless appeal',
      'Vibrant red color perfect for festive occasions',
      'Lightweight and comfortable drape',
      'Ideal for weddings, festivals, and special celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '41',
    name: 'Royal Wine Zari Saree',
    category: 'Sarees',
    price: '₹2,790',
    color: 'Maroon',
    image: '/uploads/saree/royal-wine-zari-saree-1.png',
    images: [
      '/uploads/saree/royal-wine-zari-saree-1.png',
      '/uploads/saree/royal-wine-zari-saree-2.png',
      '/uploads/saree/royal-wine-zari-saree-3.png'
    ],
    description: 'An elegant maroon silk saree adorned with intricate gold zari motifs and a richly detailed heritage-inspired border. The deep wine hue combined with traditional craftsmanship creates a regal and timeless appeal, making it perfect for weddings, festive occasions, cultural celebrations, and grand gatherings.',
   features: [
      'Premium silk fabric with a luxurious sheen',
      'Intricate gold zari motifs across the saree',
      'Richly embellished traditional border design',
      'Elegant heritage-inspired craftsmanship',
      'Deep maroon color with royal appeal',
      'Soft and graceful drape',
      'Perfect for weddings, festive occasions, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '42',
    name: 'Royal Violet Temple Border Saree',
    category: 'Sarees',
    price: '₹2,250',
    color: 'Purple',
    image: '/uploads/saree/royal-violet-temple-border-saree-1.png',
    images: [
      '/uploads/saree/royal-violet-temple-border-saree-1.png',
      '/uploads/saree/royal-violet-temple-border-saree-2.png',
      '/uploads/saree/royal-violet-temple-border-saree-3.png'
    ],
    description: 'A regal purple silk saree featuring striking gold zari stripes and an intricately woven temple-inspired pallu. The rich violet hue paired with traditional craftsmanship creates a sophisticated ethnic look, perfect for festive celebrations, weddings, cultural events, and special occasions.',
   features: [
      'Premium silk fabric with a rich lustrous finish',
      'Elegant gold zari striped pattern',
      'Intricately woven temple-inspired pallu',
      'Traditional handcrafted detailing',
      'Rich purple color with royal appeal',
      'Decorative tassel accents on the pallu',
      'Perfect for weddings, festive occasions, and cultural celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
   {
    id: '43',
    name: 'Ocean Mist Ombre Saree',
    category: 'Sarees',
    price: '₹2,499',
    color: 'Blue',
    image: '/uploads/saree/ocean-mist-ombre-saree-1.png',
    images: [
      '/uploads/saree/ocean-mist-ombre-saree-1.png',
      '/uploads/saree/ocean-mist-ombre-saree-2.png',
      '/uploads/saree/ocean-mist-ombre-saree-3.png'
    ],
    description: 'A graceful ombre silk saree blending refreshing shades of aqua green and sky blue, enhanced with delicate crystal-inspired embellishments arranged in elegant geometric patterns. The soft gradient effect and lightweight drape create a modern yet sophisticated look, making it perfect for cocktail parties, festive celebrations, receptions, and special occasions.',
   features: [
      'Premium silk fabric with a smooth luxurious finish',
      'Elegant ombre design in blue and green tones',
      'Delicate crystal-inspired geometric embellishments',
      'Lightweight and fluid drape',
      'Modern contemporary aesthetic',
      'Subtle shimmer detailing for festive appeal',
      'Perfect for parties, receptions, festive occasions, and celebrations',
      'Includes matching blouse fabric'
    ],
    isRental: false
  },
];

