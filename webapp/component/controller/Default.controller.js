sap.ui.define([
	"sap/suite/ui/generic/template/extensionAPI/extensionAPI"
], function(extensionAPI) {
	"use strict";

	return sap.ui.controller("BlogTest.component.controller.Default", {
		onInit: function() {
			var oGraph = this.getView().byId("networkGraph");
			oGraph.attachBeforeLayouting(function () {
				this.bGraphReady = false;
			}.bind(this));
			this.getView().byId("networkGraph").attachGraphReady(function () {
				this.bGraphReady = true;
				this.selectNode();
			}.bind(this));
		},
		selectNode: function () {
			var oComponent = this.getOwnerComponent();
			var oComponentModel = oComponent.getComponentModel();
			var sSelectedNode = oComponentModel.getProperty("/selectedNode");
			var oGraph = this.getView().byId("networkGraph");
			var oNode = oGraph.getNodeByKey(sSelectedNode);
			if (oNode) {
				oGraph.getNodes().forEach(function (oN) {
					oN.setSelected(false);
				});
				oNode.setSelected(true);
				oGraph.scrollToElement(oNode);
			}
		},
		updateSelection: function () {
			if (this.bGraphReady) {
				this.selectNode();
			}
		}
	});
});