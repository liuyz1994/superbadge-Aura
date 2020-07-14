({
    doInit : function(component, event, helper) {
        helper.onInit(component, event);
    },
    onUserInfoClick : function(component, event, helper){
        var userId = event.currentTarget.getAttribute("data-userid");

        var urlEvt = $A.get("e.force:navigateToSObject");
        urlEvt.setParams({
            "recordId": userId
        });
        urlEvt.fire();
    }
})