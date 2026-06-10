/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom colors
      colors: {
        cyan: {
          300: '#06f',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        purple: {
          400: '#d8b4fe',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        magenta: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        slate: {
          800: '#1e293b',
          850: '#172033',
          900: '#0f172a',
          950: '#020617',
        },
      },

      // Custom fonts
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },

      // Font sizes
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },

      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-light': 'bounceLight 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-rotate': 'floatRotate 8s linear infinite',
      },

      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
          },
          '50%': {
            opacity: '0.7',
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatRotate: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
          '100%': { transform: 'translateY(0) rotate(360deg)' },
        },
      },

      // Custom spacing
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
      },

      // Custom opacity
      opacity: {
        '15': '0.15',
        '25': '0.25',
        '35': '0.35',
        '45': '0.45',
        '65': '0.65',
        '75': '0.75',
      },

      // Custom backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },

      // Custom box shadows
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.25)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.25)',
        'glow-magenta': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.25)',
        'neon': '0 0 10px rgba(34, 211, 238, 0.8), inset 0 0 10px rgba(34, 211, 238, 0.3)',
      },

      // Gradient backgrounds
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
      },

      // Perspective
      perspective: {
        '1000': '1000px',
        '500': '500px',
      },

      // Custom transitions
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },

      // Custom z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Custom width/height
      width: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },

      // Border radius
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    // Custom plugin for glass effect
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          '@apply bg-white/10 backdrop-blur-md border border-white/20': {},
        },
        '.glass-dark': {
          '@apply bg-black/30 backdrop-blur-md border border-white/10': {},
        },
        '.neon': {
          '@apply text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]': {},
        },
        '.gradient-text': {
          '@apply text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-600': {},
        },
      });
    },
  ],
  safelist: [
    // Ensure these classes are not purged
    'from-cyan-600/20',
    'to-cyan-400/20',
    'from-purple-600/20',
    'to-purple-400/20',
    'from-red-600/20',
    'to-orange-400/20',
    'from-yellow-600/20',
    'to-yellow-400/20',
    'from-pink-600/20',
    'to-pink-400/20',
    'from-green-600/20',
    'to-green-400/20',
    'hidden',
    'lg:block',
  ],
};
