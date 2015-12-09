Template.map.onRendered(function() {
  Session.set('centerLat', COORDINATE.lat);
  Session.set('centerLng', COORDINATE.lng);
  Session.set('radius', 5000);

  GoogleMaps.load();
  GoogleMaps.ready('searchMap', function(map) {
    var markers = {};
    //map.instance.center =  new google.maps.LatLng(Session.get('centerLat'), Session.get('centerLng'))
    google.maps.event.addListener(map.instance, 'center_changed', function(event) {
      var bounds = map.instance.getBounds();
      var center = bounds.getCenter();
      var sw = bounds.getSouthWest();
      Session.set('centerLat', map.instance.center.lat());
      Session.set('centerLng', map.instance.center.lng());
      Session.set('radius', DistanceTo.getDistance(sw, center));
    });

    Venues.find().observe({
      added: function(document) {
        var marker = new google.maps.Marker({
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.lng),
          title: document.name,
          map: map.instance,
          id: document._id
        });
        markers[document._id] = marker;
      },
      changed: function(newDocument, oldDocument) {
        markers[newDocument._id].setPosition({lat: newDocument.lat, lng: newDocument.lng});
      },
      removed: function(oldDocument) {
        markers[oldDocument._id].setMap(null);
        google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
        delete markers[oldDocument._id];
      }
    });
  });
});
Template.map.helpers({
  exampleMapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(Session.get('centerLat'), Session.get('centerLng')),
        zoom: 10,
        scrollwheel: false
      };
    }
  }
});
