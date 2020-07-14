({
	doInit : function(component, event, helper) {
		helper.onSearch(component, event, '');
	},

	doSearch : function(component,event, helper){
		var params = event.getParam('arguments');
		if(params){
			var boatTypeId = params.boatTypeId;
			if(boatTypeId === '' || boatTypeId === 'All Type'){
				boatTypeId = ''
			}
			helper.onSearch(component, event, boatTypeId);
		}
	},

	onBoatSelect : function(component, event, helper){
		var boatId = event.getParam("boatId");
		component.set("v.selectedBoatId", boatId);
	}
})