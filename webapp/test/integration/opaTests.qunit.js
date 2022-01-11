/* global QUnit */

QUnit.config.autostart = false;
QUnit.config.testTimeout = 900000;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/orderbrowser/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});