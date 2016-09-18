var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  newTree.children = [];
  newTree.parent = null; 
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
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.findNode = function(value, node) {
  node = node || this;
  var result = undefined;

  for (var i = 0; i < node.children.length; i++) {
    if (node.children[i].value === value) {
      return node.children[i];
    } else {
      result = node.findNode(value, node.children[i]);
    }
  }

  return result;
};

treeMethods.traverse = function(cb, node) {
  node = node || this;

  cb(node.value);

  for (var i = 0; i < node.children.length; i++) {
    node.traverse(cb, node.children[i]);
  }
};

treeMethods.removeParent = function(value) {
  var targetNode = this.findNode(value);
  var targetParent = targetNode.parent;
  var parentValue = targetParent.value;

  if (targetParent.parent === null) {
    return ('Error: cannot remove head of tree');
  } else {
    var grandParent = targetParent.parent;
    for (var i = 0; i < grandParent.children.length; i++) {
      if (grandParent.children[i].value === parentValue) {
        grandParent.children.splice(i, 1);
      }
    }
  }
  
  targetParent.parent = null;
};

treeMethods.removeNode = function(value) {
  var targetNode = this.findNode(value);
  var targetParent = targetNode.parent;
  for (var i = 0; i < targetParent.children.length; i++) {
    if (targetParent.children[i].value === value) {
      targetParent.children.splice(i, 1);
    }
  }
  targetNode.parent = null;

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
