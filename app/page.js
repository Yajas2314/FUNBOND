'use client';

import React from 'react';

const images = [
  { id: 1, src: '/image1.jpg', title: 'Experience Space 01' },
  { id: 2, src: '/image2.jpg', title: 'Experience Space 02' },
  { id: 3, src: '/image3.jpg', title: 'Experience Space 03' },
  { id: 4, src: '/image4.png', title: 'Experience Space 04' },
  { id: 5, src: '/image5.png', title: 'Experience Space 05' }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased selection:bg-pink-500/30 selection:text-pink-200 overflow-x-hidden relative">
      
      {/* Geometric Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient Neon Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* 1. PREMIUM NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050508]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Top Left Logo Container */}
          <div className="flex items-center space-x-3 group">
            <div className="relative p-0.5 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500">
              <img 
                src="/logo.jpg" 
                alt="FUNBOND" 
                className="h-10 w-auto object-contain rounded-[10px] bg-black"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 px-3 items-center justify-center bg-black rounded-[10px] text-xs font-black text-white">
                FB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                FUNBOND
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-400/80">
                EXPERIENCE ARENA
              </span>
            </div>
          </div>

          {/* Action Link with your Phone Number */}
          <a 
            href="tel:+919834594372" 
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-widest uppercase rounded-lg group bg-gradient-to-br from-cyan-500 to-purple-600 hover:text-white"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
              📞 Call Now
            </span>
          </a>
        </div>
      </header>

      {/* 2. MAIN HERO HEADER */}
      <section className="max-w-5xl mx-auto text-center px-6 pt-24 pb-16 relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
          ENTER THE <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            FUNBOND REALM
          </span>
        </h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          Step into Chh. Sambhaji Nagar’s ultimate interactive matrix. A structural marvel featuring ambient architecture, ultra-responsive zones, and unmatched entertainment.
        </p>
      </section>

      {/* 3. CLEAN IMAGE GALLERY SECTION (TAGS REMOVED) */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="mb-8 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Arena Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]"
            >
              {/* Image Container */}
              <div className="aspect-[16/11] w-full bg-neutral-950 overflow-hidden relative border-b border-white/5">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Premium fallback pattern if image file is missing
                    e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Description box */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 mt-0.5">Arena Viewport Connected</p>
                </div>
                <div className="text-neutral-500 group-hover:text-cyan-400 transition-colors text-sm font-bold">
                  // 0{img.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAILS & SCHEDULE A VISIT SECTION */}
      <section className="relative my-24 max-w-4xl mx-auto px-6 z-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] p-10 md:p-14 backdrop-blur-2xl text-center shadow-2xl">
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-600/10 blur-[60px] pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-pink-600/10 blur-[60px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            SCHEDULE YOUR VISIT
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-10 text-sm font-light tracking-wide">
            Get booking details, check game slot availability, or reserve the entire space for private group events.
          </p>

          {/* Contact Actions Linked to your exact Phone Number */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
            <a 
              href="tel:+919834594372" 
              className="w-full sm:w-auto px-8 h-14 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
            >
              <span>📞 CALL +91 98345 94372</span>
            </a>
            <a 
              href="https://wa.me/919834594372?text=Hi%20Funbond%20Team,%20I'd%20like%20to%20get%20details%20and%20schedule%20a%20visit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 h-14 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
            >
              <span className="text-cyan-400">💬 WHATSAPP VISIT</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. LOCATION DETAILS END FOOTER */}
      <footer className="w-full border-t border-white/5 bg-[#030305] py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-sm text-neutral-400">
          
          {/* Physical Address Details */}
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">
                LOCATION COORDINATES
              </h4>
            </div>
            <p className="leading-relaxed text-neutral-300 font-light text-base">
              <span className="text-white font-bold text-lg tracking-tight">Funbond Arena</span><br />
              Ground Floor, Goldie Cinemark,<br />
              Near Railway Station,<br />
              Chh. Sambhaji Nagar
            </p>
          </div>
          
          {/* Timings and Direct Comms Contact */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-1">OPERATIONS</p>
              <p className="text-neutral-300 font-medium">Open Daily</p>
              <p className="text-cyan-400 text-xs font-mono">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-1">DIRECT MOBILE</p>
              <p className="text-neutral-300 font-mono text-xs">+91 98345 94372</p>
            </div>
          </div>

          {/* Navigation link */}
          <div className="lg:col-span-3 lg:text-right flex flex-col lg:items-end justify-center h-full">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all text-xs tracking-wider uppercase"
            >
              MAP NAVIGATION ↗
            </a>
          </div>

        </div>

        {/* Footer base signature */}
        <div className="max-w-6xl mx-auto px-6 pt-12 mt-12 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 tracking-wider">
          <div>© {new Date().getFullYear()} FUNBOND ARENA. ALL RIGHTS RESERVED.</div>
          <div className="font-mono text-neutral-700 text-[9px] uppercase">PRODUCTION BUILD</div>
        </div>
      </footer>

    </div>
  );
}
