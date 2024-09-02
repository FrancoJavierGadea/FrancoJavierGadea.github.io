import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";


// https://astro.build/config
export default defineConfig({

    site: "https://francojaviergadea.github.io/",
    base: "/",

    integrations: [react()],

    output: "static",

    markdown: {
        rehypePlugins: [

            [rehypeExternalLinks, {target: "_blank", rel: "noopener noreferrer"}],
        ],
    },
});
