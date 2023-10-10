import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://glittery-palmier-8b1821.netlify.app/',
  integrations: [preact()]
});