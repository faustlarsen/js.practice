//https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/foreach-loops
//Cheat sheet

//Examples

//Logging values to the console:

const array = [0,1,2,3,4,5];
array.forEach(function(number) { 
  console.log(number * 2);
});


//Creating a New Array with Modified Elements

const array = [0,1,2,3,4,5];
let doubledArray = [];
array.forEach(function(element) {
  doubledArray.push(element * 2);
});


//Using a Loop to Sum

const array = [0,1,2,3,4,5];
let sum = 0;
array.forEach(function(element) {
  sum += element;
});


//Using a Loop to Make a String

let thingsILike = "I like...";
const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  thingsILike = thingsILike.concat(" " + thing + "!");
});


//Using A Loop to Add Elements to the DOM

const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  $("#likable-things").append(" " + thing + "!")
});