({
    onInit : function(component, event, helper) {
        component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function(){
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");

                if(error || (rec === null)){
                    console.log("Error initializing record template: " + error);
                }else{
                    var boat = component.get("v.boat");
                    rec.Boat__c = boat.Id;
                    component.set("v.boatReview", rec);
                }
            })
        );
    }
})