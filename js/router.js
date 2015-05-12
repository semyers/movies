App.Router.map(function() {
  this.resource('movies', {path: '/'}, function() {
    this.resource('movie', {path: '/:movie_id'});
  });
});

App.ApplicationRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var controller = this.controllerFor('application');
    if (!controller.get('config')) {
      transition.abort();
      this.loadConfigData().then(function () {
        transition.retry();
      });
    }
  },
  loadConfigData: function () {
    var controller = this.controllerFor('application'),
      url = 'http://api.themoviedb.org/3/configuration?api_key=51b2550f677015fea635590d341a4cad';
    return ic.ajax.apply(null, [url]).then(function(config) {
      controller.set('config', config);
    });
  }
});

App.MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('movie');
  },
  afterModel: function(movies, transition) {
    if (movies.get('length') > 0) {
      this.transitionTo('movie', movies.get('firstObject'));
    }
  }
});

App.MovieRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.fetchById('movie', params.movie_id);
  }
});