/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            black: '#171717',
            pblack: '#000',
            blue: '#2563eb',
            green: '#16a34a',
            red: '#dc2626',
            gray: '#d1d5db',
            white: '#fff',
            washedwhite: '#F5F7FF',
            sky: '#f0f9ff',
            color10: '#666666',
            color5: '#A2A6B0',
            yellow: '#FFB800',
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
