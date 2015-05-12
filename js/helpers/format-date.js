Ember.Handlebars.registerBoundHelper('formatDate', function(date) {
  return moment(date).format('MMMM D, YYYY');
});