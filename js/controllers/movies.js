App.MoviesController = Ember.ArrayController.extend({
  filter: '',
  filteredMovies: function() {
    return this.get('model').filter(function(movie) {
      return movie.get('title').toLowerCase().indexOf(this.get('filter').toLowerCase()) > -1;
    }, this);
  }.property('filter')
});