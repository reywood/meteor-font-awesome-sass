Package.describe({
    name: "mrt:font-awesome-sass",
    summary: "Font Awesome stylesheets in SCSS format",
    version: "4.1.0-3",
    git: "https://github.com/reywood/meteor-font-awesome-sass.git"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use(["fourseven:scss@0.9.5"]);

    api.add_files([
        "assets/fonts/fontawesome-webfont.eot",
        "assets/fonts/fontawesome-webfont.svg",
        "assets/fonts/fontawesome-webfont.ttf",
        "assets/fonts/fontawesome-webfont.woff",
        "assets/fonts/FontAwesome.otf"
    ], "client");
});
