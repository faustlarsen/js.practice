//function DECLARATIONS allow function "hoisting".  This means you can call the function before it is declared.
//function EXPRESSIONS do not allow function "hoisting".  This means you can only call the function after defining it.



//function declaration with name "funName"

function funName() {   
  code-here;
}


// function declaration with name "funName" and argument "arg"

function funName(arg) { 
  //code-here that includes arg;
}


// function declaration with two arguments and a return statement

function add(num1, num2) {  
  return num1 + num2;
}


// anonymous function expression

const multiply = function(num1, num2) {  
  return num1 * num2;
}


//named function expression. funName ONLY AVAILABLE INSIDE the function.

const divide = function funName (num1, num2) {  
return num1 / num2;
}


// Imediately Invoked Function - runs imedaiatly in code, but keeps variables scoped inside so they do not become global.

(function() {   
  const message = "Hello World"
  console.log(message);
})();



//async functions are used when wee need to wait for a task to complete before continuing.  you cant use "await" without an async function

async function tmakeApiCall() {
  const response = await fetch(`https://website.com${process.env.API_Key}`)
  const jsonifiedResponse = await response.json();
  return jsonifiedResponse;
}


//this will exicute the included code on page load.

$(window).on("load", function(){
  //code to exicute on page load
});



//Arrow Functions

// Traditional Function
function (a){
  return a + 100;
}

//Arrow function (multi-line style)
(a) => {
  return a + 100;
}

//Arrow function (single-line style)
a => a + 100;

// Traditional Function
function (a, b){
  return a + b + 100;
}

//Arrow function (multi-line style)
(a, b) => {    
  return a + b + 100;
}

//Arrow function (single-line style)
(a, b) => a + b + 100;


// Traditional Function (no arguments)
let a = 4;
let b = 2;
function (){ 
  return a + b + 100;
}

// Arrow Function (no arguments) (single-line style)
let a = 4;
let b = 2;
() => a + b + 100;


// Traditional Function (named)
function bob (a){
  return a + 100;
}

// Arrow Function (named) (single-line style)
let bob = a => a + 100;