var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.depth = 1;
};


BinarySearchTree.prototype.insert = function(value, depth) {
  var nodeCreate = function() {
    return new BinarySearchTree(value);
  };

  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value, depth + 1);
    } else {
      this.right = nodeCreate(value);
      this.right.depth = depth;
    }
  } else {
    if (this.left !== null) {
      this.left.insert(value, depth + 1);
    } else {        
      this.left = nodeCreate(value); 
      this.left.depth = depth;
    }
  }
};


BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    return this.right === null ? false : this.right.contains(value);
  } else {
    return this.left === null ? false : this.left.contains(value);
  }
};


BinarySearchTree.prototype.depthFirstLog = function(cb, depth) {
  depth = depth || 1;

  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb, depth + 1);
  } 

  if (this.right !== null) {
    this.right.depthFirstLog(cb, depth + 1);
  }

};

BinarySearchTree.prototype.breadthFirstLog = function() {
  var result = {};

  this.depthFirstLog(function(value, depth) {
    if (result[depth] === undefined) {
      result[depth] = [];  
    }
    result[depth].push(value);
    
  });

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
