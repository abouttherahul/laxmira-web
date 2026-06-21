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
    price: '₹5,070',
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
    price: '₹3,300',
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
    price: '₹4,500/day',
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
  }
];

