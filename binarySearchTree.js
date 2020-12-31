function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {   
    if (value <= this.value)   {     
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);   
    }
    else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc) {     
  if (this.left) this.left.depthFirstTraversal(iteratorFunc);  
  iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {      
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {    
  if (order === 'pre-order') iteratorFunc(this.value);   
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {    
  if (order === 'pre-order') iteratorFunc(this.value);   
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};


BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};


var bst = new BST(50); //binary search tree of 1 node with child nodes


// collection of nodes. each nose has up to 2 child nodes. left and right. that has data.
// left nodes lesser or equal to their parent node
// right is equal or greater that its parent node
//      50
//     /  \
//    30   100
//   / \   /  \
//        75  110

//recursioan is when a function calles itself
//2 cases. base case and recursive case
  function func() {
    if (/*base case*/) {
      return smth;
    }
    else {/* recursive case*/  //where it calls itself
      func()
  }
}

//-----return factorial of the number------//
// 4! = 4*3*2*1 =24
// 3! = 3*2*1=6

function factorial(num) {
  if (num === 1) {
    return num;
  }
  else {
    return num * factorial(num-1);
  }
}
factorial(4);

//-----Call Stack----//
//represents what order our functions are called in
// and variables they are called with

1. num = 4
   return 4 * factorial(3)  // factorial(4);
2. num = 3
   return 3 * factorial(2)  // factorial(3);
3. num = 2
   return 2 * factorial(1)  // factorial(2);
4. num = 1
  



//----inseert method----binary searh tree/
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {   //take value, make new BST or node with that value, place node into original BST at he correct location
    if (value <= this.value)   {      //if the value we insert less or greater that our root node
      if (!this.left) this.left = new BST(value);   //if there is no child node hwere we try to insert node, just put it there
      else this.left.insert(value);              //if there is node, run insert method on that node and make recursion method
    }
    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105); 
bst.insert(10);

console.log(bst.right.left.left);   //didnt get it


//--------contains method-------//
// if binary searh tree contains given value

BST.prototype.contains = function(value) 
{
  if (value === this.value) 
  return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};


//-------Depth First Traversal method- IN ORDER from least to greatest
//-- checks each branch all the way to the bottom
//--first on left child of tree, then parent node of the tree, then right node  doing it recursevly to check all
BST.prototype.depthFirstTraversal = function(iteratorFunc) {      //passing one func into another iteratorFunc
  if (this.left) this.left.depthFirstTraversal(iteratorFunc);  //if there is left child then run function depthFirstTraversal on that child node
  iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
};

bst.depthFirstTraversal(log);

function log(value) {
  console.log(value);
}

//---refactoring method to run through tree in different ORDER----//
// -- order, pre order and post order --//
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {      
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};

bst.depthFirstTraversal(log, 'in-order');

function log(value) {
  console.log(value);
}

// ---- PRE-ORDER---  parent first, left then right. useful if u want a copy of the tree
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {    
  if (order === 'pre-order') iteratorFunc(this.value);   //if we want to run in pre order we have to pass a 'pre-order' as an 'order' parameter
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};

bst.depthFirstTraversal(log, 'pre-order');

function log(value) {
  console.log(value);
}

//----POST ORDER --- check left children , then right children, then parent node
// useful to safely delete nodes frombst cuz it starts at lowest level and goes all the way up
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {    
  if (order === 'pre-order') iteratorFunc(this.value);   //if we want to run in pre order we have to pass a 'pre-order' as an 'order' parameter
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};


//-----Breadth First Traversal method - checks level by leveel all the wy down
//----useful for define hierachy or level of command - who is n which role


  // queue [] - first in line gets served. list follows the rule first in first out.
  // it will shift nodes out of the front of our queue one at a time run our itereator function on that node
  // then push its child nodes into the back of the queue.
  // then we repeat these steps untill all of the nodes are processed
  // that way it goes level by level, not branch by branch
  BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];   // refering to root node of our BST
  while (queue.length) {
    var treeNode = queue.shift();  //will take first queue out of queue and store in variable tree node
    iteratorFunc(treeNode);   //after proccesing first node - we push children of this node into queue
    if (treeNode.left) queue.push(treeNode.left);  
    if (treeNode.right) queue.push(treeNode.right);

  }
}

//--depthFirstTraversal--//
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {   
    if (value <= this.value)   {     
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);   
    }
    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {    
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];   
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);  
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105); 
bst.insert(10);


function log(value) {
  console.log(value);
}

bst.depthFirstTraversal(log, 'post-order');



//-breadthFirstTraversal-//
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {   
    if (value <= this.value)   {     
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);   
    }
    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {    
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);  
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];   
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);  
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105); 
bst.insert(10);


function log(node) {
  console.log(node.value);
}

bst.breadthFirstTraversal(log);