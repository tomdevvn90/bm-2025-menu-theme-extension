const mix = require('laravel-mix');

mix
  .js('./src/main.js', './bm-2025-menu/assets/menu-builder.bundle.js')
  .react()
  .sass('./src/scss/app.scss', 'menu-builder.bundle.css')
  .setPublicPath('./bm-2025-menu/assets/')

mix.copyDirectory('./bm-2025-menu', process.env.COPY_PATH); 
