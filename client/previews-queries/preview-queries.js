Template.previewQueries.onRendered(function() {
  Meteor.subscribe('userQuery');
});
Template.previewQueries.helpers({
  queriesList: function() {
    return UserQuery.find();
  }
});
Template.previewQueries.events({
  'click .delete-query': function(e) {
    e.stopPropagation();
    Meteor.call('removeQuery', this._id);
  },
  'click .select-query': function() {
    $('#queryString').val(this.query);
  }
});