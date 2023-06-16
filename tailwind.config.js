/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'standardBg': '#F5F5F5',
            'blueBlack': "#0D062D",
            'lightGrey': '#787486',
            'navyBlue': '#5030E5',
            'midYellow': '#FFA500',
            'midGreen': '#8BC48A',
            'low': '#D58D49',
            'completed': '#68B266',
            'high': '#D8727D',
            'headingColumn': '#625F6D',
            'linecolor': '#DBDBDB',
            //Myprojects Headings
            'mobile': '#7AC555',
            'websiteRedesign': ': #FFA500',
            'designSystem': '#E4CCFD',
            'wireframes': '#76A5EA',

        },
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}