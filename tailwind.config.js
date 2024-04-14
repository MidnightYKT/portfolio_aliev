/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                lgb: '1080px',
            },
            boxShadow: {
                '3xl': '0 0 10px rgba(0, 0, 0, 0.3)',
            },
            animation: {
                wiggle: 'wiggle 20s infinite',
            },
            keyframes: {
                wiggle: {
                    '0%': {
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        boxShadow: '15px 15px 50px rgba(0,0,0,0.2)',
                    },
                    '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
                    '50%': {
                        borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%',
                        boxShadow: '-10px -5px 50px rgba(0,0,0,0.2)',
                    },
                    '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
                    '100%': {
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        boxShadow: '15px 15px 50px rgba(0,0,0,0.2)',
                    },
                },
            },
        },
    },
    plugins: [
        // ...
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
}
