import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
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

const CATEGORIES = ['All', 'Sarees', 'Suits', 'Kurtis', 'Co-ords'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get('cat') || 'All';
  const [sort, setSort] = useState('newest');
  const [colorFilter, setColorFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const availableColors = useMemo(
    () => getAvailableColors(PRODUCTS.filter((product) => !product.isRental)),
    []
  );

  const filteredProducts = useMemo(
    () => {
      const matched = PRODUCTS.filter((product) => {
        if (product.isRental) return false;
        if (currentCat !== 'All' && product.category !== currentCat) return false;

        const color = getProductColor(product);
        if (colorFilter !== 'All' && color !== colorFilter) return false;

        if (!matchesPriceRange(product.price, priceFilter)) return false;

        return true;
      });

      return sortProducts(matched, sort);
    }, [currentCat, colorFilter, priceFilter, sort]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Shop | LAXMIRA | Designer Sarees, Suits & Co-Ord Sets in Phulera</title>
        <meta
          name="description"
          content="Browse designer sarees, suit sets, kurtis and co-ord sets for women at LAXMIRA in Phulera. Shop premium ethnic wear and party wear lehenga rental accessories with designer styling."
        />
        <meta
          name="keywords"
          content="Designer Sarees in Phulera, Designer Suits for Women, Co-Ord Sets for Women, Ethnic Wear Studio, Party Wear Lehenga Rental, Designer Clothing & Rental Studio, Wedding Fashion Studio, Designer Clothing Studio in Phulera"
        />
        <meta property="og:title" content="Shop | LAXMIRA | Designer Clothing Studio in Phulera" />
        <meta
          property="og:description"
          content="Discover designer sarees, suit sets, kurtis and co-ord sets at LAXMIRA. Find premium wedding, festive and party wear in Phulera with rental and purchase options."
        />
        <meta property="og:url" content="https://laxmira.net/shop" />
        <link rel="canonical" href="https://laxmira.net/shop" />
      </Helmet>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif mb-4">Our Collection</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Discover designer sarees, suit sets, kurtis and co-ord sets for women. Shop premium ethnic wear and party wear outfits crafted for weddings, festivities and everyday elegance.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
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

        <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setSort('newest');
            setColorFilter('All');
            setPriceFilter('All');
            setSearchParams({});
          }}
          className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-sm font-medium"
        >
          Clear filters
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 mb-12">
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
        Showing {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
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
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold mb-1 block">
                {product.category}
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
