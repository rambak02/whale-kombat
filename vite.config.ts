import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://51.250.123.160:8000/"
    }
  }, 

  plugins: [react()],
})
