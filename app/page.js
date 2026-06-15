'use client';

import React, { useState } from 'react';

// ARENA SPACES MEDIA PACK
const arenaSpaces = [
  { id: '01', title: 'Racing Sims', src: 'https://lh3.googleusercontent.com/d/1v7RYujAnGTS2PNQ4Ji2UzSRMydGIsOiQ' },
  { id: '02', title: 'Joyful Balls',src: 'https://lh3.googleusercontent.com/d/1fPzHMiUjV5vThdcV7-szJkjEjLuzb6yx' },
  { id: '03', title: 'Bowling Zone',src: 'https://lh3.googleusercontent.com/d/1_4ZT8A4upVjrfAqTs95u54YZkJn5HQol' },
  { id: '04', title: 'Soft Games', src: 'https://lh3.googleusercontent.com/d/1tHM-piNXPX0fsdopVAQMHlguVE4eDaUk' },
  { id: '05', title: 'Soft Games', src: 'https://lh3.googleusercontent.com/d/12vYtYsNEa7MlzmJkmyWkpbkMo_Y5GQiu'}
];

const achievements = [
  { metric: '4 LANES', title: 'PREMIUM BOWLING', desc: 'Bespoke, highly polished architectural bowling lanes equipped with synchronized neon light tracking.' },
  { metric: 'VR GLIDE', title: 'VR PARAGLIDING SIMULATOR', desc: 'Next-generation motion tracking and immersive virtual paragliding rigs for ultimate adrenaline.' },
  { metric: 'SOFT GAMES', title: 'PREMIUM AMUSEMENT', desc: 'Dedicated luxury soft play setups and interactive physical leisure attractions for groups and families.' }
];

const specialBookings = [
  {
    title: "BIRTHDAY BASH",
    price: "From ₹2,999",
    tagline: "Celebrate milestones with a legendary tailored gaming experience.",
    perks: [
      "Private Party Room",
      "Unlimited Tokens for 2 Hours",
      "Custom Cake & Elaborate Theme Decorations",
      "Dedicated On-Site Party Host",
      "Group Photos & Memorabilia Pack"
    ],
    accent: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    title: "CORPORATE EVENTS",
    price: "Custom Pricing",
    tagline: "High-octane team building sessions and premium corporate hospitality.",
    perks: [
      "Exclusive Venue Booking Options",
      "Custom Competitive Tournament Setup",
      "Gourmet Catering Options",
      "Fully Branded Dynamic Experience Panels",
      "Dedicated Corporate Event Coordinator"
    ],
    accent: "from-cyan-500 via-blue-600 to-indigo-600"
  },
  {
    title: "SCHOOL TRIPS",
    price: "From ₹499 / Student",
    tagline: "Educational mechanics mixed with safe, active high-energy play.",
    perks: [
      "Fully Supervised Group Activities",
      "Age-Appropriate Structural Games",
      "Generous Tiered Group Discounts",
      "Comprehensive Safety Briefing",
      "Dedicated Teacher Coordination Desk"
    ],
    accent: "from-amber-400 via-orange-500 to-pink-500"
  }
];

const loyaltyPlans = [
  {
    name: "BRONZE",
    points: "0 - 999 Points",
    accent: "border-neutral-700/50 text-neutral-400",
    glow: "rgba(115,115,115,0.02)",
    features: ["300 Game Tokens / mo", "5% Off Bookings", "Birthday Surprise Pack", "Monthly Deals Newsletter", "Access to Members App"]
  },
  {
    name: "SILVER",
    points: "1,000 - 4,999 Points",
    accent: "border-slate-500/30 text-slate-300",
    glow: "rgba(148,163,184,0.05)",
    features: ["800 Game Tokens / mo", "10% Off Bookings", "Free Monthly Credits", "Priority Party Window", "Exclusive Event Invites"]
  },
  {
    name: "GOLD",
    points: "5,000 - 14,999 Points",
    accent: "border-yellow-500/30 text-yellow-400",
    glow: "rgba(234,179,8,0.06)",
    features: ["2,000 Game Tokens / mo", "20% Off Bookings", "Free VR Sessions Monthly", "VIP Skip-The-Queue", "Gold Tournaments Entry", "Double Reward Points"]
  },
  {
    name: "PLATINUM",
    points: "15,000+ Points",
    accent: "border-cyan-400/40 text-cyan-400",
    glow: "rgba(34,211,238,0.1)",
    features: ["Unlimited Tokens Pool", "30% Off Everything Always", "Permanent Queue Skip", "Invite-Only Galas", "Personal Gaming Concierge", "Anniversary Gift Pack"]
  }
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
          className="w-full h-full object-cover filter brightness-[0.25] saturate-[1.1] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030206]/90 via-[#030206]/60 to-[#030206]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030206_100%)]" />
      </div>

      {/* TOP PROFESSIONAL NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030206]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          
          <div className="flex items-center space-x-5 group">
            <div className="relative h-20 w-20 rounded-xl p-[1.5px] overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
              <img 
                src="/logo.png" 
                alt="FUNBOND BRAND LOGO" 
                className="h-full w-full object-contain rounded-[10px] bg-[#07050d] p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-[0.2em] bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                FUNBOND
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400/90">
                EXPERIENCE ARENA
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-xs font-black tracking-widest text-neutral-400 uppercase">
            <a href="#gallery" className="hover:text-white transition-colors">GALLERY</a>
            <a href="#bookings" className="hover:text-white transition-colors">BOOKINGS</a>
            <a href="#membership" className="hover:text-white transition-colors">MEMBERSHIP</a>
            <a href="#milestones" className="hover:text-white transition-colors">METRICS</a>
            <a href="#expansion" className="hover:text-white transition-colors">EXPANSION</a>
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

        {/* INTERACTIVE CARDS WITH ATTRACTIONS */}
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

        {/* GALLERY MODULE */}
        <section id="gallery" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="border-b border-white/5 pb-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-cyan-400 uppercase mb-2">// AMUSEMENT SEGMENTS</h2>
            <p className="text-3xl font-black tracking-tight text-white uppercase">ARENA PORTALS</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
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

        {/* SPECIAL EVENT BOOKINGS */}
        <section id="bookings" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="border-b border-white/5 pb-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-pink-500 uppercase mb-2">// EXCLUSIVE PACKAGES</h2>
            <p className="text-3xl font-black tracking-tight text-white uppercase">SPECIAL BOOKINGS</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialBookings.map((pkg, idx) => (
              <div key={idx} className="flex flex-col rounded-[32px] bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 shadow-xl">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pkg.accent} opacity-10 filter blur-xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="mb-6">
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase mb-1">{pkg.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-md bg-white/5 text-cyan-400 font-mono text-xs font-bold tracking-wider">
                    {pkg.price}
                  </div>
                </div>

                <p className="text-neutral-400 text-xs font-light leading-relaxed mb-8">
                  {pkg.tagline}
                </p>

                <ul className="space-y-3.5 flex-grow mb-8">
                  {pkg.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-start text-xs text-neutral-300 font-normal tracking-wide">
                      <span className="text-cyan-400 mr-2.5 font-bold">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a href="#booking" className="w-full h-11 bg-white/5 border border-white/10 text-white rounded-xl text-[11px] font-bold tracking-widest uppercase flex items-center justify-center hover:bg-white/10 transition-colors">
                  SECURE BOOKING SLOT
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* MEMBERSHIP ROYALTY TIERS */}
        <section id="membership" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="border-b border-white/5 pb-6 mb-12">
            <h2 className="text-xs font-black tracking-[0.4em] text-cyan-400 uppercase mb-2">// LOYALTY PIPELINE</h2>
            <p className="text-3xl font-black tracking-tight text-white uppercase">TIERED PLANS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl border ${plan.accent} bg-white/[0.01] p-6 flex flex-col relative transition-all duration-300 hover:-translate-y-1`}
                style={{ boxShadow: `0 10px 40px -10px ${plan.glow}` }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-black tracking-wider uppercase mb-1">{plan.name}</h3>
                  <p className="text-[10px] font-mono font-bold tracking-widest opacity-60 uppercase">{plan.points}</p>
                </div>

                <div className="w-full h-[1px] bg-white/5 mb-6" />

                <ul className="space-y-4 flex-grow mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-[11px] text-neutral-300 leading-relaxed font-light">
                      <span className="text-purple-400 mr-2 font-mono">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* NEW SECTION III: MILESTONES & RATING SYSTEM */}
        <section id="milestones" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="p-1.5 rounded-[36px] bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 border border-white/5 backdrop-blur-3xl">
            <div className="bg-[#05040a]/90 rounded-[32px] px-8 py-16 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black tracking-widest uppercase">
                  <span>⚡ MASSIVE PLAYER BASE</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-white">
                  1 MILLION+ PLAYERS <br />
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    CANNOT BE WRONG.
                  </span>
                </h3>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Real stories from real players across the country. Witness the structural shifting of competitive leisure, simulated athletics, and high-tier hospitality frameworks.
                </p>
                <div className="pt-2">
                  <button className="h-11 px-6 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-bold tracking-wider uppercase hover:bg-white/5 transition-colors">
                    READ PLAYER ENCOUNTERS →
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-cyan-400/20 transition-all">
                  <div className="text-5xl font-black text-cyan-400 tracking-tight mb-2">4.9</div>
                  <div className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-1">AVERAGE USER RATING</div>
                  <p className="text-[11px] text-neutral-500 font-light">Calculated over verified digital arcade visits and checkout telemetry logs.</p>
                </div>

                <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-pink-500/20 transition-all">
                  <div className="text-5xl font-black text-pink-500 tracking-tight mb-2">98%</div>
                  <div className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-1">WOULD RECOMMEND</div>
                  <p className="text-[11px] text-neutral-500 font-light">Sourced via decentralized exit surveys and institutional event evaluations.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NEW SECTION IV: NATIONAL EXPANSION FOOTPRINT & HOURS */}
        <section id="expansion" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* National Footprint Card */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[32px] bg-white/[0.01] border border-white/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 filter blur-3xl rounded-full" />
              <div>
                <h4 className="text-xs font-black tracking-[0.4em] text-cyan-400 uppercase mb-2">// GEOGRAPHIC SCALING</h4>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-6 leading-none">
                  INDIA'S 8 MAJOR CITIES <br />
                  <span className="text-neutral-500 font-light text-2xl md:text-3xl block mt-2">
                    1M+ Active Competitors & Counting
                  </span>
                </h3>
                <p className="text-neutral-400 text-xs font-light max-w-xl leading-relaxed">
                  Apart from our landmark arena in Chhatrapati Sambhaji Nagar, Funbond is deploying hyper-premium multi-tiered social entertainment nodes across India's primary urban sectors.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-6 border-t border-white/5 text-[10px] font-mono tracking-widest text-neutral-400">
                <div>[01] MUMBAI</div>
                <div>[02] BENGALURU</div>
                <div>[03] DELHI NCR</div>
                <div>[04] PUNE</div>
                <div>[05] HYDERABAD</div>
                <div>[06] CHENNAI</div>
                <div>[07] AHMEDABAD</div>
                <div>[08] INDORE</div>
              </div>
            </div>

            {/* Timings Interface Card */}
            <div className="lg:col-span-5 p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-purple-900/20 via-transparent to-transparent border border-purple-500/20 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-pink-400 text-[10px] font-black tracking-widest uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>7 DAYS OPEN CHRONO MATRIX</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">TIMINGS STATUS</h3>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1">MONDAY — THURSDAY</p>
                    <p className="text-xl font-mono font-bold text-white">11:00 AM — 11:00 PM</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-500/[0.05] border border-purple-500/20">
                    <p className="text-[10px] font-black uppercase tracking-widest text-pink-400 mb-1">FRIDAY — SUNDAY & HOLIDAYS</p>
                    <p className="text-xl font-mono font-bold text-white">11:00 AM — 12:00 AM <span className="text-xs text-neutral-400 font-sans block sm:inline sm:ml-2">(MIDNIGHT SHIFT)</span></p>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-neutral-500 mt-8 font-light">
                *Operational hours are subject to regional holiday shifts and exclusive full-venue private corporate takeovers.
              </p>
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
              Coordinate directly with our operations pipeline to set up group bookings, private events, or loyalty configurations.
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

      {/* MASTER PROFESSIONAL DIRECTORY FOOTER */}
      <footer className="w-full border-t border-white/5 bg-[#030206]/95 backdrop-blur-md pt-20 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-sm text-neutral-400">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">FUNBOND INT. OPERATIONS</h4>
            </div>
            <p className="leading-relaxed text-neutral-300 font-light text-sm">
              <span className="text-white font-black text-lg block mb-1">FUNBOND ARENA</span>
              Ground Floor, Goldie Cinemark,<br />
              Near Railway Station,<br />
              Chh. Sambhaji Nagar
            </p>
            <div className="pt-2">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
                MAP LINK MAP TRANSMISSION ↗
              </a>
            </div>
          </div>
          
          {/* Navigation Matrix 1: Amusement Segments */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[10px] font-black tracking-widest text-neutral-200 uppercase mb-1">CORE GAMES</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#gallery" className="hover:text-white transition-colors">Boutique Bowling</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Racing Simulation Deck</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">VR Paragliding Simulation</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Trampoline Arena Deck</a></li>
            </ul>
          </div>

          {/* Navigation Matrix 2: Gatherings */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[10px] font-black tracking-widest text-neutral-200 uppercase mb-1">CELEBRATIONS</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#bookings" className="hover:text-white transition-colors">Birthday Party Bash</a></li>
              <li><a href="#bookings" className="hover:text-white transition-colors">Corporate Events Panel</a></li>
              <li><a href="#bookings" className="hover:text-white transition-colors">Institutional School Trips</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Group Cooking & Bond</a></li>
            </ul>
          </div>

          {/* Navigation Matrix 3: Corporate Info */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[10px] font-black tracking-widest text-neutral-200 uppercase mb-1">ENTERPRISE</p>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#expansion" className="hover:text-white transition-colors">Careers Ecosystem</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Media & Press Kit</a></li>
              <li><a href="#milestones" className="hover:text-white transition-colors">CSR Initiatives Group</a></li>
              <li><a href="#expansion" className="hover:text-white transition-colors">Safety Policy Protocol</a></li>
            </ul>
          </div>

          {/* Navigation Matrix 4: Comms & Social Broadcasts */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <p className="text-[10px] font-black tracking-widest text-neutral-200 uppercase mb-1">SOCIAL CHANNELS</p>
              <div className="flex flex-col space-y-2 text-xs font-light">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">📸 INSTAGRAM FEED</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">📺 YOUTUBE BROADCAST</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-neutral-200 uppercase mb-1">DIRECT HELP</p>
              <ul className="space-y-1.5 text-xs font-light">
                <li><a href="tel:+919834594372" className="hover:text-white transition-colors">Support Portal</a></li>
                <li><a href="mailto:support@funbond.com" className="hover:text-white transition-colors">User Feedback Desk</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* LOWER COMPLIANCE & ACCREDITATION BANNER */}
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-neutral-600 tracking-widest">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            <a href="#expansion" className="hover:text-neutral-400 transition-colors uppercase">TERMS OF USE</a>
            <a href="#expansion" className="hover:text-neutral-400 transition-colors uppercase">PRIVACY POLICY</a>
            <a href="#expansion" className="hover:text-neutral-400 transition-colors uppercase">COMPLIANCE STATEMENTS</a>
          </div>
          <div className="text-center md:text-right space-y-1">
            <div>© 2026 FUNBOND CORPORATION INT. ALL RIGHTS RESERVED.</div>
            <div className="font-mono text-neutral-700 text-[9px]">ENGINE COMPILATION // PRODUCTION_V7.5</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
