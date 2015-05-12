App.MovieSerializer = DS.RESTSerializer.extend({
  extractMeta: function(store, type, payload) {
    var metaAttribs = ['id', 'page', 'total_pages', 'total_results'],
      metaData = {};
    if (payload) {
      metaAttribs.forEach(function(metaAttrib) {
        if (payload[metaAttrib]) {
          metaData[metaAttrib] = payload[metaAttrib];
          delete payload[metaAttrib];
        }
      });
      store.setMetadataFor(type, metaData);
    }
  },
  extractArray: function(store, type, payload) {
    payload = {movies: payload.results};
    return this._super(store, type, payload);
  },
  extractSingle: function(store, typeClass, payload, id) {
    payload.id = id;
    payload = {movie: payload};
    return this._super(store, typeClass, payload, id);
  },
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  }
});