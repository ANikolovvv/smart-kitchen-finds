import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  // darkMode: 'class',
  plugins: [nextui()],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 20px rgba(255, 165, 0, 0.5)', // Customize as needed
      },
    },
  },
};
export default config;

