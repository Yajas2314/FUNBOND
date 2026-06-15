'use client';

import React, { useState } from 'react';

const arenaSpaces = [
  { id: '01', src: 'image1.jpg', title: 'Immersive Holo-Deck Space', desc: 'Step into a fully simulated environment featuring modern projection layouts, spatial audio arrays, and premium glassmorphic interactive architecture.', fallback: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop' },
  { id: '02', src: 'image2.jpg', title: 'Neon Racing Simulators', desc: 'High-fidelity racing setups engineered with competitive telemetry, reactive haptic steering engines, and low-latency digital tracking loops.', fallback: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop' },
  { id: '03', src: 'image3.jpg', title: 'Retro Gaming Matrix', desc: 'Where classic arcade layouts meet elite, premium design infrastructure for multiplayer battle configurations.', fallback: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
  { id: '04', src: 'image4.jpg', title: 'Tactical eSports Arena', desc: 'Tournament-ready operational hubs designed with direct device synchronization for intense performance monitoring.', fallback: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800&auto=format&fit=crop' },
  { id: '05', src: 'image5.jpg', title: 'Quantum Kinetic Lounge', desc: 'Decompress inside a premium dark mode layout engineered for relaxation, spatial separation, and tactical adjustments.', fallback: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=800&auto=format&fit=crop' }
];

export default function Page() {
  // Console state engine for the live terminal display
  const [selectedSpace, setSelectedSpace] = useState(arenaSpaces[0]);

  return (
    <div className="min-h-screen bg-[#020204] text-white font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      
      {/* Structural Mesh Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Deep Space Ambient Glow Modules */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-pink-500/[0.06] blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/[0.06] blur-[140px] pointer-events-none" />

      {/* 1. TOP NAVBAR BLOCK - WITH NAVIGATION LOGO */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020204]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Frame Assembly */}
          <div className="flex items-center space-x-3 group">
            <div className="relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              <img 
                src="logo.jpg" 
                alt="FUNBOND" 
                className="h-10 w-auto object-contain rounded-[11px] bg-black"
                onError={(e) => {
                  // Fallthrough guard: triggers a premium textual backup framework if file mapping is restricted
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 px-3 items-center justify-center bg-black rounded-[11px] text-xs font-black text-white">
                FB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                FUNBOND
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-400/80">
                EXPERIENCE ARENA
              </span>
            </div>
          </div>

          {/* Secure Live Link */}
          <a 
            href="tel:+919834594372" 
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 transition-all duration-300"
          >
            ⚡ CONNECT SYSTEM
          </a>
        </div>
      </header>

      {/* HERO BANNER SECTION */}
      <section className="max-w-5xl mx-auto text-center px-6 pt-24 pb-12 relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
          BEYOND THE <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.15)]">
            NEXT HORIZON
          </span>
        </h1>
        <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed">
          Step into Chh. Sambhaji Nagar’s ultimate interactive dimension. Discover high-fidelity amusement spaces below.
        </p>
      </section>

      {/* 2. GALLERY INTERACTIVE TERMINAL SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-3">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-neutral-400">
            // LIVE TERMINAL VIEWPORT
          </h2>
          <span className="text-[10px] font-mono text-cyan-500">MATRIX OPERATIONAL</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Viewport Core Screen Module (Left Display) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            <div className="w-full aspect-[16/10] bg-neutral-950 rounded-xl overflow-hidden border border-white/5 relative">
              <img 
                src={selectedSpace.src} 
                alt={selectedSpace.title} 
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  // Direct bypass: injects web resource layer if Next.js local asset layer fails to connect
                  e.target.src = selectedSpace.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-xs font-mono text-white/30">REF // 0{selectedSpace.id}</div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-black tracking-tight text-white uppercase bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                {selectedSpace.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-2 font-light leading-relaxed">
                {selectedSpace.desc}
              </p>
            </div>
          </div>

          {/* Selector Button Arrays (Right Interface Deck) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-start">
            <div className="text-xs font-bold text-neutral-500 tracking-wider uppercase pl-1 mb-1">
              Select Destination Arena Node:
            </div>
            
            <div className="flex flex-col gap-3">
              {arenaSpaces.map((space) => {
                const isCurrent = selectedSpace.id === space.id;
                return (
                  <button
                    key={space.id}
                    onClick={() => setSelectedSpace(space)}
                    className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden ${
                      isCurrent 
                        ? 'border-cyan-500/40 bg-cyan-500/[0.05] shadow-[0_0_20px_rgba(34,211,238,0.03)]' 
                        : 'border-white/5 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03]'
                    }`}
                  >
                    {isCurrent && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-cyan-400" />}
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <span className={`font-mono text-xs ${isCurrent ? 'text-cyan-400' : 'text-neutral-600'}`}>
                        0{space.id}
                      </span>
                      <span className={`text-sm font-bold tracking-wide uppercase transition-colors ${isCurrent ? 'text-white' : 'text-neutral-400'}`}>
                        {space.title}
                      </span>
                    </div>

                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center text-[10px] ${
                      isCurrent ? 'border-cyan-400 text-cyan-400 bg-cyan-950/50' : 'border-white/10 text-neutral-600'
                    }`}>
                      {isCurrent ? '●' : '→'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. CONTACT AND BOOKING CALL-OUT PANEL */}
      <section className="relative my-24 max-w-4xl mx-auto px-6 z-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.01] p-10 md:p-14 backdrop-blur-2xl text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            RESERVE AN EXPERIENCE ENTRY
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-10 text-xs md:text-sm font-light tracking-wide leading-relaxed">
            Connect directly with our booking coordinator to plan your group visit layouts or private gaming blocks.
          </p>

          {/* Interactive Core Links mapped to your verified mobile line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
            <a 
              href="tel:+919834594372" 
              className="w-full sm:w-auto px-8 h-14 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(236,72,153,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center text-xs tracking-widest uppercase"
            >
              📞 CALL NOW +91 98345 94372
            </a>
            <a 
              href="https://wa.me/919834594372?text=Hi%20Funbond%20Team,%20I'd%20like%20to%20get%20details%20and%20schedule%20a%20visit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 h-14 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-500/40 hover:scale-[1.02] transition-all flex items-center justify-center text-xs tracking-widest uppercase"
            >
              <span className="text-cyan-400">💬 WHATSAPP VISIT</span>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL REGIONAL LOCATION FOOTER SYSTEM */}
      <footer className="w-full border-t border-white/5 bg-[#010102] py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm text-neutral-400">
          
          {/* True Location Parameters Card */}
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">
                ARENA ADDRESS COORDINATES
              </h4>
            </div>
            <p className="leading-relaxed text-neutral-300 font-light text-base">
              <span className="text-white font-bold text-lg tracking-tight">Funbond Arena</span><br />
              Ground Floor, Goldie Cinemark,<br />
              Near Railway Station,<br />
              Chh. Sambhaji Nagar
            </p>
          </div>
          
          {/* Operations Parameters Section */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-0.5">CHRONO WINDOW</p>
              <p className="text-neutral-300 font-medium text-xs">Open Daily Mon - Sun</p>
              <p className="text-cyan-400 font-mono text-xs">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-0.5">COMMS PORTAL</p>
              <p className="text-neutral-300 font-mono text-xs">+91 98345 94372</p>
            </div>
          </div>

          {/* Remote Navigation Dispatch Routing */}
          <div className="lg:col-span-3 lg:text-right flex flex-col lg:items-end justify-center">
            <a 
              href="https://maps.google.com/?q=Fun+Bond+Goldie+Cinema+Sambhaji+Nagar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all text-xs tracking-wider uppercase"
            >
              MAP TRANSMISSION ↗
            </a>
          </div>

        </div>

        {/* Console Footprint */}
        <div className="max-w-6xl mx-auto px-6 pt-12 mt-12 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 tracking-wider">
          <div>© {new Date().getFullYear()} FUNBOND ARENA RECONSTRUCTION COMPLETE.</div>
          <div className="font-mono text-neutral-700 text-[9px]">BUILD RELEASE // PRODUCTION V3</div>
        </div>
      </footer>

    </div>
  );
}
