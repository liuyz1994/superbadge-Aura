({
	doInit: function (component, event, helper) {
		component.set("v.showButton", !!$A.get("e.force:navigateToSObject"));
	},

	onFullDetails: function (component, event, helper) {
		var id = component.get("v.boat").Id;
		var urlEvent = $A.get("e.force:navigateToSObject");;
		console.log('urlEvent', urlEvent);
		urlEvent.setParams({
			"recordId": id,
			"slideDevName": "detail"
		});
		urlEvent.fire();

	}
})