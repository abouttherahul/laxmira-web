import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { Eye } from 'lucide-react';

export default function Rental() {
  const rentals = PRODUCTS.filter(p => p.isRental);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif mb-4">Rental Studio</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Look like a queen without the designer price tag. Rent our premium bridal lehengas and gowns for your special day.
        </p>
      </div>

      {/* Process */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 bg-zinc-50 p-12 rounded-[2rem]">
        {[
          { title: 'Select', desc: 'Browse our exclusive rental collection online or in-store.' },
          { title: 'Trial', desc: 'Visit our studio for a perfect fitting and trial session.' },
          { title: 'Book', desc: 'Reserve your outfit for the event dates with a small deposit.' },
          { title: 'Return', desc: 'Return the outfit after your event. We handle the dry cleaning!' },
        ].map((step, i) => (
          <div key={i} className="text-center">
            <div className="w-12 h-12 bg-maroon text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-xl">
              {i + 1}
            </div>
            <h3 className="font-serif text-xl mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-500">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Rental Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rentals.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
              <Link to={`/shop/${product.id}`} className="block h-full w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link
                to={`/shop/${product.id}`}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md text-maroon py-3 rounded-xl font-medium opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center space-x-2 hover:cursor-pointer"
              >
                <Eye size={18} />
                <span>View Product</span>
              </Link>
            </div>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1 block">
                Premium Rental
              </span>
              <Link to={`/shop/${product.id}`} className="font-serif text-lg mb-1 inline-block hover:text-maroon transition">
                {product.name}
              </Link>
              <p className="text-maroon font-medium">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

