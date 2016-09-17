var FSStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.counter = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

// push
stackMethods.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};
// pop
stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }

  var temp = this.storage[this.counter];
  delete this.storage[this.counter];

  return temp;
};
// size
stackMethods.size = function() {
  return this.counter;
};

