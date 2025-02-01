// NOTE: This is a PostCSS configuration file that sets up plugins for processing CSS.
// - `@tailwindcss/postcss`: Integrates Tailwind CSS into the PostCSS pipeline for optimized styling.
// - `autoprefixer`: Automatically adds vendor prefixes to CSS properties for better cross-browser support.
export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
    },
};
