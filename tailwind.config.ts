import type { Config } from "tailwindcss";
import daisyui from "daisyui";

// This "merges" the standard Tailwind Config with the DaisyUI property
type ConfigWithDaisy = Config & {
  daisyui?: {
    themes?: string[] | boolean;
    darkTheme?: string;
    base?: boolean;
    styled?: boolean;
    utils?: boolean;
    prefix?: string;
    logs?: boolean;
    themeRoot?: string;
  };
};

const config: ConfigWithDaisy = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Linking Inter (Body) and Montserrat (Headings)
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#5c98f2", // Sky Blue
        secondary: "#f59e0b", // Adventure Amber
        accent: "#10b981", // Nature Green
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Travelo usually looks best in 'light'
  },
};

export default config;
