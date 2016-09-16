var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = null;
};

setPrototype.contains = function(item) {
  return this.hasOwnProperty(item) ? true : false;
};

setPrototype.remove = function(item) {
  delete this[item];
};

setPrototype.size = function(item) {
  var counter = -1; //to compensate for _.storage property
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      counter++;  
    }
    
  }
  return counter;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
