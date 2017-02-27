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
            .initHighlightJs()
            .addClasses()
            //.wrapCodeBlocks()
            //.initClipboard()

        ;
    };

    // Add Listeners
	Quickstart.App.listeners = function()
	{
        Quickstart.Cache.$body
			.on('mouseover', '.js-quickstart-preview:not(code .js-quickstart-preview)', Quickstart.App.previewAttributes)
		;

		return this;
	};

    // Initialize Foundation 6
    Quickstart.App.foundation = function ()
    {
        Quickstart.Cache.$body.foundation();

        return this;
    }

    // Syntax highlighting for code blocks.
    Quickstart.App.initHighlightJs = function () {

        hljs.initHighlightingOnLoad();

        return this;
    };

    // Show preview of data-grid attributes from element on hover.
    Quickstart.App.previewAttributes = function (event) {

        var target = $(event.target);
        var tag = target.closest('.js-quickstart-preview').prop('tagName').toLowerCase();
        var attributes = target.closest('.js-quickstart-preview').data();

        // find all data-grid attributes
        var filteredAttributes = _.forEach(attributes, function(val, key) {
            if (key.substr(0, 4) === 'grid') {
                return {key: val};
            }
        });

        var newAttributes = [];

        _.each(filteredAttributes, function(val, key) {
            key = 'data-' + _.snakeCase(key).replace(/_/g, '-');

            newAttributes.push(key + '="' + val + '"');
        });

        // create new element from target and newAttributes
        var element = '<' + tag + ' ' + newAttributes.join(' ') + '></' + tag + '>';

        //update preview area with code example.
        $('.preview > div').fadeIn();
        $('.preview pre code').text(element);

        return this;
    };

    // Readability for examples, add framework, app specific classes here.
    Quickstart.App.addClasses = function () {
        if ($('[data-example]').length) {

            // What example is being displayed
            var type = $('[data-example]').data('example');

            switch(type) {
                case 'table':

                    // Filters
                    // $('.filters > button').addClass('mdl-button mdl-js-button mdl-button--icon');
                    // $('.filters > ul').addClass('mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect');
                    // $('.filters > ul li').addClass('mdl-menu__item js-quickstart-preview');

                    // Layouts
                    //$('[data-grid-switch-layout]').addClass('mdl-button mdl-js-button mdl-button--icon js-quickstart-preview');

                    // Search Form
                    // $('.search form > div').addClass('mdl-textfield mdl-js-textfield');
                    // $('.search form > div input').addClass('mdl-textfield__input');
                    // $('.search form > div label').addClass('mdl-textfield__label');

                    // Table
                    //$('table').addClass('mdl-data-table');
                    $('th').addClass('js-quickstart-preview');

                    // Applied filters
                    // $('[data-grid-layout="filters"]').on('dg:layout_rendered', function() {
                    //     $(this).find('button').addClass('mdl-button mdl-js-button mdl-js-ripple-effect js-quickstart-preview');
                    // });

                    // Pagination
                    $('[data-grid-layout="pagination"]').on('dg:layout_rendered', function() {
                        $(this).find('button').addClass('js-quickstart-preview');
                    });

                    break;
                case 'list':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-quickstart-preview');

                    break;
                default:
                    // Default
                ;
            }
        };

        return this;
    };

    // Job done, lets run
    Quickstart.App.init();
})(window, document, jQuery);
