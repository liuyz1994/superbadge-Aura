({
	onFormSubmit : function(component, event, helper) {
		var boatTypeId = event.getParam("formData").boatTypeId;

		var boatSearchReultCmp = component.find("boatsearch");

		var searchResult = boatSearchReultCmp.search(boatTypeId);
	}
})