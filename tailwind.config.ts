import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#102a43',
                    950: '#0a1929',
                },
                accent: {
                    gold: 'rgb(var(--color-accent-gold) / <alpha-value>)',
                    'gold-light': '#F4E4C1',
                    'gold-dark': '#B8941E',
                    emerald: '#10B981',
                    'emerald-light': '#6EE7B7',
                    blue: '#3B82F6',
                },
                background: {
                    dark: 'rgb(var(--color-background-dark) / <alpha-value>)',
                    'dark-secondary': '#111827',
                    'dark-tertiary': '#1f2937',
                    light: '#f9fafb',
                    'light-secondary': '#f3f4f6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'premium': '0 10px 40px rgba(0, 0, 0, 0.1)',
                'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
                'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
                'inner-premium': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
            },
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
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
