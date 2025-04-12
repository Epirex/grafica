import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

export default defineConfig({
  site: 'https://estebanguzzo.com.ar',
  base: '/',
  integrations: [astroIcon()],
  outDir: './dist',
  build: {
    format: 'directory'
  }
});
