App.Router.map(function() {
  this.resource('movies', {path: '/'}, function() {
    this.resource('movie', {path: '/:movie_id'});
  });
});

App.MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('movie');
  }
});