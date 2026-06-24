import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-6">
            <span className="text-4xl font-serif tracking-widest text-gold uppercase leading-none">
              LAXMIRA
            </span>
            <span className="text-[10px] text-4xl font-sans tracking-[0.1em] text-gold uppercase mt-1">
              Clothing | Rental Studio
            </span>
          </Link>
          <p className="text-zinc-400 text-md leading-relaxed mb-6">
            Laxmira is a premium women’s fashion rental studio offering designer outfits for every special occasion.
From Haldi & Mehendi to weddings, receptions, and pre-wedding shoots — we bring you stylish, affordable, and trend-forward looks without the need to buy.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/wear.laxmira/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/people/Laxmira/61568821166524/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-md text-zinc-400">
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li><Link to="/rental" className="hover:text-gold transition-colors">Rental Studio</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Categories</h4>
          <ul className="space-y-3 text-md text-zinc-400">
            <li><Link to="/shop?cat=Sarees" className="hover:text-gold transition-colors">Sarees</Link></li>
            <li><Link to="/shop?cat=Suits" className="hover:text-gold transition-colors">Suit Sets</Link></li>
            <li><Link to="/shop?cat=Kurtis" className="hover:text-gold transition-colors">Kurtis</Link></li>
            <li><Link to="/rental" className="hover:text-gold transition-colors">Lehengas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Contact Info</h4>
          <ul className="space-y-4 text-md text-zinc-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>G-13 & 12, Balaji Tower, Phulera, Rajasthan 303338</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span><Link to="tel:+918079076815" className="hover:text-gold transition-colors">+91 8079076815</Link></span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span><Link to="mailto:wearlaxmira@gmail.com" className="hover:text-gold transition-colors">wearlaxmira@gmail.com</Link></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-md">
        <p>© {new Date().getFullYear()} LAXMIRA. All rights reserved.</p>
      </div>
    </footer>
  );
}
