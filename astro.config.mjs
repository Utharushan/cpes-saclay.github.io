import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import remarkCallout from "@r4ai/remark-callout";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkCallout],
    shikiConfig: {
      theme: "css-variables"
    }
  },
  integrations: [icon(), mdx()],
  //Uniquement pour gitlab
  //outDir: 'public',
  publicDir: 'static',
});