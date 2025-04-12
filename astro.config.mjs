import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://epirex.github.io',
  base: '/grafica/',
  outDir: './dist',
  build: {
    format: 'directory'
  }
});