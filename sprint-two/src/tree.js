var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {

  var contain = false;
  var run = function(target, node) {

    if (node.value === target) {
      contain = true;
    } else {
      for ( var i = 0; i < node.children.length; i++) {
        run(target, node.children[i]);
      }  
    }

  };

  run(target, this);
  return contain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
