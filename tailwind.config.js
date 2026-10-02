/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0F19',
        panel: '#0D1117',
        neon: '#00F2FE',
        skyblue: '#4FACFE',
        cyber: '#7F00FF',
        magenta: '#E100FF',
        muted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,242,254,.35), 0 0 60px rgba(0,242,254,.12)',
        'neon-purple': '0 0 20px rgba(127,0,255,.45), 0 0 60px rgba(225,0,255,.12)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '.45' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
