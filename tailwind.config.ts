import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'zencorp-green': '#165029',
        'Primary-1/10': '#f6fff9',
        'Primary-1/20': '#e1ffeb',
        'Primary-1/30': '#ccffdd',
        'Primary-1/40': '#b8ffcf',
        'Primary-1/50': '#a1fbbe',
        'Primary-1/60': '#7bd999',
        'Primary-1/70': '#5ab778',
        'Primary-1/80': '#3e955a',
        'Primary-1/90': '#287340',
        'Primary-1/100': '#165029',
        'Secondary-2/10': '#fff5ef',
        'Secondary-2/20': '#ffdecc',
        'Secondary-2/30': '#ffc8aa',
        'Secondary-2/40': '#ffb187',
        'Secondary-2/50': '#ff9b64',
        'Secondary-2/60': '#e7844e',
        'Secondary-2/70': '#c56a38',
        'Secondary-2/80': '#a35226',
        'Secondary-2/90': '#813c17',
        'Secondary-2/100': '#2d1406',
        'accent-3/10': '#f5f5f5',
        'accent-3/20': '#e0e0e0',
        'accent-3/30': '#cccccc',
        'accent-3/40': '#b8b8b8',
        'accent-3/60': '#8f8f8f',
        'accent-3/50': '#a3a3a3',
        'accent-3/70': '#7a7a7a',
        'accent-3/80': '#666666',
        'accent-3/90': '#525252',
        'accent-3/100': '#3d3d3d'
      },
    },
  },
  plugins: [],
} satisfies Config;
