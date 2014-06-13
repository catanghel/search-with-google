/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Search with Google" menu item */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
		EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    function searchWithGoogle() {
		var thisEditor = EditorManager.getCurrentFullEditor();
		var query = thisEditor._codeMirror.getSelection();
        window.open("https://www.google.com/#q=" + encodeURIComponent(query));
    }

    var MY_COMMAND_ID = "catanghel.searchwithgoogle"; 
    CommandManager.register("Search with Google", MY_COMMAND_ID, searchWithGoogle);

    var fileMenu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
	var contextMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU);
	fileMenu.addMenuDivider();
    fileMenu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-G");
	contextMenu.addMenuDivider();
	contextMenu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-G");
});