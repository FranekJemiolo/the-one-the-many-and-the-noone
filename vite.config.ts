import { defineConfig } from 'vite'

export default defineConfig({
  base: '/the-one-the-many-and-the-noone/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  },
  assetsInclude: ['**/*.yaml'],
  publicDir: 'content'
})
