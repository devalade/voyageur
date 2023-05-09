import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': 'Poppins',
        'title': 'Probert'
      }
    },
  },
  plugins: [],
} satisfies Config;
