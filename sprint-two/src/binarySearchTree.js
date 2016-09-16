var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function(value) {
  var nodeCreate = function() {
    return new BinarySearchTree(value);
  };

  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = nodeCreate(value);
    }
  } else {
    if (this.left !== null) {
      this.left.insert(value);
    } else {        
      this.left = nodeCreate(value); 
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


BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
  cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } 

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
