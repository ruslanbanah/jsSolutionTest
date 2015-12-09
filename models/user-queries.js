UserQuery = new Mongo.Collection('userQuery');

UserQuery.attachSchema(
  new SimpleSchema({
    ownerId: {
      type: String
    },
    query: {
      type: String
    },
    lat: {
      type: String
    },
    lng: {
      type: String
    },
    radius: {
      type: String
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

UserQuery.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return true;
  }
});
