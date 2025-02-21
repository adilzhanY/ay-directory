import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
              },
              keyframes: {
                fadeIn: {
                  '0%': { opacity: '0', transform: 'translateY(10px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            screens: {
                xs: "475px",
            },
            colors: {
                primary: {
                    "100": "#f79eff",//light purple
                    DEFAULT: "#3c0f40",//purple
                },
                secondary: "#FBE843",
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
            },
            fontFamily: {
                "work-sans": ["var(--font-work-sans)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(241, 215, 243)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;