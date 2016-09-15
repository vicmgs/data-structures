var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    
    if (list.head === null) {
      list.head = newNode;  
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;

    return temp;
  };

  list.contains = function(target) {
    var arr = [];
    var head = list.head;
    
    while (head.next !== null) {
      arr.push(head.value);
      head = head.next;
    }
    arr.push(list.tail.value);

    if (arr.indexOf(target) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
