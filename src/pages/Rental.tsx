import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { Eye } from 'lucide-react';
import {
  getAvailableColors,
  getPriceRangeOptions,
  getProductColor,
  getSortOptions,
  matchesPriceRange,
  sortProducts,
} from '@/src/lib/utils';

export default function Rental() {
  const [sort, setSort] = useState('newest');
  const [colorFilter, setColorFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const rentals = useMemo(() => PRODUCTS.filter((product) => product.isRental), []);
  const availableColors = useMemo(() => getAvailableColors(rentals), [rentals]);
  const filteredRentals = useMemo(() => {
    const matched = rentals.filter((product) => {
      const color = getProductColor(product);
      if (colorFilter !== 'All' && color !== colorFilter) return false;
      if (!matchesPriceRange(product.price, priceFilter)) return false;
      return true;
    });

    return sortProducts(matched, sort);
  }, [colorFilter, priceFilter, rentals, sort]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Rental Studio | LAXMIRA | Lehenga on Rent in Rajasthan</title>
        <meta
          name="description"
          content="Rent bridal lehengas, gowns and complete wedding looks at LAXMIRA Rental Studio. Serving Rajasthan and Jaipur with premium wedding outfit rentals, jewellery and designer party wear."
        />
        <meta
          name="keywords"
          content="Lehenga on Rent in Rajasthan, Bridal Lehenga Rental Near Jaipur, Wedding Outfit Rental Studio, Gowns on Rent in Rajasthan, Designer Jewellery on Rent, Bridal Wear Studio in Rajasthan, Party Wear Lehenga Rental, Complete Wedding Look on Rent"
        />
        <meta property="og:title" content="Rental Studio | LAXMIRA | Wedding Outfit Rental Studio" />
        <meta
          property="og:description"
          content="Explore bridal lehenga rentals, gowns on rent and complete wedding looks from LAXMIRA in Rajasthan. Reserve designer rental outfits, jewellery and party wear now."
        />
        <meta property="og:url" content="https://laxmira.net/rental" />
        <meta name="twitter:url" content="https://laxmira.net/rental" />
        <link rel="canonical" href="https://laxmira.net/rental" />
      </Helmet>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif mb-4">Rental Studio</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Rent bridal lehengas, gowns, designer jewellery and complete wedding outfits in Rajasthan. Discover premium rental styles near Jaipur for weddings, parties and festive occasions.
        </p>
      </div>

      {/* Process */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 p-12 rounded-[2rem]">
        {[
          { title: 'Select', desc: 'Browse our exclusive rental collection online or in-store.', icon: '/uploads/dress-select.png' },
          { title: 'Trial', desc: 'Visit our studio for a perfect fitting and trial session.', icon: '/uploads/dress-try.png' },
          { title: 'Book', desc: 'Reserve your outfit for the event dates with a small deposit.', icon: '/uploads/dress-book.png' },
          { title: 'Return', desc: 'Return the outfit after your event. We handle the dry cleaning!', icon: '/uploads/dress-return.png' },
        ].map((step, i) => (
          <div key={i} className="grid text-center">
            <div className="w-30 h-30 mx-auto mb-4 flex items-center justify-center">
              <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-serif text-xl mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-500">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setSort('newest');
            setColorFilter('All');
            setPriceFilter('All');
          }}
          className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-sm font-medium"
        >
          Clear filters
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 mb-8">
        <div className="flex items-center gap-3 bg-zinc-50 rounded-3xl px-4 py-3">
          <label htmlFor="sort" className="text-sm text-zinc-600 w-24">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700"
          >
            {getSortOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3 bg-zinc-50 rounded-3xl px-4 py-3">
          <label htmlFor="color" className="text-sm text-zinc-600 w-24">
            Color
          </label>
          <select
            id="color"
            value={colorFilter}
            onChange={(e) => setColorFilter(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700"
          >
            {availableColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3 bg-zinc-50 rounded-3xl px-4 py-3">
          <label htmlFor="price" className="text-sm text-zinc-600 w-24">
            Price
          </label>
          <select
            id="price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700"
          >
            {getPriceRangeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-8 text-sm text-zinc-500">
        Showing {filteredRentals.length} rental item{filteredRentals.length === 1 ? '' : 's'}
      </div>

      {/* Rental Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredRentals.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 hover:shadow-xl">
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

