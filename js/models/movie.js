App.Movie = DS.Model.extend({
  title: DS.attr('string'),
  homepage: DS.attr('string'),
  overview: DS.attr('string'),
  releaseDate: DS.attr('date'),
  productionCompanies: DS.attr('string'),
  tagline: DS.attr('string'),
  posterPath: DS.attr('string'),
  backdropPath: DS.attr('string')
});