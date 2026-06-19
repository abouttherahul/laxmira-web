import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="uploads/lehenga/lehenga-7.jpg"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              New Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Where Style Meets <br />
              <span className="italic text-gold">Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 mb-10 font-light leading-relaxed">
              Shop & Rent Premium Fashion. From designer sarees to bridal lehengas, discover the perfect outfit for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="bg-maroon text-white px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-wine transition-colors"
              >
                <span>Explore Collection</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/rental"
                className="bg-white text-maroon px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-zinc-100 transition-colors"
              >
                Book Rental Outfit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offer Banner */}
      <div className="bg-maroon text-white py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-medium tracking-widest uppercase">
              ✨ Special Offer: Up to 10% OFF on all Suit Sets ✨
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Collections</h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Sarees', img: '/uploads/saree/emerald-royale-embroidered-saree-2.png', link: '/shop?cat=Sarees' },
            { name: 'Suit Sets', img: '/uploads/suits/yellow-drap-1.png', link: '/shop?cat=Suits' },
            { name: 'Co-ord Sets', img: 'https://images.unsplash.com/photo-1733937140732-2cc70a1d7017?q=80&w=1287&auto=format&fit=crop', link: '/shop?cat=Co-ords' },
          ].map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="group relative h-[500px] overflow-hidden rounded-2xl"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-serif mb-2">{cat.name}</h3>
                <span className="text-sm font-medium text-gold flex items-center space-x-2">
                  <span>View More</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50 py-24 px-6">
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">What Our Customers Say</h2>
            <div className="flex justify-center space-x-1 text-gold mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-d82da922-a435-4fb5-8d41-e78b9c507ed2" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
      {/* Innstagram feed */}
      <section className=" py-24 px-6">

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif mb-4">Follow us on</h2>
          </div>

          <div className="">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-f7284c3e-d2a0-4407-a3f7-bba34ee6b628" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-maroon rounded-[2rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Visit Our Store Today</h2>
            <p className="text-lg text-white/80 mb-10">
              Experience the luxury of premium fashion in person. Our experts are here to help you find your perfect look.
            </p>
            <Link
              to="https://maps.app.goo.gl/SWyFHTC49AuE5bcd8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-maroon px-10 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              Get Directions
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
        </div>
      </section>

   
    </div>
  );
}
