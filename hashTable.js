function HashTable(size) {    
  this.buckets = Array(size); 
  this.numBuckets = this.buckets.length; 
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

function HashTable(size) { 
  this.buckets = Array(size);  
  this.numBuckets = this.buckets.length;   
}

HashTable.prototype.hash = function(key) {  
  var total = 0;   
  for (var i =0; i < key.length; i++) {     
    total += key.charCodeAt(i);  
  }
    var bucket = total % this.numBuckets;   
    return bucket;                      
}

HashTable.prototype.insert = function(key, value) {  
  var index = this.hash(key);  
  if (!this.buckets[index]) {
  this.buckets[index] = new HashNode(key, value);
}
else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
} else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
       if (currentNode.next.key === key) {
         currentNode.next.value = value;
         return;
       }
       currentNode = currentNode.next;
    } 
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key); 
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};


var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');

console.log(myHT.get('Dean'));
  
 
 
 
 //---HASH TABLE---// runtime O(1) - neither binary nor linked list can do
 // Lookup: O(1)
 //Insertion: O(1)
 //store data in form a key associated with value
 // {
 //  key: 'pizzza' - usually string
 //  value: '$2' any dta type
 //  }

  // Hash Table is a table with a pre-determined length,
  // in which each of the cells of the table or buckets holds a piece of data
  // which has a key and a value 
  // [ , , , , , , , , , , , ] empty hash table


//--hash table cinstructor--//
function HashTable(size) {     //sizze determines how many buckets or how  big hash tbale is
  this.buckets = Array(size);  // defines where the hash table data will be stored
  this.numBuckets = this.buckets.length;   //keeps track of buckets in HT
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

var myHT = new HashTable(30);
console.log(myHT);


//how to turnn char into number value
//each letter responds to its number  - .charCodeAt()
console.log('hello world'.charCodeAt(1));  //wil; turn second char into number (e = 101);

//modules operator - remainder
// 7 % 3 = 1

//hash method: will take in a string which is the key property and one of the nodes and hash it into a number that
//corresponds with one of the buckets in our hash table

HashTable.prototype.hash = function(key) {  // key parameter ends ujp key property on one of our nodes to turn key('string') into  a number
  var total = 0;                            // initiate total var
  for (var i =0; i < key.length; i++) {     // loop through every char in a string
    total += key.charCodeAt(i);             // add numeric value to every char in string to our total
  }
    var bucket = total % this.numBuckets;   // if we devide any number by 30 (how many buckets we have)
     return bucket;                            // the remainder will be between 0 and 29 
}

//---insert method--// take key and value pair and turn them into a hash node , place it into
// correct bucket in our hash table
HashTable.prototype.insert = function(key, value) {  //first to figure out which bucket our soon to be hash node will go into 
  var index = this.hash(key);    //it will go into whatever number our index turns out to be
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
          currentNode = currentNode.next;   //while this is  not last node in the chain, continue to travel down that chain by changing the current node to the next node in the chain
    } 
    currentNode.next = new HashNode(key, value);
  }
};

//---get method --// to retrieve info and return if it exist. if it sint return null
HashTable.prototype.get = function(key) {
  var index = this.hash(key);             // hash key into a number so we know what bucket to look in.// remeber for a given key it wil always hash into the same number every time that we hash it, cuz the letters in that key never change
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

//---retieve all--//
HashTable.prototype.retrieveAll = function() {
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
      while(currentNode) {
        allNodes.push(currentNode);
        currentNode = currentNode.next;
      }
  }
  return allNodes;
};

//PROS: TIME INSERTION AND LOOKUP = O(1)
//PRACTICAL USE: STORE USERS DATA
//CONS: DATA DOESNT STORE REFERENCES TO OTHER PIECES OF DATA IN DATA STRUCTURE