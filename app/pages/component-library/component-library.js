'use strict';

var APP = window.APP = window.APP || {};

APP.componentLibrary = (function () {

    var bindEventsToUI = function () {

    };

    var init = function (element) {
        console.log('APP.componentLibrary');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
