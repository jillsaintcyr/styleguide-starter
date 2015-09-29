'use strict';

var APP = window.APP = window.APP || {};

APP.styleguide = (function () {

    var bindEventsToUI = function () {

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
