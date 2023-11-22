import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  output: "static"
});