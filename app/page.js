'use client';

import React, { useState } from 'react';

const arenaSpaces = [
  { id: '01', label: 'Arcade 1', src: 'https://lh3.googleusercontent.com/d/1v7RYujAnGTS2PNQ4Ji2UzSRMydGIsOiQ' },
  { id: '02', label: 'Arcade 2', src: 'https://lh3.googleusercontent.com/d/1fPzHMiUjV5vThdcV7-szJkjEjLuzb6yx' },
  { id: '03', label: 'Arcade 3', src: 'https://lh3.googleusercontent.com/d/1_4ZT8A4upVjrfAqTs95u54YZkJn5HQol' },
  { id: '04', label: 'Arcade 4', src: 'https://lh3.googleusercontent.com/d/1tHM-piNXPX0fsdopVAQMHlguVE4eDaUk' },
  { id: '05', label: 'Arcade 5', src:'https://lh3.googleusercontent.com/d/12vYtYsNEa7MlzmJkmyWkpbkMo_Y5GQiu'}
];

const achievements = [
  { metric: '4 LANES', title: 'PREMIUM BOWLING', desc: 'Bespoke, highly polished architectural bowling lanes equipped with synchronized neon light tracking.' },
  { metric: 'VR GLIDE', title: 'VR PARAGLIDING SIMULATOR', desc: 'Next-generation motion tracking and immersive virtual paragliding rigs for ultimate adrenaline.' },
  { metric: 'SOFT GAMES', title: 'PREMIUM AMUSEMENT', desc: 'Dedicated luxury soft play setups and interactive physical leisure attractions for groups and families.' }
];

export default function Page() {
  const [selectedSpace, setSelectedSpace] = useState(arenaSpaces[0]);

  return (
    <div className="min-h-screen bg-[#030206] text-white font-sans antialiased selection:bg-purple-600/40 selection:text-purple-100 overflow-x-hidden relative">
      
      {/* FULL SCREEN CINEMATIC ARCHITECTURAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="http://googleusercontent.com/image_generation_content/1" 
          alt="Funbond Premium Cinematic Backdrop" 
          className="w-full h-full object-cover filter brightness-[0.35] saturate-[1.1] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030206]/80 via-[#030206]/50 to-[#030206]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#030206_100%)]" />
      </div>

      {/* TOP PROFESSIONAL NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030206]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          <div className="flex items-center space-x-4 group">
            <div className="relative h-12 w-12 rounded-xl p-[1.5px] overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <img 
                src="\logo.png" 
                alt="FUNBOND BRAND" 
                className="h-full w-full object-contain rounded-[10px] bg-[#07050d] p-1"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-full w-full items-center justify-center bg-[#07050d] rounded-[10px] text-xs font-black text-cyan-400">
                FB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-[0.2em] bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                FUNBOND
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-cyan-400/90">
                EXPERIENCE ARENA
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-8 text-xs font-black tracking-widest text-neutral-400 uppercase">
            <a href="#gallery" className="hover:text-white transition-colors">GALLERY</a>
            <a href="#stats" className="hover:text-white transition-colors">SPECIFICATIONS</a>
            <a href="#booking" className="hover:text-pink-400 transition-colors">RESERVATIONS</a>
          </div>

        </div>
      </header>

      {/* LARGE TYPOGRAPHY HERO SECTION */}
      <main className="relative z-10">
        <section className="max-w-7xl mx-auto text-center px-6 pt-32 pb-24">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-8 leading-none">
            REALITY <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(168,85,247,0.2)]">
              REIMAGINED
            </span>
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide leading-relaxed filter drop-shadow-md">
            Step into Chh. Sambhaji Nagar’s premier entertainment asset. Combining elite structural architecture with immersive VR paragliding simulation, soft games, and state-of-the-art boutique lanes.
          </p>
          <div className="mt-12">
            <a href="tel:+919834594372" className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-bold text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-lg shadow-pink-500/20">
              📞 CALL NOW: +91 98345 94372
            </a>
          </div>
        </section>

        {/* INTERACTIVE CARDS WITH UP-TO-DATE ATTRACTIONS */}
        <section id="stats" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-purple-600/[0.08] hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-2xl">
                <div className="text-4xl font-black tracking-tight text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.metric}
                </div>
                <h3 className="text-xs font-black tracking-widest text-purple-400 uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY MODULE (CLEAN TITLES ONLY) */}
        <section id="gallery" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="border-b border-white/5 pb-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-cyan-400 uppercase mb-2">// AMUSEMENT SEGMENTS</h2>
            <p className="text-3xl font-black tracking-tight text-white uppercase">ARENA PORTALS</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Screen Projection Block */}
            <div className="lg:col-span-8 p-1.5 rounded-[28px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl">
              <div className="w-full aspect-[16/10] bg-[#07050d] rounded-[22px] overflow-hidden relative">
                <img 
                  src={selectedSpace.src} 
                  alt={selectedSpace.label} 
                  className="w-full h-full object-cover filter saturate-[1.12] contrast-[1.04]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs font-bold text-cyan-400 tracking-wider">
                  CURRENT VIEWPORT: {selectedSpace.label}
                </div>
              </div>
            </div>

            {/* Selector Sidebar Rails */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {arenaSpaces.map((space) => {
                const isCurrent = selectedSpace.id === space.id;
                return (
                  <button
                    key={space.id}
                    onClick={() => setSelectedSpace(space)}
                    className={`w-full p-5 rounded-xl border text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden ${
                      isCurrent 
                        ? 'border-cyan-500/40 bg-cyan-500/[0.06] shadow-[0_0_30px_rgba(34,211,238,0.1)] translate-x-2' 
                        : 'border-white/5 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.02] hover:translate-x-1'
                    }`}
                  >
                    {isCurrent && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400" />}
                    <span className={`text-sm font-black uppercase tracking-wider ${isCurrent ? 'text-white' : 'text-neutral-400'}`}>
                      {space.label}
                    </span>
                    <span className={`font-mono text-xs ${isCurrent ? 'text-cyan-400' : 'text-neutral-600'}`}>
                      [0{space.id}]
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PANEL */}
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="p-12 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-md relative">
            <span className="text-6xl text-purple-500/20 font-serif absolute top-4 left-6 pointer-events-none">“</span>
            <p className="text-xl md:text-2xl font-light italic text-neutral-200 mb-6 leading-relaxed">
              "The integration of the boutique 4 bowling lanes along with the VR paragliding simulation creates a world-class experiential layout. Phenomenal site execution."
            </p>
            <div className="text-xs font-black tracking-widest text-white uppercase">RETAIL DEVELOPMENT REPORT</div>
            <div className="text-[10px] font-bold text-cyan-400 tracking-wider mt-1">/ MARKET ANALYSIS 2026</div>
          </div>
        </section>

        {/* BOOKING INTERFACE TERMINAL */}
        <section id="booking" className="relative my-24 max-w-5xl mx-auto px-6 scroll-mt-24">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-20 backdrop-blur-3xl text-center shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-4">
              RESERVE AN EXPERIENCE ENTRY
            </h2>
            <p className="text-neutral-300 max-w-md mx-auto mb-10 text-xs md:text-sm font-light tracking-wide leading-relaxed">
              Coordinate directly with our operations pipeline to set up group bookings, private events, or investor tours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a href="tel:+919834594372" className="w-full sm:w-auto px-8 h-14 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black rounded-xl shadow-lg shadow-pink-500/20 hover:scale-103 transition-all flex items-center justify-center text-xs tracking-widest uppercase">
                📞 CALL NOW: +91 98345 94372
              </a>
              <a href="https://wa.me/919834594372?text=Hi%20Funbond%20Team" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 h-14 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 hover:scale-103 transition-all flex items-center justify-center text-xs tracking-widest uppercase">
                <span className="text-cyan-400">💬 WHATSAPP VISIT</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER TERMINAL CONTAINER */}
      <footer className="w-full border-t border-white/5 bg-[#030206]/90 backdrop-blur-md py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm text-neutral-400">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">ARENA ADDRESS COORDINATES</h4>
            </div>
            <p className="leading-relaxed text-neutral-300 font-light text-base">
              <span className="text-white font-black text-lg block mb-1">FUNBOND ARENA</span>
              Ground Floor, Goldie Cinemark,<br />
              Near Railway Station,<br />
              Chh. Sambhaji Nagar
            </p>
          </div>
          
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-[10px] font-black tracking-widest text-neutral-500 uppercase mb-1">CHRONO WINDOW</p>
              <p className="text-neutral-200 text-xs font-bold">Open Daily Mon - Sun</p>
              <p className="text-cyan-400 font-mono text-xs font-bold">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-neutral-500 uppercase mb-1">COMMS PORTAL</p>
              <p className="text-neutral-200 font-mono text-xs font-bold">+91 98345 94372</p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:text-right flex flex-col lg:items-end justify-center">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 font-black hover:bg-cyan-500/10 transition-all text-xs tracking-wider uppercase">
              MAP TRANSMISSION ↗
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 mt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-600 tracking-widest">
          <div>© 2026 FUNBOND CORPORATION INT. ALL RIGHTS RESERVED.</div>
          <div className="font-mono text-neutral-700 text-[9px]">BUILD // PRODUCTION_V5.4</div>
        </div>
      </footer>

    </div>
  );
}
