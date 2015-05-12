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

App.MovieRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.fetchById('movie', params.movie_id);
  }
});