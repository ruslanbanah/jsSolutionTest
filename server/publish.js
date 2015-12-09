Meteor.publish('userQuery', function() {
  return UserQuery.find({ownerId: this.userId});
});