Package.describe({
    summary: "Font Awesome stylesheets in SCSS format"
});

Package.on_use(function (api) {
    api.use(["scss"]);

    api.add_files([
        "assets/fonts/x.eot",
        "assets/fonts/x.svg",
        "assets/fonts/x.ttf",
        "assets/fonts/x.woff"
    ], "client");
});

// Package.on_test(function(api) {
//     api.use("font-awesome-sass");
//     api.use(["scss", "tinytest", "test-helpers"]);

//     api.add_files([
//             "tests.scss"
//         ], "client");
// });
