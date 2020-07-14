({
    doInit: function(component, event, helper) {
        component.set("v.showNewButton", !!$A.get("e.force:createRecord"));
 
        var action = component.get("c.getAllBoatTypeList");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boatTypes", response.getReturnValue());
            } else {
                console.log("doInit error", response.getError());
            }
        });
        $A.enqueueAction(action);
    },

    createABoat: function(component, event, helper) {
        var selectedType = component.find("filter").get("v.value");

        if (selectedType == "" || selectedType == "All Type") {
            selectedType = null;
        }

        var createANewBoatEvent = $A.get("e.force:createRecord");
        component.set("v.showNewButton", true);
        createANewBoatEvent.setParams({
            entityApiName: "Boat__c",
            defaultFieldValues: {
                BoatType__c: selectedType
            }
        });
        createANewBoatEvent.fire();

    },
    onFormSubmit: function(component,event, helper){
        var selectedTypeId = component.find("filter").get("v.value");
        var formData = {
            "boatTypeId": selectedTypeId
        };

        var formSubmit = component.getEvent("formsubmit");
        formSubmit.setParams({
            "formData" : formData
        });
        formSubmit.fire();
    }
});