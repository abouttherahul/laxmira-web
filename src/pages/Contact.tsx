import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Visit our studio or reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-50 rounded-2xl">
                <MapPin className="text-maroon mb-4" size={32} />
                <h3 className="font-serif text-xl mb-2">Our Address</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  G-13 & 12, Balaji Tower, Phulera, Rajasthan 303338
                </p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl">
                <Phone className="text-maroon mb-4" size={32} />
                <h3 className="font-serif text-xl mb-2">Call Us</h3>
                <p className="text-sm text-zinc-600">
                  <Link className="hover:text-maroon" to="tel:+918079076815">+91 807 907 6815</Link>
                </p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl">
                <Mail className="text-maroon mb-4" size={32} />
                <h3 className="font-serif text-xl mb-2">Email Us</h3>
                <p className="text-sm text-zinc-600">
                  <Link className="hover:text-maroon" to="mailto:wearlaxmira@gmail.com">wearlaxmira@gmail.com</Link>
                </p>
              </div>
              <div className="p-8 bg-zinc-50 rounded-2xl">
                <Clock className="text-maroon mb-4" size={32} />
                <h3 className="font-serif text-xl mb-2">Store Hours</h3>
                <p className="text-sm text-zinc-600">
                  Open Daily: 9 AM - 9 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map */}

          <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-zinc-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.915136345069!2d75.2380265!3d26.874437200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c6f83b2be951d%3A0x91e110259c93bb63!2sLAXMIRA!5e0!3m2!1sen!2sin!4v1774095010789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laxmira Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

