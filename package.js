Package.describe({
    name: 'reywood:font-awesome-sass',
    summary: 'Font Awesome stylesheets in SCSS format',
    version: '4.3.0_2',
    git: 'https://github.com/reywood/meteor-font-awesome-sass.git'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2');
    api.use([
        'meteor',
        'fourseven:scss'
    ]);

    api.addAssets([
        'assets/fonts/fontawesome-webfont.eot',
        'assets/fonts/fontawesome-webfont.svg',
        'assets/fonts/fontawesome-webfont.ttf',
        'assets/fonts/fontawesome-webfont.woff',
        'assets/fonts/fontawesome-webfont.woff2',
        'assets/fonts/FontAwesome.otf'
    ], 'client');

    api.addFiles([
        '_font-awesome.scss',
        'assets/scss/_animated.scss',
        'assets/scss/_bordered-pulled.scss',
        'assets/scss/_core.scss',
        'assets/scss/_fixed-width.scss',
        'assets/scss/_icons.scss',
        'assets/scss/_larger.scss',
        'assets/scss/_list.scss',
        'assets/scss/_mixins.scss',
        'assets/scss/_path.scss',
        'assets/scss/_rotated-flipped.scss',
        'assets/scss/_stacked.scss',
        'assets/scss/_variables.scss'
    ], 'client');
});

Package.onTest(function(api) {
    api.use('reywood:font-awesome-sass');
    api.use([
        'meteor',
        'fourseven:scss',
        'tinytest',
        'test-helpers'
    ]);

    api.addFiles([
        'tests.scss',
        'tests.js'
    ], 'client');
});
