

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.reindex = function(limit) {
  //for the current hash table, go through each index and iterate through the bucket
  var temp = this._storage;
  var oldLimit = this._limit;
  this._limit = limit;
  this._count = 0;
  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < oldLimit; i++) {
    var bucket = temp.get(i);


    if (bucket !== undefined) {
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        this.insert(tuple[0], tuple[1]); 
      }
    }
  }
  //use insert function for each tuple to reindex the entire hash table
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(index);
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

  this._count++;
  if (this._count > 0.75 * this._limit) {
    this.reindex(this._limit * 2);
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

  this._count--;
  if (this._limit > 8 && this._count < 0.25 * this._limit) {
    this.reindex(this._limit / 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


