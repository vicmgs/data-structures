var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  newTree.children = []; 
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

treeMethods.removeNode = function(value, node) {
  node = node || this;

  for (var i = 0; i < node.children.length; i++) {
    if (node.children[i].value === value) {
      node.children.splice(i, 1);
    } else {
      node.removeNode(value, node.children[i]); 
    }
  }
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
