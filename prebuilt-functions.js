parseInt(); //converts string to intiger
parseFloat(); //converts string to float (decimal) number
(4).toFixed(2); //converts the number for into STRING 4.00. note: you can not represent the NUMBER 4 as 4.00.
Math.floor();
Math.ceil();
Math.random();


setInterval(function() {  //executes code after the interval REPEATEDLY (3000 = 3 seconds)
  alert("Hello");
}, 3000);

clearInterval(); // used to stop the setInterval method.  See cearTimeout() below.

setTimeout(function() {  // //executes code after the interval ONCE (3000 = 3 seconds)
  alert("Hello");
}, 3000);

clearTimeout();  // used to stop the setTimeout method

function fun() { 
  t = setTimeout(functionToExecute, 3000); 
} 

function stop() { 
  clearTimeout(t); 
} 


eval(); // The eval() function evaluates JavaScript code represented as a string.
console.log(eval("2 + 2")); // expected output: 4

const myString = 5;
eval("myString"); //expected output: 5  Usefull for converting form field values into predefined variables.



//Random Numbers (pseudo-random)
Math.random(); //A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
Math.floor(Math.random * 10); //returns a random integer from 0 to 9
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}