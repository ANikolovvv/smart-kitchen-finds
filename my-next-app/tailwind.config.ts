import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  // darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 20px rgba(255, 165, 0, 0.5)", // Customize as needed
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        rainbowBorder: "rainbowBorder 6s linear infinite", // Define the animation
      },
      keyframes: {
        rainbowBorder: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
};

export default config;
