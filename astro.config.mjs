import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://estebanguzzo.com.ar',
  base: '/',
  output: 'static',
  adapter: github(),
});