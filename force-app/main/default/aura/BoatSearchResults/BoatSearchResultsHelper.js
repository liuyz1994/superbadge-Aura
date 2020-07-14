({
	onSearch : function(component, event, boatTypeId) {
		var action = component.get("c.getBoats");
		action.setParams({
			boatTypeId : boatTypeId
		});
		action.setCallback(this,function(response){
			var state = response.getState();
			if(state === "SUCCESS"){
				component.set("v.boats", response.getReturnValue());
			}else{
				var errors =  response.getErrors()
				this.showToast(event, "Error!", "error", errors[0].message);
			}
		});
		$A.enqueueAction(action);
	},

	showToast : function(event, title, type, message) {
    	var toastEvent = $A.get("e.force:showToast");
    	toastEvent.setParams({
        	"title": title,
            "type": type,
        	"message": message
    	});
    	toastEvent.fire();
	}

})