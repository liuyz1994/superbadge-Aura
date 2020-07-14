({
    onBoatClick : function(component, event, helper) {
        var boatSelectEvent = component.getEvent("boatSelect");

        boatSelectEvent.setParams({
            "boatId" : component.get("v.boat").Id
        });
        boatSelectEvent.fire();

        var boatSelectedEvent = $A.get("e.c:BoatSelected");

        boatSelectedEvent.setParams({
            "boat" : component.get("v.boat")
        });
        boatSelectedEvent.fire();

        var boat = component.get("v.boat");
        console.log('lat', boat.Geolocation__Latitude__s);
        var mapEvt = $A.get("e.c:PlotMapMarker");
        mapEvt.setParams({
            "lat" : boat.Geolocation__Latitude__s,
            "long" : boat.Geolocation__Longitude__s,
            "lable" : boat.Name,
            "sObjectId" : boat.Id
        });
        mapEvt.fire();
    }
})