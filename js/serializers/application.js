App.ApplicationSerializer = DS.RESTSerializer.extend({
  //normalizeHash: {
  //  release_date: function(hash) {
  //    hash.releaseDate = hash.release_date;
  //    delete hash.release_date;
  //
  //    return hash;
  //  }
  //},
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
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  }
});