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
const AttractionsSection = () => {
  const attractions = [
    {
      icon: '🎳',
      title: 'Bowling',
      description: 'Premium lanes with automatic scoring. Challenge friends and family!',
      gradient: 'bg-gradient-to-br from-blue-600/40 to-blue-400/20',
      stats: [
        { value: '12', label: 'Premium Lanes' },
        { value: '4K', label: 'Max Players' },
      ],
    },
    {
      icon: '👾',
      title: 'Arcade Games',
      description: 'Hundreds of classic and modern games. Win tickets for prizes!',
      gradient: 'bg-gradient-to-br from-purple-600/40 to-purple-400/20',
      stats: [
        { value: '200+', label: 'Games' },
        { value: '∞', label: 'Fun' },
      ],
    },
    {
      icon: '🥽',
      title: 'VR Experiences',
      description: 'Immersive virtual reality adventures. Step into another world!',
      gradient: 'bg-gradient-to-br from-pink-600/40 to-pink-400/20',
      stats: [
        { value: '50+', label: 'Experiences' },
        { value: '4D', label: 'Immersion' },
      ],
    },
    {
      icon: '🏎️',
      title: 'Racing Simulators',
      description: 'High-speed action with realistic dynamics. Feel the adrenaline!',
      gradient: 'bg-gradient-to-br from-red-600/40 to-orange-400/20',
      stats: [
        { value: '20+', label: 'Tracks' },
        { value: '200km', label: 'Max Speed' },
      ],
    },
    {
      icon: '🎰',
      title: 'Redemption Games',
      description: 'Earn tickets and win amazing prizes. Keep playing and winning!',
      gradient: 'bg-gradient-to-br from-yellow-600/40 to-yellow-400/20',
      stats: [
        { value: '100+', label: 'Prizes' },
        { value: '🏆', label: 'Rewards' },
      ],
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Entertainment',
      description: 'Safe, fun activities for all ages. Create unforgettable memories!',
      gradient: 'bg-gradient-to-br from-green-600/40 to-green-400/20',
      stats: [
        { value: '5+', label: 'Age Groups' },
        { value: '♾️', label: 'Memories' },
      ],
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4" style={{
            background: 'linear-gradient(135deg, #FF006E, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            🎮 Gaming Attractions
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experience the ultimate entertainment with our world-class gaming attractions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <InteractiveCard key={index} {...attraction} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== STATS SECTION ====================
const StatsSection = () => {
  const stats = [
    { number: 500, label: 'Gaming Attractions', emoji: '🎮', suffix: '+' },
    { number: 50000, label: 'Happy Visitors', emoji: '😄', suffix: '+' },
    { number: 100, label: 'Family Safe', emoji: '✨', suffix: '%' },
    { number: 24, label: 'Operating Hours', emoji: '⏰', suffix: '/7' },
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#1a1a3e] to-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-20"
          style={{
            background: 'linear-gradient(135deg, #00FF00, #FF006E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Why Choose FunBond?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/20 to-[#FFD700]/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:border-[#FF006E] transition-colors h-full flex flex-col items-center justify-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1], rotateZ: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.emoji}
                </motion.div>

                <motion.div
                  className="text-5xl font-black mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #00FF00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                  <span className="text-3xl">{stat.suffix}</span>
                </motion.div>

                <p className="text-white/60 font-semibold">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN APP ====================
export default function FUNBOND() {
  return (
    <div className="relative bg-[#0a0e27] text-white overflow-hidden">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <CustomCursor />
      <AnimatedBackground />
      <FloatingParticles />
      <ScrollProgress />

      <HeroSection />
      <AttractionsSection />
      <StatsSection />

      {/* Coming Soon Sections Placeholder */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              More Amazing Features Coming Soon! 🚀
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Gallery, Testimonials, FAQ, Location & More
            </p>
            <motion.button
              className="px-10 py-4 rounded-xl font-bold bg-gradient-to-r from-[#FF006E] to-[#FFD700] text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(255, 0, 110, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe for Updates 🔔
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4" style={{
            background: 'linear-gradient(135deg, #FF006E, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            FunBond
          </h3>
          <p className="text-white/60 mb-6">Let's Play & Bond</p>
          <p className="text-white/40 text-sm mb-6">
            Goldie Cinemark, Chhatrapati Sambhaji Nagar, Nashik, Maharashtra, India
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://instagram.com/fun.bond2023" className="text-[#FF006E] hover:text-[#FFD700] transition">
              📱 Instagram
            </a>
            <a href="#" className="text-[#00FF00] hover:text-[#FFD700] transition">
              💬 Facebook
            </a>
            <a href="#" className="text-[#0080FF] hover:text-[#FFD700] transition">
              ▶️ YouTube
            </a>
          </div>
          <p className="text-white/30 text-xs">
            © 2024 FunBond. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
