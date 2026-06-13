'use client';

import React from 'react';

// Hardcoded image fallbacks or your gallery array
const images = [
  { id: 1, src: '/image1.jpg', alt: 'Arena View 1' },
  { id: 2, src: '/image2.jpg', alt: 'Arena View 2' },
  { id: 3, src: '/image3.jpg', alt: 'Arena View 3' },
  { id: 4, src: '/image4.jpg', alt: 'Arena View 4' },
  { id: 5, src: '/image5.jpg', alt: 'Arena View 5' }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-pink-500/30 selection:text-pink-200">
      
      {/* 1. HEADER & HERO SECTION */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
        {/* Top Left Logo Image */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.jpg" 
            alt="FUNBOND Logo" 
            className="h-10 w-auto object-contain rounded-lg border border-white/10"
            onError={(e) => {
              // Automatically switches to text if your logo image file is missing
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="hidden text-xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            FUNBOND
          </span>
        </div>

        {/* Quick Contact Header Link */}
        <a href="tel:+919876543210" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
          📞 Call Arena
        </a>
      </header>

      {/* Hero Content */}
      <section className="max-w-4xl mx-auto text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-6">
          Welcome to <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">FUNBOND</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Experience Next-Generation Amusement Micro-Environments. Explore our 3D glassmorphic arena spaces below.
        </p>
      </section>

      {/* 2. IMAGE GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
            >
              <div className="aspect-[4/3] w-full bg-neutral-900 overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual block if an image path is broken
                    e.target.src = "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-sm font-medium text-gray-300">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SCHEDULE A VISIT SECTION */}
      <section className="relative my-24 max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Arena?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Schedule a group visit or book a custom experience slot. Click below to contact our venue booking assistant.
          </p>

          {/* Booking Contact Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              📞 Call +91 98345 94372
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hi%20Funbond%20Team,%20I'd%20like%20to%20schedule%20a%20visit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* 4. DETAILS LOCATION FOOTER */}
      <footer className="w-full border-t border-white/10 bg-neutral-950/80 backdrop-blur-md py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left text-sm text-gray-400">
          
          {/* Exact Venue Address Details */}
          <div>
            <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
              📍 Funbond Arena Venue
            </h4>
            <p className="leading-relaxed text-gray-300">
              <strong className="text-white font-semibold">Funbond</strong><br />
              Ground Floor, Goldie Cinemark,<br />
              Near Railway Station,<br />
              Chh. Sambhaji Nagar
            </p>
          </div>
          
          {/* Operations & Navigation link */}
          <div className="md:text-right flex flex-col md:items-end justify-between h-full">
            <div>
              <p className="mb-1 text-white font-medium">⏰ Operations Hours</p>
              <p className="text-gray-400">Open Daily: 11:00 AM - 10:00 PM</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 text-pink-400 rounded-lg hover:bg-white/10 transition-all text-xs font-semibold"
              >
                Find Us On Google Maps ↗
              </a>
            </div>
          </div>

        </div>

        {/* Footer Base copyright line */}
        <div className="max-w-6xl mx-auto px-6 pt-8 mt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} FUNBOND Arena. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
