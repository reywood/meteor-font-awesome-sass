Package.describe({
    name: 'reywood:font-awesome-sass',
    summary: 'Font Awesome stylesheets in SCSS format',
    version: '4.2.2_1',
    git: 'https://github.com/reywood/meteor-font-awesome-sass.git'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.add_files([
        'assets/fonts/fontawesome-webfont.eot',
        'assets/fonts/fontawesome-webfont.svg',
        'assets/fonts/fontawesome-webfont.ttf',
        'assets/fonts/fontawesome-webfont.woff',
        'assets/fonts/FontAwesome.otf'
    ], 'client');

    api.add_files([
        '_font-awesome.scss',
        'assets/scss/_bordered-pulled.scss',
        'assets/scss/_core.scss',
        'assets/scss/_fixed-width.scss',
        'assets/scss/_icons.scss',
        'assets/scss/_larger.scss',
        'assets/scss/_list.scss',
        'assets/scss/_mixins.scss',
        'assets/scss/_path.scss',
        'assets/scss/_rotated-flipped.scss',
        'assets/scss/_spinning.scss',
        'assets/scss/_stacked.scss',
        'assets/scss/_variables.scss'
    ], 'server');
});

Package.onTest(function(api) {
  api.use('reywood:font-awesome-sass');
  api.use(['fourseven:scss', 'tinytest', 'test-helpers']);

  api.add_files([
      'tests.scss',
      'tests.js'
    ], 'client');
});
