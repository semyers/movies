App.MovieView = Ember.View.extend({
  posterSrc: function() {
    return 'https://image.tmdb.org/t/p/w185/' + this.get('controller.model.posterPath');
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
  }.property('controller.model', 'controller.controllers.movies.model')
});

