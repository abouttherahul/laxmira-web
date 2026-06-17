import React from 'react';
import { PRODUCTS } from '@/src/constants';
import { Calendar, CheckCircle2 } from 'lucide-react';

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {rentals.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-gold font-bold text-xs uppercase tracking-widest mb-2 block">Premium Rental</span>
              <h2 className="text-3xl font-serif mb-4">{product.name}</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">{product.description}</p>
              <div className="text-2xl font-serif text-maroon mb-8">{product.price}</div>
              
              <ul className="space-y-3 mb-8">
                {['Dry cleaning included', 'Minor alterations available', '3-day rental period', 'Quality guaranteed'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-zinc-600">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/8079076815?text=Hello%20Laxmira%2C%20I%20am%20interested%20in%20renting%20the%20outfit%20named%20%22{product.name}%22.%20Could%20you%20please%20provide%20more%20details%3F"
                className="inline-flex items-center space-x-2 bg-maroon text-white px-8 py-4 rounded-full font-medium hover:bg-wine transition-colors"
              >
                <Calendar size={18} />
                <span>Book Dress</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
