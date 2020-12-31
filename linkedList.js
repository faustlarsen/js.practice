//good data structure to use is coz - 
//data doesnt have to be stored together. it can be linked


function LinkedList() {
  this.head = null;        
  this.tail = null;
}
  
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null); 
  if (this.head) this.head.prev = newNode; 
  else this.tail = newNode;
  this.head = newNode;  
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;  
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function(){
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while(currentNode) {  
    if (currentNode.value === searchValue) return currentNode.value;             
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value){
        indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
    }
    return indexes;
};

//single linked list - each node has a reference to next node 0 > 0 > 0
// and double linked list - each node has reference to next one and previous 0 > < 0 > <  0 > < 0

// needs to know about HEAD NODE nad TAIL NODE
// learn to add and remove HEAD and TAIL
// learn to search though the list
Node {     //sample
  VALUE: 7
  NEXT: nextNode;
  PREV: prevNode;
}

function LinkedList() {
  this.head = null;         // because not having noodes yet
  this.tail = null;
}
  
  function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  var LL = new LinkedList();
  console.log(LL);

  var node1 = new Node(100, 'node2', null);
  console.log(node1);

//_____adding new node_____//
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);    // assiging value to node, for next - this.head or current/old head of the current list; null for previus)
};

//_______attaching new node to head_____//
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null); //null is cuz new node will be new head and no nodes previous to it
  if (this.head) this.head.prev = newNode; //this refers to LinkedList constructor function, cuz we r inside the method
  else this.tail = newNode;
  this.head = newNode;
};

//_______using Add to head method_____//

var ll = new LinkedList();  //first node head and tail

ll.addToHead(100);
console.log(ll);

//adding second node
ll.addToHead(200);
console.log(ll);

LinkedList {
  head: Node {
    value: 200,
    next: Node { value: 100, next: null, prev: [Circular] }, // circular means connection
    prev: null
  },
  tail: Node {
    value: 100,
    next: null,
    prev: Node { value: 200, next: [Circular], prev: null }
  }
}

//adding anpther node
ll.addToHead(300);
console.log(ll);

//_______using Add to tail method_____//

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = neeNode;
}
//test//
var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
console.log(myLL.tail.prev.prev);

var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToHead(100);
console.log(myLL);

//_______remove head and return lists value_____//

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;  //if the list is empty return null
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

var ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

console.log(ll.removeHead());  //will return 2000

var ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

ll.removeHead();
console.log(ll.removeHead()); //will return 1000



//_______remove tail and return lists value_____//

LinkedList.prototype.removeTail = function(){
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

var ll = new LinkedList();

ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');
console.log(ll.removeTail()); // return 'one'

//_______search method_____//

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  var counter = 0;
  while(counter < 10) {                 //while is tru it runs
    console.log(counter);
    counter++
  }
}


//_______search method_____//
var ll = new LinkedList();
ll.search(); // will count 0 - 9

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while(currentNode) {  
    if (currentNode.value === searchValue) return currentNode.value;             
  currentNode = currentNode.next;
  }
  return null;
};

var myLL = new LinkedList();
myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('word');
myLL.addToTail(20);

console.log(myLL.search(70)); //return 70

//_______find index of numbers_____//
LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value){
        indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};


var myLL = new LinkedList();
myLL.addToTail(1);
myLL.addToTail(5)
myLL.addToTail(3);
myLL.addToTail(5);
myLL.addToTail(8);
myLL.addToTail(7);
myLL.addToTail(5);

console.log(myLL.indexOf(5));  //return [ 1, 3, 6 ]