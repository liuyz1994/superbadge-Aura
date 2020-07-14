({
    doInit: function (component, event, helper) {
        helper.onInit(component, event, helper);
    },

    onSave: function (component, event, helper) {
        component.find("service").saveRecord(function (saveResult) {
            console.log('saveResult', saveResult);
            console.log('saveResult.state', saveResult.state);
            if (saveResult.state === 'SUCCESS') {
                var toastEvent = $A.get("e.force:showToast");
                if (toastEvent) {
                    toastEvent.setParams({
                        "title": "Saved",
                        "message": "The record has been saved"
                    });
                    toastEvent.fire();
                } else {
                    var errMsg = '';
                    console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                    for (var i = 0; i < saveResult.error.length; i++) {
                        errMsg += saveResult.error[i].message + "\n";
                    }
                    component.set("v.recordError", errMsg);
                    alert("failed saving records");
                }

                var boatReviewAddedEvent = component.getEvent("boatReviewAdded");
                boatReviewAddedEvent.fire();
            } else {
                var errMsg = "";
                // saveResult.error is an array of errors, 
                // so collect all errors into one message
                for (var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[0].message + "\n";
                }
                alert(errMsg);
            }
            helper.onInit(component, event, helper);
        });

    },

    onRecordUpdated: function (component, event, helper) {
        var eventParams = event.getParams();
        console.log('eventParams.changeType', eventParams.changeType);
        if (eventParams.changeType === "CHANGED") {
            var changedFields = eventParams.changedFields;
            var toastEvent = $A.get("e.force:showToast");
            if (toastEvent) {
                toastEvent.setParams({
                    "title": "Saved",
                    "message": "The record has been saved"
                });
                toastEvent.fire();
            } else {
                alert("failed saving records");
            }
        } else if (eventParams.changeType === "LOADED") {
            var toastEvent = $A.get("e.force:showToast");
            if (toastEvent) {
                toastEvent.setParams({
                    "title": "LOADED",
                    "message": "The record has been loaded"
                });
                toastEvent.fire();
            } else {
                alert("failed saving records");
            }
        } else {
            alert("failed updating records");
        }
    }
})