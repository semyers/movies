App.MovieView = Ember.View.extend({
  imgBase: Ember.computed.alias('controller.controllers.application.config.images.secure_base_url'),
  posterSrc: function() {
    return this.get('imgBase') + 'w185/' + this.get('controller.model.posterPath');
  }.property('controller.model.posterPath'),
  prevMovie: function() {
    var movie = this.get('controller.model'),
      movies = this.get('controller.controllers.movies.model'),
      movieIndex = movies.indexOf(movie),
      prevMovieIndex = movieIndex - 1;
    if (prevMovieIndex < 0) {
      prevMovieIndex = movies.get('length') - 1;
    }
    return movies.objectAt(prevMovieIndex);
  }.property('controller.model', 'controller.controllers.movies.model'),
  nextMovie: function() {
    var movie = this.get('controller.model'),
      movies = this.get('controller.controllers.movies.model'),
      movieIndex = movies.indexOf(movie),
      nextMovieIndex = movieIndex + 1;
    if (nextMovieIndex >= movies.get('length')) {
      nextMovieIndex = 0;
    }
    return movies.objectAt(nextMovieIndex);
  }.property('controller.model', 'controller.controllers.movies.model'),
  updateBackdrop: function() {
    var backdropSrc = this.get('imgBase') + 'w1280/' + this.get('controller.model.backdropPath');
    $('.detailOuter').css('background-image', 'url(' + backdropSrc + ')');
  }.observes('controller.model.backdropPath'),
  didInsertElement: function() {
    this.updateBackdrop();
  }
});

