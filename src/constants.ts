export interface Product {
  id: string;
  name: string;
  category: 'Sarees' | 'Suits' | 'Kurtis' | 'Co-ords' | 'Rentals';
  price: string;
  image: string;
  description: string;
  isRental?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Maroon Silk Saree',
    category: 'Sarees',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    description: 'Exquisite silk saree with gold zari border, perfect for weddings.',
    isRental: true
  },
  {
    id: '2',
    name: 'Elegant Beige Anarkali Suit',
    category: 'Suits',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    description: 'Flowy Anarkali suit with intricate embroidery.',
    isRental: true
  },
  {
    id: '3',
    name: 'Floral Print Cotton Kurti',
    category: 'Kurtis',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
    description: 'Comfortable and stylish daily wear cotton kurti.',
    isRental: true
  },
  {
    id: '4',
    name: 'Modern Co-ord Set - Wine',
    category: 'Co-ords',
    price: '₹2,799',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    description: 'Chic wine-colored co-ord set for festive gatherings.',
    isRental: true
  },
  {
    id: '5',
    name: 'Bridal Designer Lehenga',
    category: 'Rentals',
    price: '₹5,000 / day',
    image: 'uploads/lehennga-7.jpg',
    description: 'Heavy bridal lehenga with traditional handwork.',
    isRental: true
  },
  {
    id: '6',
    name: 'Designer Emerald Gown',
    category: 'Rentals',
    price: '₹3,500 / day',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
    description: 'Stunning designer gown for evening events.',
    isRental: true
  }
];

