var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  item = JSON.stringify(item);
  this._storage[item] = true;  

};

setPrototype.contains = function(item) {
  item = JSON.stringify(item);
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  item = JSON.stringify(item);
  delete this._storage[item];
};

setPrototype.size = function(item) {
  var counter = 0;
  for (key in this._storage) {
    counter++;
  }
  return counter;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
