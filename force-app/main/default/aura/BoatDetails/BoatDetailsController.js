({
	onBoatSelected : function(component, event, helper) {
		var boat = event.getParam("boat");
		component.set("v.id", boat.Id);
		component.find("service").reloadRecord(); 
		//load record
	},
	onRecordUpdated : function(component, event, helper) {
		var review = component.find("seeReviews");
		if(review){
			review.refresh();
		}
	},
	onBoatReviewAdded: function (component, event, helper){
		component.find("tabs").set("v.selectedTabId", "boatreviewtab");
		var review = component.find("seeReviews");
		if(review){
			review.refresh();
		}
	}
})