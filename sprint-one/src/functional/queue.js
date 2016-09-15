var Queue = function() {
  var someInstance = {};

  someInstance.counter = 0;
  someInstance.frontStack = 0;
  someInstance.backStack = 0;
  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.backStack] = value;
    someInstance.counter++;
    someInstance.backStack++;
  };

  someInstance.dequeue = function() {
    if (someInstance.counter > 0) {
      someInstance.counter--;
    }
    var temp = someInstance.storage[someInstance.frontStack];
    delete(someInstance.storage[someInstance.frontStack]);
    someInstance.frontStack++;
    return temp;

  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};
