import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for React + TypeScript
export default defineConfig({
  plugins: [react()],
  base: '/', // use '/' because app is at root of Vercel domain
  build: {
    outDir: 'dist', // output folder for Vercel
  },
})
