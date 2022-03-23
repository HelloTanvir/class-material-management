module.exports = {
    mode: 'jit',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    500: '#1F2937',
                    600: '#838588',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
