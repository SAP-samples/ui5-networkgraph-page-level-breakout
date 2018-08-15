jQuery.sap.declare("BlogTest.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("BlogTest.Component", {
	metadata: {
		"manifest": "json"
	}
});