//big O is how scalable an algorith or function; how long it takes algorith to complete based on input size
// how slower it gets if input size increses


//_______Constant runtime 
// Big O Notation: "0 (1)" ___
function log(array) {   
  console.log(array[0]);
  console.log(array[1]);
}

log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10]);


//_______Linear runtime/   to search LINKED LIST
// Big O Notation: "O (n)" ____ 
// input size increase so runtime will
// O stands for the function we evaluating and n for size of the input
function logAll(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

log([1,2,3,4,5]);
log([1,2,3,4,5,6]);
log([1,2,3,4,5,6,7]);



//Exponential runtime
// Big O Notation: "O (n^2)" ____ STAY AWAY!!!
function addAndLong(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLong(['A', 'B', 'C']); // 9 PAIRS LOGGED OUT
addAndLong(['A', 'B', 'C', 'D']); //16 PAIRS LOGGED OUT
addAndLong(['A', 'B', 'C', 'D', 'E']); // 25 PAIRS LOGGED OUT


 //Logarithmic runtime
// Big O Notation: "O (log n)" ____
function binarySearch(array, key) { // array as a kind of lis and key - single value we are searching for in array
  var low =0;
  var high = array.length -1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) /2,10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid -1;
    } else {
      return mid;
    }
  }
  return -1;
}
