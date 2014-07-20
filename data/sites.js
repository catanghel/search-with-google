/*global define */
define(function (require, exports, module) {
	'use strict';
	var	_sites = {
            google: {
                url: 'https://www.google.com/#q=', 
                title: 'Search with Google',
                command: 'catanghel.searchwithgoogle', 
                shortcut: 'Ctrl-Alt-G', 
                active: true
            },
            stackoverflow: { 
                url: 'https://www.stackoverflow.com/search?q=',
                title: 'Search on Stackoverflow',
                command: 'catanghel.searchwithgoogle.stackoverflow',
                shortcut: 'Ctrl-Alt-W', 
                active: true
            },
            phpnet: {
                url: 'http://php.net/results.php?q=',
                title: 'Search on PHP.net',
                command: 'catanghel.searchwithgoogle.phpnet',
                shortcut: 'Ctrl-Alt-H', 
                active: true
            },
            mdn: {
                url: 'https://developer.mozilla.org/search?q=',
                title: 'Search on MDN',
                command: 'catanghel.searchwithgoogle.mdn',
                shortcut: 'Ctrl-Alt-M',
                active: true
            }
        };
    
    exports.getSites = function () {
        return _sites;
    }
});
