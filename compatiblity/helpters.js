UI.registerHelper('formatDate', function(date) {
  return moment(date).format('D MMM [at] LT');
});
UI.registerHelper('currentRouteIs', function(route) {
  return Router.current().route.getName() === route;
});
UI.registerHelper('isLogged', function(route) {
  return Boolean(Meteor.user());
});