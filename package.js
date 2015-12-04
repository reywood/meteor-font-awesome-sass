Package.describe({
    name: 'reywood:font-awesome-sass',
    summary: 'Font Awesome stylesheets in SCSS format',
    version: '4.5.0',
    git: 'https://github.com/reywood/meteor-font-awesome-sass.git'
});

Npm.depends({
  'font-awesome': '4.5.0'
});

FONTAWESOME_PATH = '.npm/package/node_modules/font-awesome';

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2');
    api.use([
        'meteor',
        'fourseven:scss@3.4.0'
    ]);

    api.addAssets([
        FONTAWESOME_PATH + '/fonts/fontawesome-webfont.eot',
        FONTAWESOME_PATH + '/fonts/fontawesome-webfont.svg',
        FONTAWESOME_PATH + '/fonts/fontawesome-webfont.ttf',
        FONTAWESOME_PATH + '/fonts/fontawesome-webfont.woff',
        FONTAWESOME_PATH + '/fonts/fontawesome-webfont.woff2',
        FONTAWESOME_PATH + '/fonts/FontAwesome.otf'
    ], 'client');

    api.addFiles([
        '_font-awesome.scss',
        FONTAWESOME_PATH + '/scss/_animated.scss',
        FONTAWESOME_PATH + '/scss/_bordered-pulled.scss',
        FONTAWESOME_PATH + '/scss/_core.scss',
        FONTAWESOME_PATH + '/scss/_fixed-width.scss',
        FONTAWESOME_PATH + '/scss/_icons.scss',
        FONTAWESOME_PATH + '/scss/_larger.scss',
        FONTAWESOME_PATH + '/scss/_list.scss',
        FONTAWESOME_PATH + '/scss/_mixins.scss',
        FONTAWESOME_PATH + '/scss/_path.scss',
        FONTAWESOME_PATH + '/scss/_rotated-flipped.scss',
        FONTAWESOME_PATH + '/scss/_stacked.scss',
        FONTAWESOME_PATH + '/scss/_variables.scss'
    ], 'client');
});

Package.onTest(function(api) {
    api.use('reywood:font-awesome-sass');
    api.use([
        'fourseven:scss@3.4.0',
        'jquery',
        'tinytest',
        'test-helpers'
    ]);

    api.addFiles([
        'tests.scss',
        'tests.js'
    ], 'client');
});
