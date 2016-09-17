var functionalStack = function() {
  for (var i = 0; i < 5000000; i++) {
    FStack();
  }
};

var functionalQueue = function() {
  for (var i = 0; i < 5000000; i++) {
    FQueue();
  }
};

var funcSharedStack = function() {
  for (var i = 0; i < 5000000; i++) {
    FSStack();
  }
};

var funcSharedQueue = function() {
  for (var i = 0; i < 5000000; i++) {
    FSQueue();
  }
};

var prototypalStack = function() {
  for (var i = 0; i < 5000000; i++) {
    PStack();
  }
};

var prototypalQueue = function() {
  for (var i = 0; i < 5000000; i++) {
    PQueue();
  }
};

var pseudoStack = function() {
  for (var i = 0; i < 5000000; i++) {
    PSStack();
  }
};

var pseudoQueue = function() {
  for (var i = 0; i < 5000000; i++) {
    PSQueue();
  }
};


functionalStack(); //2700ms
functionalQueue(); //2800ms
funcSharedStack(); //700ms
funcSharedQueue(); //700ms
prototypalStack(); //450ms
prototypalQueue(); //450ms
pseudoStack(); //90ms
pseudoQueue(); //80ms