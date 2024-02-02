import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      shared: "/src/shared",
      pages: "/src/pages",
      components: "/src/shared/components",
      styles: "/src/styles",
      layout: '/src/shared/layout',
      types: '/src/shared/types'
    },
  },
})
