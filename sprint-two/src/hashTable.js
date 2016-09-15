

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var value = {};
    value[k] = v;
    this._storage.set(index, value);
  } else {
    this._storage.get(index)[k] = v;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  return result[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  delete result[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


