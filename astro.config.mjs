import paraglide from "@inlang/paraglide-js-adapter-astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "cs",
        locales: ["en", "cs"],
    },
    integrations: [
        paraglide({
            project: "./project.inlang",
            outdir: "./src/paraglide",
        }),
    ]
});
