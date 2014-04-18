meteor-font-awesome-sass
========================

Font Awesome stylesheets in SCSS format packaged for Meteor

To install
----------

In addition to the font-awesome-sass package, you must explicitly install the scss package. Meteor will not compile your `*.scss` files otherwise.

```sh
$ mrt add font-awesome-sass
$ mrt add scss
```

To use
------

To activate Font Awesome styles on your site, add the following line to the top of your main scss file:

```scss
@import 'packages/font-awesome-sass/font-awesome';
```

--------------------------------------------------------

If you find a bug or would like to see an improvement made, please [file an issue on GitHub](https://github.com/reywood/meteor-font-awesome-sass/issues).
