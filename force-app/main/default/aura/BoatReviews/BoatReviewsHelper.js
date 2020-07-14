({
    onInit: function (component, event) {
        var action = component.get("c.getAll");
        action.setParams({
            boatId: component.get("v.boat").Id
        });

        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set("v.boatReviews", response.getReturnValue());
            } else {
                var errors = response.getErrors();
                this.toastEvent("Error", "error", errors[0].message);
            }
        });

        $A.enqueueAction(action);
    },

    toastEvent: function (title, message, type) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": title,
            "type" : type,
            "message": message
        });
        toastEvent.fire();
    }
})