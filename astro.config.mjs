import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "cs",
        locales: ["en", "cs"],
    },
});
