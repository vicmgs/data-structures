var PQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.counter = 0;
  newQueue.frontTrack = 0;
  newQueue.endTrack = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.endTrack] = val;
  this.counter++;
  this.endTrack++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }

  var temp = this.storage[this.frontTrack];
  delete this.storage[this.frontTrack];
  this.frontTrack++;

  return temp;
};

queueMethods.size = function() {
  return this.counter;
};
