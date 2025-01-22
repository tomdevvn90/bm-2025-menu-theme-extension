const mix = require('laravel-mix');

mix
  .js('./src/main.js', './bm-2025-menu/assets/bm-2025-menu.bundle.js')
  .react()
  .sass('./src/scss/app.scss', 'bm-2025-menu.bundle.css')
  .setPublicPath('./bm-2025-menu/assets/')

mix.copyDirectory('./bm-2025-menu', process.env.COPY_PATH); 
