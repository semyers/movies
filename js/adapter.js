App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://api.themoviedb.org/',
  namespace: '3/',
  find: function(store, type, id, record) {
    var url = this.host + this.namespace + 'movie/' + id;
    url = this.addApiKey(url);
    return this.ajax(url, 'GET');
  },
  findAll: function(store, type) {
    var url = this.host + this.namespace + 'company/3-pixar-animation-studios/movies';
    url = this.addApiKey(url);
    url = url + '&page=2';
    return this.ajax(url, 'GET');
  },
  addApiKey: function(url) {
    return url + '?api_key=51b2550f677015fea635590d341a4cad';
  }
});