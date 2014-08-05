/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

define(function (require, exports, module) {
    'use strict';

    var CommandManager = brackets.getModule('command/CommandManager'),
		EditorManager  = brackets.getModule('editor/EditorManager'),
        Menus          = brackets.getModule('command/Menus'),
        NativeApp      = brackets.getModule('utils/NativeApp'),
		Prompt		   = require('./util/Prompt');

    
    function SearchWithGoogle () {
        this.sites = require('./data/sites').getSites();
		this.fileMenu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
		this.contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);
    }
	
    
	SearchWithGoogle.prototype.searchOn = function (site) {
		var thisEditor = EditorManager.getCurrentFullEditor(),
			query = thisEditor.getSelectedText(),
			search = function (value) {
				NativeApp.openURLInDefaultBrowser(site.url + value);
			};
		if (query) {
			search(query);
		} else {
			Prompt.showPromptDialog('Brackets says:', 'What are you searching for?', search, this);
		}
	}
	
	SearchWithGoogle.prototype.registerMenuItems = function () {
		var prop, site;
		for (prop in this.sites) {
			site = this.sites[prop];
			if (site.active) {
				CommandManager.register(site.title, site.command, $.proxy(this.searchOn, this, site));
				this.fileMenu.addMenuItem(site.command, site.shortcut);
				this.contextMenu.addMenuItem(site.command, site.shortcut);
			}
		}
	}
    
    var searchWithGoogle = new SearchWithGoogle();

    searchWithGoogle.fileMenu.addMenuDivider();
	searchWithGoogle.contextMenu.addMenuDivider();
	searchWithGoogle.registerMenuItems();
});
