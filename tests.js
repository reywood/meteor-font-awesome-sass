Tinytest.add('font-awesome-sass - SCSS variables should be available', function(test) {
    var $div = $('<div class="test-font-size-var"></div>');
    $('body').append($div);

    test.equal(getStyleProperty($div[0], 'font-size'), '14px');

    $div.remove();
});

Tinytest.add('font-awesome-sass - SCSS class should be extendable', function(test) {
    var $div = $('<div class="test-extend-fa"></div>');
    $('body').append($div);

    test.equal(getStyleProperty($div[0], 'display'), 'inline-block');
    test.equal(getStyleProperty($div[0], 'font-family'), 'FontAwesome');

    $div.remove();
});
