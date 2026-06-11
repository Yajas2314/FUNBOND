'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

// ==================== CUSTOM CURSOR ====================
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.05,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-50 hidden lg:block"
      style={{
        border: '2px solid #FF006E',
        borderRadius: '50%',
        boxShadow: '0 0 10px #FF006E, inset 0 0 10px rgba(255, 0, 110, 0.3)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div
        className="absolute w-2 h-2 bg-gradient-to-r from-FF006E to-FFD700 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #FF006E',
        }}
      />
    </div>
  );
};

// ==================== ANIMATED BACKGROUND ====================
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 110, 0.15), transparent)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 0, 0.1), transparent)',
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -50, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 128, 255, 0.1), transparent)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </div>
  );
};

// ==================== FLOATING PARTICLES ====================
const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#FF006E', '#FFD700', '#00FF00'][Math.floor(Math.random() * 3)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          animate={{
            y: [0, -300, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

// ==================== SCROLL PROGRESS ====================
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-FF006E via-FFD700 to-00FF00 z-40"
      style={{ width: `${progress}%` }}
    />
  );
};

// ==================== HERO SECTION ====================
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(null);

  const floatingItems = [
    { emoji: '🎳', label: 'Bowling', angle: 0 },
    { emoji: '👾', label: 'Arcade', angle: 72 },
    { emoji: '🥽', label: 'VR', angle: 144 },
    { emoji: '🏎️', label: 'Racing', angle: 216 },
    { emoji: '🎰', label: 'Prizes', angle: 288 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#1a1a3e] to-[#0a0e27] py-20">
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4" style={{
            background: 'linear-gradient(135deg, #FF006E, #FFD700, #00FF00, #0080FF)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient 8s ease infinite',
          }}>
            FunBond
          </h1>
          <motion.div
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 0, 110, 0.5)',
                '0 0 40px rgba(255, 215, 0, 0.5)',
                '0 0 20px rgba(255, 0, 110, 0.5)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl font-bold text-[#00FF00]"
          >
            Let's Play & Bond
          </motion.div>
        </motion.div>

        {/* Floating items circle */}
        <div className="relative w-80 h-80 mx-auto mb-16">
          {floatingItems.map((item, index) => {
            const x = Math.cos((item.angle * Math.PI) / 180) * 150;
            const y = Math.sin((item.angle * Math.PI) / 180) * 150;

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x, y }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
                whileHover={{ scale: 1.4, filter: 'drop-shadow(0 0 20px #FF006E)' }}
              >
                <motion.div
                  className="text-6xl drop-shadow-lg"
                  animate={isHovered === index ? { rotateZ: 360 } : { rotateZ: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.emoji}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isHovered === index ? { opacity: 1, y: 10 } : { opacity: 0, y: -10 }}
                  className="text-xs font-bold text-[#FFD700] mt-2 whitespace-nowrap"
                >
                  {item.label}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: '0 0 60px rgba(255, 0, 110, 0.4), inset 0 0 60px rgba(255, 0, 110, 0.2)',
            }}
            animate={{
              boxShadow: [
                '0 0 60px rgba(255, 0, 110, 0.4), inset 0 0 60px rgba(255, 0, 110, 0.2)',
                '0 0 100px rgba(255, 215, 0, 0.6), inset 0 0 100px rgba(255, 215, 0, 0.3)',
                '0 0 60px rgba(255, 0, 110, 0.4), inset 0 0 60px rgba(255, 0, 110, 0.2)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-4 rounded-xl font-bold text-lg text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FF006E, #FFD700)',
              boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(255, 0, 110, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              🎮 Explore Games
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>

          <motion.button
            className="px-10 py-4 rounded-xl font-bold text-lg text-[#FF006E] border-2 border-[#FF006E] hover:bg-[#FF006E] hover:text-white transition-all"
            style={{
              boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 110, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            📍 Visit Today
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-[#00FF00] text-sm mb-2">Scroll to explore</p>
          <p className="text-2xl">⬇️</p>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== INTERACTIVE CARD ====================
const InteractiveCard = ({ icon, title, description, gradient, index, stats }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-96 rounded-3xl overflow-hidden cursor-pointer relative"
    >
      {/* Background */}
      <div className={`absolute inset-0 ${gradient} transition-all duration-300`} />
      
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        animate={{
          borderColor: isHovered ? 'rgba(255, 0, 110, 0.6)' : 'rgba(255, 0, 110, 0.1)',
          boxShadow: isHovered
            ? '0 0 40px rgba(255, 0, 110, 0.5), inset 0 0 40px rgba(255, 0, 110, 0.1)'
            : 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <motion.div
          animate={{
            scale: isHovered ? 1.3 : 1,
            rotateZ: isHovered ? 10 : 0,
          }}
          className="text-6xl mb-4"
        >
          {icon}
        </motion.div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/80 text-sm mb-6">{description}</p>
          
          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-2 gap-2 mb-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-2">
                  <p className="text-[#FFD700] font-bold text-sm">{stat.value}</p>
                  <p className="text-white/60 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <motion.button
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold text-sm transition-colors backdrop-blur-sm border border-white/30"
        >
          Explore →
        </motion.button>
      </div>
    </motion.div>
  );
};

// ==================== ATTRACTIONS SECTION ====================
import React from 'react';

const AttractionsSection = () => {
  const attractions = [
    {
      icon: '🎳',
      title: 'Bowling',
      description: 'Premium lanes with automatic scoring. Challenge friends and family!',
      gradient: 'bg-gradient-to-br from-blue-600/40 to-blue-400/20',
      stats: [{ value: '12', label: 'Premium Lanes' }]
    },
    {
      icon: '🕹️',
      title: 'Arcade Zone',
      description: 'Massive selection of classic retro cabinets and modern high-tech simulator games.',
      gradient: 'bg-gradient-to-br from-purple-600/40 to-purple-400/20',
      stats: [{ value: '50+', label: 'Active Games' }]
    },
    {
      icon: '🥽',
      title: 'VR Arena',
      description: 'Immerse yourself completely in state-of-the-art virtual reality multiplayer battlegrounds.',
      gradient: 'bg-gradient-to-br from-cyan-600/40 to-cyan-400/20',
      stats: [{ value: '4', label: 'VR Stations' }]
    },
    {
      icon: '🎁',
      title: 'Gifts & Prizes',
      description: 'Redeem your arcade tickets and prize points for premium gaming gear, collectibles, and gadgets.',
      gradient: 'bg-gradient-to-br from-amber-600/40 to-amber-400/20',
      stats: [{ value: '100+', label: 'Prize Options' }]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Our Attractions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {attractions.map((item, index) => (
          <div key={index} className={`p-6 rounded-2xl border border-white/10 ${item.gradient} backdrop-blur-md transition-all duration-300 hover:scale-105 flex flex-col justify-between`}>
            <div>
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{item.description}</p>
            </div>
            <div className="border-t border-white/10 pt-4 mt-auto">
              {item.stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{stat.label}</span>
                  <span className="text-xl font-bold text-cyan-400">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FUNBOND = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-400">
      <main>
        <AttractionsSection />
      </main>
    </div>
  );
};

export default FUNBOND;



