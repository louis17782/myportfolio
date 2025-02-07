import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://luissanteliz.netlify.app/",
  prefetch: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    server: {
      hmr: true,
    }
  },
  image: {
    // Used for all `<Image />` and `<Picture />` components unless overridden
    experimentalLayout: 'responsive',
  },
  experimental: {
    responsiveImages: true,
  },
});