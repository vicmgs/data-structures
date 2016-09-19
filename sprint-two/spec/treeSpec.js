describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should return false for a value that was removed', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.removeNode(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(false); 
  });

  it('should return false for child of value that was removed', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.removeNode(6);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);
  });

  it('should return null for a parent of the head of the tree', function() {
    tree.addChild(5);
    expect(tree.parent).to.equal(null);
  });

  it('should reference correct parent after addChild is called', function() {
    tree.addChild(5);
    tree.children[0].addChild(3);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should find the correct node when findNode is called', function() {
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(9);
    expect(tree.findNode(6).value).to.equal(6);
    expect(tree.findNode(9).value).to.equal(9);
  });

  it('should return undefined when findNode is called on a value not in tree', function() {
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(9);
    expect(tree.findNode(20)).to.equal(undefined);
  });

  it('should return false for values of a removed section of the tree', function() {
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(9);
    tree.children[2].addChild(10);
    tree.removeParent(9);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(10)).to.equal(false);
  });

  it('should now allow removeParent if parent is the head of the tree', function() {
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(9);
    expect(tree.removeParent(6)).to.equal('Error: cannot remove head of tree');
  });

  it('should run a callback on every node when traverse is called', function() {
    var result = [];
    var multiply = function (a) {
      result.push(a * 2);
    };
    tree.value = 10;
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[2].addChild(9);
    tree.traverse(multiply);
    expect(result).to.eql([20, 8, 14, 10, 16, 12, 18]);
  });

});
