Package.describe({
    summary: "Font Awesome stylesheets in SCSS format"
});

Package.on_use(function (api) {
    api.use(["scss"]);

    api.add_files([
        "assets/fonts/fontawesome-webfont.eot",
        "assets/fonts/fontawesome-webfont.svg",
        "assets/fonts/fontawesome-webfont.ttf",
        "assets/fonts/fontawesome-webfont.woff",
        "assets/fonts/FontAwesome.otf"
    ], "client");
});
