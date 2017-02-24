/*
 * Cartalyst Quickstart
 * Copyright 2015 Cartalyst LLC. All Rights Reserved.
 *
 * Provides helpers for various sections of the application.
 *
 */

var Quickstart;

;(function (window, document, $, undefined) {
    'use strict';

    Quickstart = Quickstart || {
        App: {},
        Cache: {},
    };

    // Cache common selectors
    Quickstart.Cache.$win  = $(window);
    Quickstart.Cache.$body = $(document.body);

    // Initialize functions
    Quickstart.App.init = function () {
        Quickstart.App
            .foundation()
            .listeners()
            //.wrapCodeBlocks()
            //.initHighlightJs()
            //.initClipboard()
            //.addClasses()
        ;
    };

    // Add Listeners
	Quickstart.App.listeners = function()
	{
        Quickstart.Cache.$body
			//.on('mouseover', '.js-quickstart-preview:not(code .js-quickstart-preview)', Quickstart.App.previewAttributes)
		;

		return this;
	};

    // Initialize Foundation 6
    Quickstart.App.foundation = function ()
    {
        Quickstart.Cache.$body.foundation();

        return this;
    }


    // Job done, lets run
    Quickstart.App.init();
})(window, document, jQuery);
