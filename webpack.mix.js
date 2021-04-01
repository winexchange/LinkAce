const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  })
  .disableNotifications()
  .version()
  .sourceMaps()

  .js('resources/assets/js/app.js', 'assets/dist/js')
  .combine([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/selectize/dist/js/standalone/selectize.js'
  ], 'public/assets/dist/js/dependencies.js')

  .postCss('resources/assets/css/app.css', 'public/assets/dist/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ]);
