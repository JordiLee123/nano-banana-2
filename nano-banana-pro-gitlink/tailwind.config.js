/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Nano Banana 2 Brand Colors
        banana: {
          50: '#FFFDF0',      // Very light banana for backgrounds
          100: '#FFF9CC',     // Light banana tint
          200: '#FFF4A3',     // Lighter banana
          300: '#FFEF7A',     // Light banana
          400: '#FFEA51',     // Banana light
          DEFAULT: '#F8D200', // Main banana yellow (248, 210, 0)
          500: '#F8D200',     // Main (same as DEFAULT)
          600: '#E6C200',     // Deep banana
          700: '#CCA800',     // Deeper banana
          800: '#B39500',     // Dark banana
          900: '#998200',     // Very dark banana
          orange: '#FFB800',  // Banana-orange for gradients
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

