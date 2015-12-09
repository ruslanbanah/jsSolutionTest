Template.searchBox.events({
  'submit #searchForm': function(e) {
    e.preventDefault();
    var queryString = $('#queryString').val();
    var params = {
      ll: [Session.get('centerLat'), Session.get('centerLng')].join(),
      query: queryString,
      radius: Session.get('radius')
    };
    Foursquare.find(params, function(err, data) {
      data.response.venues.forEach(function(venues) {
        var markerData = {
          lat: venues.location.lat,
          lng: venues.location.lng,
          name: venues.name,
          query: params.query,
          address: venues.location.formattedAddress.join(),
          city: venues.location.city ? venues.location.city : venues.location.country
        };
        Venues.insert(markerData);
      });

      Meteor.call('addQuery', {
        query: queryString,
        lat: Session.get('centerLat'),
        lng: Session.get('centerLng'),
        radius: Session.get('radius')
      })
    });
  }
});