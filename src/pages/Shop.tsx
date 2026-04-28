import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { ShoppingBag } from 'lucide-react';

const CATEGORIES = ['All', 'Sarees', 'Suits', 'Kurtis', 'Co-ords'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get('cat') || 'All';

  const filteredProducts = PRODUCTS.filter(p => 
    !p.isRental && (currentCat === 'All' || p.category === currentCat)
  );

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif mb-4">Our Collection</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Discover our curated range of designer wear, crafted with precision and elegance for the modern woman.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams(cat === 'All' ? {} : { cat })}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              currentCat === cat 
                ? 'bg-maroon text-white shadow-md' 
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md text-maroon py-3 rounded-xl font-medium opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center space-x-2">
                <ShoppingBag size={18} />
                <span>Inquire Now</span>
              </button>
            </div>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1 block">
                {product.category}
              </span>
              <h3 className="font-serif text-lg mb-1">{product.name}</h3>
              <p className="text-maroon font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
