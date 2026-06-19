import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - LAXMIRA | Women’s Fashion Boutique in Phulera</title>

        <meta
          name="description"
          content="Discover LAXMIRA, a women-owned fashion boutique in Phulera offering designer sarees, bridal lehengas, suit sets, co-ord sets & rental outfits. Affordable luxury for every occasion."
        />

        {/* Keywords (optional but still useful for some systems) */}
        <meta
          name="keywords"
          content="Laxmira, women clothing store Phulera, boutique in Rajasthan, designer sarees, bridal lehenga shop, suit sets for women, co-ord sets India, rental outfits Phulera, affordable ethnic wear"
        />

        {/* Open Graph (for WhatsApp, Facebook, etc.) */}
        <meta property="og:title" content="About LAXMIRA | Women’s Fashion Boutique in Phulera" />

        <meta
          property="og:description"
          content="Explore LAXMIRA – premium women’s clothing & rental studio in Phulera. From designer sarees to bridal lehengas, find your perfect outfit for every occasion."
        />

        <meta property="og:url" content="https://laxmira.com/about-laxmira" />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://laxmira.com/images/og-about.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About LAXMIRA | Women’s Fashion Boutique" />
        <meta
          name="twitter:description"
          content="Premium women’s fashion & rental studio in Phulera. Discover sarees, lehengas, gowns & more at LAXMIRA."
        />
        <meta name="twitter:image" content="https://laxmira.com/images/og-about.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://laxmira.com/about-laxmira" />
      </Helmet>
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="uploads/lehenga/lehenga.jpg"
                  alt="About Laxmira"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl text-maroon hidden md:block">
                <div className="text-4xl font-serif font-bold mb-1">5.0</div>
                <div className="text-sm font-bold uppercase tracking-widest">Star Rating</div>
              </div>
            </div>
            <div>
              <span className="text-maroon font-bold text-xs uppercase tracking-widest mb-4 block">About LAXMIRA</span>
              <h1 className="text-5xl font-serif mb-8 leading-tight">The Journey of <br /><span className="text-maroon">LAXMIRA</span></h1>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                At LAXMIRA, we believe fashion is more than clothing — it’s an expression of confidence, culture, and individuality.</p>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Based in Phulera, Rajasthan, LAXMIRA is a women-led fashion studio offering premium women’s clothing and rental outfits for every occasion. From festive celebrations to weddings and everyday elegance, we curate styles that make you stand out effortlessly.</p>
              <p className="text-zinc-600 mb-8 leading-relaxed">Our goal is simple — to bring you high-quality, designer-inspired outfits at affordable prices, without compromising on comfort or style.</p>

            </div>
          </div>

          {/* Values */}
          <div className="bg-zinc-50 rounded-[3rem] p-12 md:p-24 mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif mb-4">Why Choose Us?</h2>
              <div className="w-20 h-1 bg-gold mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { img: '✨', title: 'Premium Quality, Always', desc: 'Every piece is crafted using carefully selected fabrics with fine detailing and flawless finishing.' },
                { img: '💸', title: 'Affordable Luxury', desc: 'Designer-inspired styles without the designer price tag — because elegance should be accessible.' },
                { img: '👗', title: 'Rental + Purchase Options', desc: 'Wear your dream outfit without commitment or own it forever — the choice is yours.' },
                { img: '🤝', title: 'Personalized Styling', desc: 'We help you pick what suits your vibe, your body, and your occasion.' },
                { img: '🌸', title: 'Women-Centric Designs', desc: 'Thoughtfully designed to celebrate femininity, comfort, and confidence.' },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl">{value.img}</div>
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>



          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-50 rounded-[3rem] md:p-20 p-12">
              <div>
                <h2 className="text-3xl font-serif mb-4">👗 Our Signature Collections</h2>
                <p className="text-zinc-600 mb-6 leading-relaxed text-sm">
                  We offer a wide range of women’s ethnic and western wear, including:
                </p>
                <ul className="list-disc list-inside text-zinc-600 space-y-2 text-sm">
                  <li><b>Sarees</b> – Elegant, timeless, and perfect for festive wear</li>
                  <li><b>Suit</b> – Comfortable and stylish for daily and occasion wear</li>
                  <li><b>Kurtis</b> – Simple, versatile, and trendy</li>
                  <li><b>Co-ord Sets</b> – Modern, chic, and effortless</li>
                  <li><b>Lehengas</b> – Grand, detailed, and wedding-perfect</li>
                  <li><b>Gowns</b> – Glamorous outfits for special occasions</li>
                  <li><b>Rental Outfits</b> – Premium looks without the heavy price</li>
                </ul>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-[3rem] md:p-20 p-12">
              <div>
                <h2 className="text-3xl font-serif mb-4">🌟 Features That Set Us Apart</h2>
                <ul className="list-disc list-inside text-zinc-600 space-y-2 text-sm">
                  <li>Premium silk, cotton, georgette & blended fabrics</li>
                  <li>Handwork, embroidery, gota patti & mirror detailing</li>
                  <li>Comfortable fits with flattering silhouettes</li>
                  <li>Trendy yet timeless designs</li>
                  <li>Affordable pricing with high-end appeal</li>
                  <li>Perfect for weddings, festivals & daily wear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
