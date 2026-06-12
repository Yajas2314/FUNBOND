import React from 'react';

const Navigation = () => {
  return (
    <nav className="w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <span className="text-slate-950 font-black text-xl">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              FUNBOND
            </span>
            <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-extrabold">
              Goldie Cinemark Edition
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <a href="#arena" className="hover:text-cyan-400 transition-colors duration-200">The Arena</a>
          <a href="#zones" className="hover:text-cyan-400 transition-colors duration-200">Experience Zones</a>
          <a href="#gallery" className="hover:text-cyan-400 transition-colors duration-200">Media Hub</a>
        </div>

        <div>
          <button 
            onClick={() => document.getElementById('zones')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300"
          >
            Explore Zones
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div id="arena" className="relative isolate overflow-hidden min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
      {/* Dynamic 3D Perspective Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-25 animate-pulse" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-[140px] -z-10" />

      <div className="max-w-5xl mx-auto space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-[inset_0_1px_1px_rgba(25,255,255,0.1)]">
          ⚡ Ultra-Premium Entertainment Hub
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white leading-none">
          UNLEASH THE <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            ADRENALINE
          </span>
        </h1>
        
        <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Welcome to FunBond at Goldie Cinemark. Five systematically engineered amusement micro-environments designed for peak interactive play, competition, and relaxation.
        </p>

        <div className="pt-4">
          <button 
            onClick={() => document.getElementById('zones')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300"
          >
            Access Space Matrix
          </button>
        </div>
      </div>
    </div>
  );
};

const ZonesSection = () => {
  const zones = [
    {
      num: '01',
      title: 'Softplay Area',
      tagline: 'ADVENTURE & EXPLORATION',
      description: 'An expansive, vibrant multilayer obstacle landscape engineered with soft materials, slides, and sensory climbing arrays for high-energy youthful recreation.',
      stat: 'Safe Dynamic Play',
      shadow: 'hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] hover:border-cyan-500/30'
    },
    {
      num: '02',
      title: 'Arcade Area',
      tagline: 'NEXT-GEN SIMULATION GRID',
      description: 'A massive custom ecosystem packed with classic retro cabinets, modern e-sports simulators, and high-frequency ticket-dispensing systems using seamless card tap integration.',
      stat: '50+ Interactive Units',
      shadow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:border-purple-500/30'
    },
    {
      num: '03',
      title: 'VR Area',
      tagline: 'HYPER-IMMERSIVE MATRIX',
      description: 'Untethered multi-user sandbox systems with omnidirectional tracking arrays. Dissolve real-world parameters across high-fidelity simulated combat matrices.',
      stat: '4 Synchronized Bays',
      shadow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:border-blue-500/30'
    },
    {
      num: '04',
      title: 'Bowling Area',
      tagline: 'LUXURY BOUTIQUE LANES',
      description: 'Hardwood pro-tier alleys complete with reactive glowing lane architecture, advanced instant automated telemetry screens, and high-fidelity sensory acoustics.',
      stat: '12 Executive Lanes',
      shadow: 'hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] hover:border-amber-500/30'
    },
    {
      num: '05',
      title: 'The Cafeteria',
      tagline: 'PREMIUM GOURMET LOUNGE',
      description: 'Refuel and recharge inside our luxurious glass-clad dining hub. Serving hand-crafted gourmet selections, premium refreshers, and signature casual plates.',
      stat: 'Full Dining Menu',
      shadow: 'hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] hover:border-red-500/30'
    }
  ];

  return (
    <section id="zones" className="py-28 px-6 max-w-[90rem] mx-auto scroll-mt-20">
      <div className="mb-20 text-center space-y-4">
        <span className="text-xs font-black tracking-widest text-cyan-400 uppercase block">Spatial Configurations</span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">THE FIVE EXPERIENTIAL ZONES</h2>
      </div>

      {/* Expanded 5-Column Bento Grid with High-Fidelity Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 perspective-1000">
        {zones.map((item, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] ${item.shadow}`}
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-4xl font-mono font-black text-white/5">{item.num}</span>
                <span className="text-[8px] font-extrabold tracking-widest text-cyan-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">{item.tagline}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3 tracking-tight leading-none">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-8">{item.description}</p>
            </div>
            <div className="border-t border-white/10 pt-4 mt-auto flex flex-col gap-2">
              <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Zone Specifications</span>
              <span className="text-center text-xs font-black text-white tracking-wide font-mono bg-white/5 px-2 py-1.5 rounded-md border border-white/5">{item.stat}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ImageGallerySection = () => {
  return (
    <section id="gallery" className="py-28 bg-slate-900/10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-2">
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase block">Visual Feed</span>
          <h3 className="text-3xl md:text-5xl font-black text-white">THE MEDIA FRAMEWORK</h3>
        </div>
        
        {/* Sleek Glass Gallery Containers organized to showcase all 5 zones */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="h-48 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group hover:border-cyan-500/30 transition-all duration-300">
            <span className="text-2xl mb-2">🏃‍♂️</span>
            <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase group-hover:text-cyan-400 transition-colors">[ Softplay Area ]</span>
          </div>
          <div className="h-48 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group hover:border-purple-500/30 transition-all duration-300">
            <span className="text-2xl mb-2">🕹️</span>
            <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase group-hover:text-purple-400 transition-colors">[ Arcade Zone ]</span>
          </div>
          <div className="h-48 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group hover:border-blue-500/30 transition-all duration-300">
            <span className="text-2xl mb-2">🥽</span>
            <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase group-hover:text-blue-400 transition-colors">[ VR Matrix ]</span>
          </div>
          <div className="h-48 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group hover:border-amber-500/30 transition-all duration-300">
            <span className="text-2xl mb-2">🎳</span>
            <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase group-hover:text-amber-400 transition-colors">[ Bowling Alley ]</span>
          </div>
          <div className="h-48 rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center p-4 text-center group hover:border-red-500/30 transition-all duration-300 col-span-2 md:col-span-1">
            <span className="text-2xl mb-2">🍔</span>
            <span className="text-[9px] font-bold tracking-wider text-slate-500 uppercase group-hover:text-red-400 transition-colors">[ Cafeteria Lounge ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 py-12 text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
      <p>© {new Date().getFullYear()} FUNBOND Arena System. Co-Located at Goldie Cinemark. All Rights Reserved.</p>
    </footer>
  );
};

const FUNBOND = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden antialiased tracking-tight">
      <Navigation />
      <main>
        <HeroSection />
        <ZonesSection />
        <ImageGallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default FUNBOND;
