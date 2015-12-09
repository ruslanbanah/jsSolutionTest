Template.searchResults.helpers({
  searchResults: function() {
    return Venues.find();
  }
});
Template.searchResults.events({
  'click #csv': function() {
    Exporter2Csv.exportAllVenues();
  },
  'click #clear-results': function() {
    Venues.remove({});
  },
  'click .delete-venues': function() {
    Venues.remove(this._id);
  }
});