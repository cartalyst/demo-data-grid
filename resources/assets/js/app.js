/*
 * Cartalyst Demo
 * Copyright 2017 Cartalyst LLC. All Rights Reserved.
 *
 * Provides helpers for various sections of the application.
 *
 */

var Demo;

;(function (window, document, $, undefined) {
    'use strict';

    Demo = Demo || {
        App: {},
        Cache: {},
    };

    // Cache common selectors
    Demo.Cache.$win  = $(window);
    Demo.Cache.$body = $(document.body);

    // Initialize functions
    Demo.App.init = function () {
        Demo.App
            .foundation()
            .listeners()
            .wrapCodeBlocks()
            .initHighlightJs()
            .initClipboard()
            .addClasses()
            .createTutorial()
        ;
    };

    // Add Listeners
	Demo.App.listeners = function()
	{
        Demo.Cache.$body
			.on('mouseover', '.js-demo-preview:not(code .js-demo-preview)', Demo.App.previewAttributes)
            .on('mouseenter', 'option.js-demo-preview:not(code .js-demo-preview)', Demo.App.previewAttributes)
        ;

		return this;
	};

    // Initialize Foundation 6
    Demo.App.foundation = function ()
    {
        Demo.Cache.$body.foundation();

        return this;
    }

    // Show preview of data-grid attributes from element on hover.
    Demo.App.previewAttributes = function (event) {

        var target = $(event.target);
        var tag = target.closest('.js-demo-preview').prop('tagName').toLowerCase();
        var attributes = target.closest('.js-demo-preview').data();

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

    // Create code blocks generated from markdown.
    Demo.App.wrapCodeBlocks = function () {
        $('.article--tutorial h5').each(function () {
            $(this)
                .addClass('source_code__header')
                .next('p')
                .addClass('source_code__block')
                .wrapInner('<pre></pre>')
            ;

            $(this).next().addBack().wrapAll('<div class="source_code"></div>');
        });

        // Add Actions
        $('.source_code').each(function () {
            var el = $(this);
            var slug = Demo.App.slugify(el.children('.source_code__header').html());

            $(this).append('<nav class="source_code__actions"></nav>');

            // Add the copy to clipboard button
            el
                .find('.source_code__actions')
                .append('<button class="small button" data-copy-text data-clipboard-target="#'+slug+'"><i class="material-icons">content_cut</i></button>')
            ;

            el.find('.source_code__block > pre > code').attr('id', slug);
        });

        return this;
    };

    // Syntax highlighting for code blocks.
    Demo.App.initHighlightJs = function () {

        hljs.initHighlightingOnLoad();

        return this;
    };

    // Readability for examples, add framework, app specific classes here.
    Demo.App.addClasses = function () {
        if ($('[data-example]').length) {

            // What example is being displayed
            var type = $('[data-example]').data('example');

            switch(type) {
                case 'crops':

                    // Filters
                    $('[data-grid-filter]').addClass('js-demo-preview');
                    $('[data-grid-sort]').addClass('js-demo-preview');

                    // Layouts
                    $('[data-grid-switch-layout]').addClass('js-demo-preview');

                    // Search Form
                    $('.search form > div').addClass('mdl-textfield mdl-js-textfield');
                    $('.search form > div input').addClass('mdl-textfield__input');
                    $('.search form > div label').addClass('mdl-textfield__label');

                    // Table
                    $('th').addClass('js-demo-preview');

                    // Applied filters
                    $('[data-grid-layout="filters"]').on('dg:layout_rendered', function() {
                        $(this).find('button').addClass('js-demo-preview');
                    });

                    // Pagination
                    $('[data-grid-layout="pagination"]').on('dg:layout_rendered', function() {
                        $(this).find('button').addClass('js-demo-preview');
                    });

                    break;
                case 'apricots':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-demo-preview');

                    break;
                case 'apples':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-demo-preview');

                    break;
                case 'oranges':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-demo-preview');

                    break;
                default:
                    // Default
                ;
            }
        };

        return this;
    };

    // Initializes the Clipboard.js
    Demo.App.initClipboard = function () {
        var clipboard = new Clipboard('[data-copy-text]');

        clipboard.on('success', function (e) {
            e.clearSelection();

            // Show success notice
            $('.source_code__actions').prepend('<span class="action__message">Copied!</span>')

            $('.action__message').fadeOut(2500, function () {
                $(this).remove();
            });
        });

        clipboard.on('error', function (e) {
            // Show fallback tooltip
            $('.source_code__actions').prepend('<span class="action__message">'+Demo.App.fallbackMessage()+'</span>')

            $('.action__message').fadeOut(4500, function () {
                $(this).remove();
            });
        });

        return this;
    };

    // Slugifies the given string
    Demo.App.slugify = function (str) {
        if (str === undefined) return;

        return str
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .toLowerCase()
            .replace(/\s/g,'-')
        ;
    };

    Demo.App.fallbackMessage = function () {
        var message = '';

        if(/iPhone|iPad/i.test(navigator.userAgent)) {
            message = 'No support :(';
        }
        else if (/Mac/i.test(navigator.userAgent)) {
            message = 'Press ⌘-C to copy';
        }
        else {
            message = 'Press Ctrl-C to copy';
        }

        return message;
    };

    Demo.App.createTutorial = function () {
        $("article h3").each(function() {
            var slug = Demo.App.slugify($(this).text());
            $(this).attr('id',slug);
          }
        );
    }

    // Job done, lets run
    Demo.App.init();

})(window, document, jQuery);
