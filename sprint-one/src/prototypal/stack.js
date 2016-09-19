var PStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.counter = 0;
  newStack.storage = {};


  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var temp = this.storage[this.counter];
  delete this.storage[this.counter];

  return temp;

};

stackMethods.size = function() {
  return this.counter;
};
