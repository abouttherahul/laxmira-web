import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';
import { ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === id);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
        <p className="text-zinc-500 mb-8">Product not found.</p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon px-6 py-3 text-maroon font-medium transition hover:bg-maroon hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleInquiry = (productItem: typeof product) => {
    const phoneNumber = '918079076815';
    const productUrl = `${window.location.origin}/shop/${productItem.id}`;
    const thumbImage = String(productItem.image).startsWith('http')
      ? productItem.image
      : `${window.location.origin}/${productItem.image}`;

    const message = `Hello LAXMIRA,%0A%0A*Product:* ${productItem.name}%0A*Category:* ${productItem.category}%0A*Price:* ${productItem.price}%0A%0A*View Product:*%0A${productUrl}%0A%0A*Thumbnail:*%0A${thumbImage}%0A%0AI am interested in this outfit. Please share more details and availability.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const activeImage = images[activeIndex] || images[0];

  const prevImage = () => setActiveIndex((state) => (state === 0 ? images.length - 1 : state - 1));
  const nextImage = () => setActiveIndex((state) => (state === images.length - 1 ? 0 : state + 1));

  const canonicalUrl = product ? `https://laxmira.net/shop/${product.id}` : 'https://laxmira.net/shop';

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      {product && (
        <Helmet>
          <title>{`${product.name} | LAXMIRA | Designer Sarees & Bridal Rentals in Rajasthan`}</title>
          <meta
            name="description"
            content={`${product.name} is available at LAXMIRA in Phulera. Rent or buy this designer ${product.category.toLowerCase()} for weddings, parties and festive events.`}
          />
          <meta
            name="keywords"
            content="Bridal Lehenga Rental Near Jaipur, Designer Sarees in Phulera, Gowns on Rent in Rajasthan, Designer Suits for Women, Wedding Outfit Rental Studio"
          />
          <meta property="og:title" content={`${product.name} | LAXMIRA`} />
          <meta
            property="og:description"
            content={`Rent or shop the ${product.name} at LAXMIRA, the leading designer clothing and rental studio in Phulera.`}
          />
          <meta property="og:url" content={canonicalUrl} />
          <meta name="twitter:url" content={canonicalUrl} />
          <meta property="og:image" content={`https://laxmira.net${product.image}`} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
      )}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-sm font-medium text-maroon mb-10"
      >
        <ArrowLeft size={18} />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 lg:sticky lg:top-32 lg:h-fit">
            <div className="relative overflow-hidden rounded-t-[2rem]">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full  object-cover"
                referrerPolicy="no-referrer"
              />

              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-zinc-900 shadow-md hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-zinc-900 shadow-md hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 p-4 bg-white rounded-b-[2rem]">
              {images.map((src, index) => (
                <button
                  key={src + index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded border transition ${
                    activeIndex === index ? 'border-maroon' : 'border-transparent'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${product.name} ${index + 1}`}
                    className="h-20 w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
         
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">
              {product.category}
            </span>
            <h1 className="text-5xl font-serif mt-4 mb-6">{product.name}</h1>
            <p className="text-zinc-600 leading-relaxed text-lg">{product.description}</p>
          </div>

          <div className="rounded-[2rem] bg-zinc-50 p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-zinc-500 uppercase tracking-widest text-xs">Price</p>
                <p className="text-3xl font-serif text-maroon mt-2">{product.price}</p>
              </div>
              <div className="text-right">
                <p className="text-zinc-500 uppercase tracking-widest text-xs">Availability</p>
                <p className="text-zinc-800 font-medium mt-2">Ready to order</p>
              </div>
            </div>

            <ul className="space-y-4 text-zinc-600">
              {product.features && product.features.length > 0 ? (
                product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-maroon" />
                    <span>{feature}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-maroon" />
                    <span>Handpicked styling for premium occasions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-maroon" />
                    <span>Care details and fitting guidance shared on inquiry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-maroon" />
                    <span>Personal consultation available for every outfit.</span>
                  </li>
                </>
              )}
            </ul>

            {product.note && product.note.length > 0 && (
              <div className="flex items-start gap-3 pt-6 mt-4 border-t border-zinc-200">
                <p className="flex items-start gap-1 text-sm font-bold italic text-zinc-900 mb-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-maroon" />Note:</p>
                  {product.note.map((item, idx) => (
                    <span key={idx} className="flex items-start gap-3 text-sm text-zinc-600">
                      {item}
                    </span>
                  ))}
                
              </div>
            )}

            <button
              type="button"
              onClick={() => handleInquiry(product)}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-maroon px-8 py-4 text-white text-base font-semibold transition hover:bg-wine hover:cursor-pointer"
            >
              <ShoppingBag size={18} />
              Inquire About This Outfit
          </button>
          </div>

          {/* Terms & Conditions */}
          <div className="p-8">
            {product.isRental ? (
              <>
                <h2 className="text-md font-serif mb-4 text-zinc-900">
                  Rental Terms & Conditions
                </h2>

                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Security deposit may apply.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Outfit must be returned on the agreed date.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Damage charges may apply if required.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Rental amount is non-refundable.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Late return charges may apply.</span>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-md font-serif mb-4 text-zinc-900">
                  Terms & Conditions
                </h2>

                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>No return or refund.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Only same-day exchange is allowed.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>All products are sold at fixed prices.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Please check items before leaving the store.</span>
                  </li>
                </ul>

                <div className="border-t border-zinc-200 my-8" />

                <h2 className="text-md font-serif mb-4 text-zinc-900">
                  Care Instructions
                </h2>

                <ul className="space-y-3 text-sm text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Dry clean recommended.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Do not bleach.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Avoid direct sunlight.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Iron on low heat.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-maroon" />
                    <span>Store in a cool, dry place.</span>
                  </li>
                </ul>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
