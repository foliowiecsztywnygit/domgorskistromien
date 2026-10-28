/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFBF8',
        surface: '#FFFFFF',
        foreground: '#23292F',
        muted: '#5A6251',
        primary: {
          DEFAULT: '#7CA826',
          light: '#94CC33',
          dark: '#53721D',
          hover: '#688E20',
          50: '#F4F9EB',
          100: '#E6F2D2',
          500: '#8BC030',
          700: '#5F8321',
          900: '#27380E',
        },
        accent: {
          DEFAULT: '#8BC030',
          hover: '#74A425',
          dark: '#53721D',
        },
        earth: {
          warm: '#EFEFEA',
          border: '#E1E9D5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(83, 114, 29, 0.08)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
