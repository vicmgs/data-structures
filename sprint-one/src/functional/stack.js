var Stack = function() {
  var someInstance = {};

  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      counter--;
    }

    var temp = storage[counter];
    console.log('temp: ' + temp);
    delete storage[counter];
    console.log(storage);

    return temp;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
