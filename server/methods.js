Meteor.methods({
  addQuery: function(query) {
    query.ownerId = Accounts.userId();
    query.createdAt = new Date;
    UserQuery.insert(query);
  },
  removeQuery: function(queryId) {
    UserQuery.remove(queryId);
  }
});