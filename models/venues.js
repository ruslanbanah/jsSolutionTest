Venues = new Mongo.Collection(null);

Venues.attachSchema(
  new SimpleSchema({
    query: {
      type: String
    },
    lat: {
      type: String
    },
    lng: {
      type: String
    },
    name: {
      type: String
    },
    city: {
      type: String
    },
    address: {
      type: String
    }
  })
);

Venues.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});
