'use client';

import React, { useState } from 'react';

const arenaSpaces = [
  { id: '01', src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  { id: '02', src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop' },
  { id: '03', src: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop' },
  { id: '04', src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop' },
  { id: '05', src: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1200&auto=format&fit=crop' }
];

export default function Page() {
  const [selectedSpace, setSelectedSpace] = useState(arenaSpaces[0]);

  return (
    <div className="min-h-screen bg-[#020105] text-white font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden relative">
      
      {/* 3D DEEP SPACE GRAPH MATRIX BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Reactive Kinetic Nebula Orbs */}
      <div className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-pink-600/10 to-transparent blur-[140px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-[20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-cyan-600/10 to-transparent blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />

      {/* 1. BRANDING NAVIGATION HEADER (CONNECT SYSTEM BUTTON REMOVED) */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020104]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-start">
          
          <div className="flex items-center space-x-4 group">
            <div className="relative p-[1.5px] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <img 
                src="logo.jpg" 
                alt="FUNBOND" 
                className="h-10 w-auto object-contain rounded-[14px] bg-black"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 px-4 items-center justify-center bg-black rounded-[14px] text-xs font-black text-white tracking-tighter">
                FB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-500">
                FUNBOND
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400/80">
                EXPERIENCE ARENA
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* INTRO MODULE */}
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

      {/* 2. PURE VIEWPORT MONITOR DECK (TEXT-FREE DEEP PORTAL IMAGES) */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Projector with 3D Effects */}
          <div className="lg:col-span-8 p-1.5 rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-3xl border border-white/10 flex items-center justify-center transform hover:perspective-1000 hover:rotate-x-1 hover:rotate-y-1 transition-transform duration-500">
            <div className="w-full aspect-[16/10] bg-neutral-950 rounded-[22px] overflow-hidden relative shadow-inner">
              <img 
                src={selectedSpace.src} 
                alt="Selected Arena View" 
                className="w-full h-full object-cover filter saturate-[1.15] contrast-[1.05] transition-all duration-700 ease-out scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Minimal 3D Interactive Selector Rails */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
            {arenaSpaces.map((space) => {
              const isCurrent = selectedSpace.id === space.id;
              return (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpace(space)}
                  className={`w-full p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden group ${
                    isCurrent 
                      ? 'border-cyan-500/40 bg-gradient-to-r from-cyan-500/[0.08] to-transparent shadow-[0_0_30px_rgba(34,211,238,0.1)] translate-x-2' 
                      : 'border-white/5 bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03] hover:translate-x-1'
                  }`}
                >
                  {isCurrent && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400" />}
                  
                  <span className={`font-mono text-xs font-bold tracking-[0.2em] transition-colors ${isCurrent ? 'text-cyan-400' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                    VIEWPORT CONFIG // 0{space.id}
                  </span>

                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center text-[8px] transition-all duration-300 ${
                    isCurrent ? 'border-cyan-400 text-cyan-400 bg-cyan-950/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'border-white/10 text-neutral-600 group-hover:border-white/30 group-hover:text-white'
                  }`}>
                    {isCurrent ? '●' : '→'}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. ACCESS PANEL WITH FIXED PHONE NUMBER */}
      <section className="relative my-24 max-w-4xl mx-auto px-6 z-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.01] p-10 md:p-16 backdrop-blur-3xl text-center shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)]">
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-purple-600/[0.06] blur-[100px] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-pink-600/[0.06] blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            RESERVE AN EXPERIENCE ENTRY
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-10 text-xs md:text-sm font-light tracking-wide leading-relaxed">
            Connect directly with our booking coordinator to plan your group visit layouts or private gaming blocks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto relative z-20">
            <a 
              href="tel:+919834594372" 
              className="w-full sm:w-auto px-8 h-14 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-[0_4px_25px_rgba(236,72,153,0.3)] hover:scale-[1.03] hover:shadow-[0_4px_35px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center text-xs tracking-widest uppercase"
            >
              📞 CALL NOW +91 98345 94372
            </a>
            <a 
              href="https://wa.me/919834594372?text=Hi%20Funbond%20Team,%20I'd%20like%20to%20get%20details%20and%20schedule%20a%20visit." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 h-14 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-cyan-500/40 hover:scale-[1.03] transition-all flex items-center justify-center text-xs tracking-widest uppercase"
            >
              <span className="text-cyan-400">💬 WHATSAPP VISIT</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. STATION LOCATION MATRIX FOOTER */}
      <footer className="w-full border-t border-white/5 bg-[#010002] py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm text-neutral-400">
          
          <div className="lg:col-span-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">
                ARENA ADDRESS COORDINATES
              </h4>
            </div>
            <p className="leading-relaxed text-neutral-300 font-light text-base">
              <span className="text-white font-bold text-lg tracking-tight">Funbond</span><br />
              Ground Floor, Goldie Cinemark,<br />
              Near Railway Station,<br />
              Chh. Sambhaji Nagar
            </p>
          </div>
          
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-1">CHRONO WINDOW</p>
              <p className="text-neutral-300 font-medium text-xs">Open Daily Mon - Sun</p>
              <p className="text-cyan-400 font-mono text-xs">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mb-1">COMMS PORTAL</p>
              <p className="text-neutral-300 font-mono text-xs">+91 98345 94372</p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:text-right flex flex-col lg:items-end justify-center">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(34,211,238,0.05)]"
            >
              MAP TRANSMISSION ↗
            </a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-6 pt-12 mt-16 border-t border-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-600 tracking-widest">
          <div>© {new Date().getFullYear()} FUNBOND ARENA RECONSTRUCTION COMPLETE.</div>
          <div className="font-mono text-neutral-700 text-[9px]">BUILD RELEASE // PRODUCTION V4_STABLE</div>
        </div>
      </footer>

    </div>
  );
}
