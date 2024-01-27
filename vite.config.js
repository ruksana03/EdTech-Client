import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcssForms from '@tailwindcss/forms';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcssForms(),
  ],
});
