import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for React development server
// This sets up the development environment with hot module replacement
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
