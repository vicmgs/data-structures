var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.storage = {};
  newQueue.counter = 0;
  newQueue.frontTrack = 0;
  newQueue.backTrack = 0;

  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.counter++;
  this.storage[this.backTrack] = val;
  this.backTrack++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var temp = this.storage[this.frontTrack];
  delete(this.storage[this.frontTrack]);
  this.frontTrack++;

  return temp;
  
};

queueMethods.size = function() {
  return this.counter;
};




