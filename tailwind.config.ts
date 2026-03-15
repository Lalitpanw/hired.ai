import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#050507',
          1: '#0a0a0e',
          2: '#111116',
          3: '#18181f',
          4: '#22222c',
        },
        green: {
          DEFAULT: '#00c896',
          dim: 'rgba(0,200,150,0.08)',
          border: 'rgba(0,200,150,0.2)',
        },
        ink: {
          DEFAULT: '#f0f0f5',
          2: '#8888a0',
          3: '#44445a',
          4: '#2a2a3a',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.055)',
          2: 'rgba(255,255,255,0.09)',
          3: 'rgba(255,255,255,0.15)',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'fade-down': 'fadeDown 0.5s ease both',
        'marquee': 'marquee 28s linear infinite',
        'blink': 'blink 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
export default config
