const mix = require("laravel-mix");

const path = require("path");

mix.js("resources/js/app.js", "public/js");

mix.webpackConfig({
    output: {
        chunkFilename: `js/[name].js?id=[chunkhash]`
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
            "@": path.resolve(__dirname, "resources/js/src/")
        }
    }
});
