import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>LAXMIRA | Designer Clothing & Rental Studio in Phulera</title>
        <meta
          name="description"
          content="LAXMIRA is a designer clothing studio in Phulera offering designer sarees, bridal lehenga rental near Jaipur, party wear lehenga rental, gowns on rent in Rajasthan, co-ord sets for women and jewellery on rent."
        />
        <meta
          name="keywords"
          content="Designer Clothing Studio in Phulera, Bridal Lehenga Rental Near Jaipur, Lehenga on Rent in Rajasthan, Designer Sarees in Phulera, Wedding Outfit Rental Studio, Gowns on Rent in Rajasthan, Designer Jewellery on Rent, Bridal Wear Studio in Rajasthan, Party Wear Lehenga Rental, Designer Suits for Women, Co-Ord Sets for Women, Wedding Fashion Studio, Ethnic Wear Studio, Complete Wedding Look on Rent"
        />
        <meta property="og:title" content="LAXMIRA | Designer Clothing & Rental Studio in Phulera" />
        <meta
          property="og:description"
          content="LAXMIRA is a wedding fashion studio in Phulera offering designer sarees, bridal lehengas, gowns, co-ord sets and jewellery for rent or purchase. Explore bridal and party-wear collections now."
        />
        <meta property="og:url" content="https://laxmira.net/" />
        <meta name="twitter:url" content="https://laxmira.net/" />
        <link rel="canonical" href="https://laxmira.net/" />
      </Helmet>
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
              Shop & rent premium fashion from designer sarees to bridal lehengas, gowns, co-ord sets and jewellery. Discover wedding outfit rental studio expertise in Phulera and Rajasthan for elegant bridal wear and party looks.
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

      {/* Rental studio */}
      <section className="relative py-24 px-6 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/uploads/rental-studio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-white">Designer Fashion, Without the Designer Price</h2>
            <p className="text-zinc-200 max-w-2xl mx-auto mb-8">
              Bridal Lehengas • Gowns • Sarees • Indo-Western
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/rental"
                className="inline-block bg-maroon text-white px-8 py-4 rounded-full font-medium hover:bg-wine transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >Explore Rentals
              </Link>
            </motion.div>
          </div>
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
