App.Router.map(function() {
  this.resource('movies', { path: '/' });
});

App.MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('movie');
  }
});