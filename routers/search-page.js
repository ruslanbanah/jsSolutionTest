Router.route('/', {
  name: 'searchPage',
  template: 'searchPage',
  onBeforeAction: function() {
    if (Meteor.user()) {
      this.next();
    } else {
      this.redirect('/about');
    }
  }
});