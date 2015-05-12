App.MovieView = Ember.View.extend({
  posterSrc: function() {
    return 'https://image.tmdb.org/t/p/w185/' + this.get('controller.model.posterPath');
  }.property('controller.model.posterPath')
});

