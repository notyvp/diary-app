const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['axios', 'vue', 'vuex', 'marked', 'moment', 'vue-router'])
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/app_v4.scss', 'public/css')
    // .version()


// Enabling the `OfflinePlugin` will prepare service workers and more

// var OfflinePlugin = require('offline-plugin');
// mix.webpackConfig({
//     plugins: [
//        new OfflinePlugin()
//     ]
// });
//
//

let webpack = require("webpack");

mix.webpackConfig({
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
       // new OfflinePlugin()
    ]
});