/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
		EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus"),
        NativeApp      = brackets.getModule("utils/NativeApp");

    function searchWithGoogle() {
		var thisEditor = EditorManager.getCurrentFullEditor();
		var query = thisEditor._codeMirror.getSelection();
        NativeApp.openURLInDefaultBrowser("https://www.google.com/#q=" + encodeURIComponent(query));
    }
	
    function searchOnStackOverflow() {
		var thisEditor = EditorManager.getCurrentFullEditor();
		var query = thisEditor._codeMirror.getSelection();
        NativeApp.openURLInDefaultBrowser("https://www.stackoverflow.com/search?q=" + encodeURIComponent(query));
    }

    var GOOGLE_SEARCH_COMMAND = "catanghel.searchwithgoogle"; 
    var STACKOVERFLOW_SEARCH_COMMAND = "catanghel.searchonstackoverflow";
	
    CommandManager.register("Search with Google", GOOGLE_SEARCH_COMMAND, searchWithGoogle);
    CommandManager.register("Search on Stackoverflow", STACKOVERFLOW_SEARCH_COMMAND, searchOnStackOverflow);

    var fileMenu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);
    fileMenu.addMenuDivider();
    fileMenu.addMenuItem(GOOGLE_SEARCH_COMMAND, "Ctrl-Alt-G");
	fileMenu.addMenuItem(STACKOVERFLOW_SEARCH_COMMAND, "Ctrl-Alt-W");
	contextMenu.addMenuDivider();
	contextMenu.addMenuItem(GOOGLE_SEARCH_COMMAND, "Ctrl-Alt-G");
	contextMenu.addMenuItem(STACKOVERFLOW_SEARCH_COMMAND, "Ctrl-Alt-W");
});
