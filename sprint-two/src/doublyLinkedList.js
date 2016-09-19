var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    
    if (list.head === null) {
      list.head = newNode;  
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    list.tail = newNode;
  };

  list.addToHead = function(value) {
    var newNode = new Node(value);
    newNode.next = list.head;
    list.head.previous = newNode;
    list.head = newNode;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    
    if (list.head.next !== null) {
      list.head.next.previous = null;
      list.head = list.head.next;
    } 

    return temp;
  };

  list.removeTail = function() {
    if (list.tail.previous === null) {
      list.tail = null;
      list.head = null;
    } else {
      list.tail = list.tail.previous;
      list.tail.next = null;
    } 
  };

  list.insertNodeAfter = function(newNodeValue, addAfterThis, node) {
    node = node || list.head;

    if (node.value === addAfterThis) {
      var temp = node.next;
      node.next = new Node(newNodeValue);
      node.next.previous = node;
      node.next.next = temp;
      temp.previous = node.next;
    } else {
      list.insertNodeAfter(newNodeValue, addAfterThis, node.next);
    }
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
