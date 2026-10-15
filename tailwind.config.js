/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F8F5',
        ink: {
          DEFAULT: '#171717',
          soft: '#3D3D3D',
          mute: '#686868',
        },
        surface: {
          DEFAULT: '#EFEFEA',
          warm: '#F2F0EB',
          deep: '#1A1A18',
          'deep-soft': '#242421',
        },
        border: {
          DEFAULT: '#E3E3DD',
          soft: '#EDEDE8',
          deep: '#383833',
        },
        forest: {
          50: '#EAF5F0',
          100: '#D4EBDF',
          200: '#A8D7BF',
          300: '#6FB893',
          400: '#3E9B6E',
          500: '#176B50',
          600: '#135641',
          700: '#0F4434',
          800: '#0B3328',
          900: '#08221C',
        },
        amber: {
          50: '#FEF7ED',
          100: '#FDDBB4',
          200: '#FAC362',
          300: '#E8A23A',
          400: '#C9841C',
        },
        warning: '#C95A1E',
        error: '#B91C1C',
        success: '#176B50',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.375rem, 3vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '680px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
