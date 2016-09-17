var PSQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.frontTrack = 0;
  this.endTrack = 0;
  this.storage = {};
};

PSQueue.prototype.enqueue = function(val) {
  this.storage[this.endTrack] = val;
  this.counter++;
  this.endTrack++;
};

PSQueue.prototype.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }

  var temp = this.storage[this.frontTrack];
  delete this.storage[this.frontTrack];
  this.frontTrack++;

  return temp;
};

PSQueue.prototype.size = function() {
  return this.counter;
};
