var array = [];

var functionalStack = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(FStack());
  }
};

var functionalQueue = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(FQueue());
  }
};

var funcSharedStack = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(FSStack());
  }
};

var funcSharedQueue = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(FSQueue());
  }
};

var prototypalStack = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(PStack());
  }
};

var prototypalQueue = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(PQueue());
  }
};

var pseudoStack = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(PSStack());
  }
};

var pseudoQueue = function() {
  for (var i = 0; i < 5000; i++) {
    array.push(PSQueue());
  }
};


  // functionalStack(); //2700ms
  // functionalQueue(); //2800ms
  // funcSharedStack(); //700ms
  // funcSharedQueue(); //700ms
  // prototypalStack(); //450ms
  // prototypalQueue(); //450ms
  // pseudoStack(); //90ms
  // pseudoQueue(); //80ms

