sap.ui.define([
	"sap/suite/ui/generic/template/extensionAPI/extensionAPI"
], function(extensionAPI) {
	"use strict";

	return sap.ui.controller("BlogTest.ext.controller.ListReportExt", {
		onInit: function () {
		},
		onListNavigationExtension: function(oEvent) {
			var oExtensionAPI = this.extensionAPI;
			var oNavigationController = oExtensionAPI.getNavigationController();
			var oItem = oEvent.getSource();
			var oBindingContext = oItem.getBindingContext();
			var oObject = oBindingContext.getObject();
			oNavigationController.navigateInternal(oObject.Id, {
				routeName: "NODES"
			});
			return true;
		}
	});

});
