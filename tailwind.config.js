/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "dm-sans": ["DM Sans", "sans-serif"],
            },
            colors: {
                concrete: {
                    50: "#f8f8f8",
                    100: "#f3f3f3", // primary
                    200: "#e4e4e4",
                    300: "#d1d1d1",
                    400: "#b4b4b4",
                    500: "#9a9a9a",
                    600: "#818181",
                    700: "#6a6a6a",
                    800: "#5a5a5a",
                    900: "#4e4e4e",
                },
                "cod-gray": {
                    50: "#f7f7f7",
                    100: "#e3e3e3",
                    200: "#c8c8c8",
                    300: "#a4a4a4",
                    400: "#818181",
                    500: "#666666",
                    600: "#515151",
                    700: "#434343",
                    800: "#383838",
                    900: "#161616", // primary
                },
                "havelock-blue": {
                    50: "#f3f6fc",
                    100: "#e5eef9",
                    200: "#c6dbf1",
                    300: "#94bde5",
                    400: "#468fd1", // primary
                    500: "#357ec2",
                    600: "#2564a4",
                    700: "#1f5085",
                    800: "#1d446f",
                    900: "#1d3a5d",
                },
            },
        },
    },
    plugins: [],
};
