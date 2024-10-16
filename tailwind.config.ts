import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#EDEAE0',
        'lava-red': '#FD4336',
        'washed-red': '#FD5F71',
      },
    },
  },
  plugins: [],
};
export default config;
