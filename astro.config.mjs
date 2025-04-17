// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanguzzo.com.ar',
  base: '/grafica/',
  output: 'static', // salida como web estática
  integrations: [mdx(), sitemap(), tailwind(), icon()],
});