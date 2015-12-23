'use strict';

var APP = window.APP = window.APP || {};

APP.styleguide = (function () {

    var bindEventsToUI = function () {
        $('body').on('click', '.reference-nav__item a', function() {
            var destination = $(this).attr('href');
            $('.reference-section').not( $(destination) ).slideUp();
            $(destination).delay(300).fadeIn();
        });
    };

    var init = function (element) {
        console.log('APP.styleguide');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
