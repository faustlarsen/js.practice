//Loops 
const array = [0,1,2,3,4,5];



//for
//general use

let doubledArray = [];
for (let index = 0; index < array.length; index +=1) {
  doubledArray.push(array[index] * 2);
}



//Array.prototype.forEeach()
// Use on arrays
// Use when
// 1) You want to loop through every element in an array without breaking out of the loop;
//AND
// 2) You don't want a transformed array.

let doubledArray = [];
array.forEach(function(element) {
  doubledArray.push(element * 2);
});



//for...of
// Use on arrays (and strings?)
// Use when you don't want to transform the array into a new string or array.

let doubledArray = [];
for (const element of array) {
  doubledArray.push(element * 2);
}



//Array.prototype.map()
// Use on arrays
// Use when you want to create a NEW transformed array based on the original

const doubledArray = array.map(function(element) {
  return element * 2;
});



//while
// Use on arrays
// Use sparingly

let index = 0;
let doubledArray = [];
while
  (index < array.length) {
    doubledArray.push(array[index] * 2);
    index ++;
}