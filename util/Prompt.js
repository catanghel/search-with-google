/*global define, Mustache */
define(function (require, exports, module) {
	'use strict';
	
	var Dialogs 			 = brackets.getModule('widgets/Dialogs'),
		Strings				 = brackets.getModule('strings'),
		ExtensionUtils 		 = brackets.getModule('utils/ExtensionUtils'),
        PromptDialogTemplate = require('text!templates/swg-prompt.html');
	
	/**
     * Show a prompt dialog
     * @param {string} title The dialog title
     * @param {string} text The dialog text
	 * @param {object} fn The function to execute on OK button click
     * @param {object} scope The function scope
     */
	function showPromptDialog(title, text, fn, scope) {
        var $promptInput,
			value, dialog,
			templateVars = {
				title: title,
				text: text,
				Strings: Strings
			};
		ExtensionUtils.loadStyleSheet(module, '../styles/prompt.css');
		dialog = Dialogs.showModalDialogUsingTemplate(Mustache.render(PromptDialogTemplate, templateVars));
		
		dialog.done(function (id) {
            if (id === Dialogs.DIALOG_BTN_OK) {
				value = $promptInput.val();
				fn.call(scope, value);
            }
        });

        $promptInput = dialog.getElement().find('.text-input');
        $promptInput.focus();
    }
	
	exports.showPromptDialog = showPromptDialog;
});