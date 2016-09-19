var FStack = function() {
  var someInstance = {};

  someInstance.counter = 0;
  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.counter] = value;
    someInstance.counter++;
  };

  someInstance.pop = function() {
    if (someInstance.counter > 0) {
      someInstance.counter--;
    }

    var temp = someInstance.storage[someInstance.counter];
    delete someInstance.storage[someInstance.counter];

    return temp;
  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};
