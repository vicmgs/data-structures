var Queue = function() {
  var someInstance = {};

  var counter = 0;
  var frontStack = 0;
  var backStack = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[backStack] = value;
    counter++;
    backStack++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter--;
    }
    var temp = storage[frontStack];
    delete(storage[frontStack]);
    frontStack++;
    return temp;

  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
