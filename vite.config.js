import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages for a project site, set base to '/<repo>/'
  // so asset URLs resolve correctly. Change '/dashboard/' if your repo name differs.
  base: '/dashboard/',
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'vendor_recharts'
            if (id.includes('react-icons')) return 'vendor_react_icons'
            return 'vendor'
          }
        },
      },
    },
  },
})
