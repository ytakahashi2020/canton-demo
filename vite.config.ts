import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the repo at /canton-demo/, so the base must match.
// For local `vite dev`, base is '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/canton-demo/' : '/',
}))
