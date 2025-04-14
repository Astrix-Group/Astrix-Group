/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6", // Vibrant purple
        secondary: "#06b6d4", // Cyan
        accent: "#f97316", // Orange for accents
        dark: {
          DEFAULT: "#0f172a", // Deeper blue-dark background
          100: "#1e293b", // Slightly lighter dark
          200: "#334155", // Card backgrounds
          300: "#475569", // Borders
          400: "#64748b", // Hover states
        },
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        light: "#e5e7eb", // Light text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.5)',
        'glow-orange': '0 0 15px rgba(249, 115, 22, 0.5)',
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'body': { backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(15, 23, 42) 0%, rgb(21, 32, 60) 90%)' },
      })
    },
  ],
}
