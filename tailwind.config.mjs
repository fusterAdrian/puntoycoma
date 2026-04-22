/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sky: {
          podcast: '#A8D4E8',
          mid: '#7BB8D4',
          dark: '#5A9DC0',
        },
        orange: {
          podcast: '#F5A623',
          dark: '#D4881A',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          darker: '#0F0F0F',
        },
        cream: '#F2EDE3',
        offwhite: '#FEFDF9',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0 #1A1A1A',
        'brutal-lg': '6px 6px 0 #1A1A1A',
        'brutal-sm': '2px 2px 0 #1A1A1A',
        'brutal-white': '4px 4px 0 rgba(255,255,255,0.15)',
        'brutal-white-lg': '6px 6px 0 rgba(255,255,255,0.25)',
      },
      borderWidth: {
        '2.5': '2.5px',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.65s ease both',
        pop: 'pop 0.4s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.92)' },
          '60%': { transform: 'scale(1.04)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
