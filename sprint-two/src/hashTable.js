

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);

  if (result === undefined) {
    var value = [];
    value[0] = [k, v];
    this._storage.set(index, value);
  } else {
    var push = true;
    for (var i = 0; i < result.length; i++) {
      if (result[i][0] === k) {
        result[i][1] = v;
        push = false;
      } 
    }
    if (push) {
      result.push([k, v]);    
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  for (var i = 0; i < result.length; i++) {
    if (result[i][0] === k) {
      return result[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  for (var i = 0; i < result.length; i++) {
    if (result[i][0] === k) {
      result.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


