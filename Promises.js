let promise = new Promise(function(resolve, reject) { 
  // async code goes here
});

//pseudo code example...

let promise = new Promise(function(resolve, reject) {
  if (apiCallSuccessful) {
    resolve(data)
  } else {
    reject(message)
  }
});


// Promise objects have just three methods - we only need to know about two of them: 

Promise.prototype.then(); //a Promise method that handles promises that are resolved

Promise.prototype.catch();  //a Promise method that handles promises that are rejected






// example promise  This is only an example and should NOT be use for sync code
let promise = new Promise(function(resolve, reject) {
  const value = Math.floor(Math.random() * Math.floor(2))
  if (value === 1) {
      resolve("The value is 1!");
  } else {
      reject("The value is 0.");
}
});

promise.then(function(resolvedResponse) {
  console.log("resolved!")
  console.log(resolvedResponse);
}, function(rejectedResponse) {
  console.log("rejected!");
  console.log(rejectedResponse);
});

//outputs
// resolved!
// The value is 1!
// Promise {<fulfilled>: undefined}

// rejected!
// The value is 0.
// Promise {<fulfilled>: undefined}


// Summary (Intermediate JavaScript / Week 03 - Lesson 15)
// Now that we've gone through an example and covered promises in detail, let's summarize how they work:

// We can wrap our async code in a promise.
// Next, we can tell our function when it should resolve or reject - giving us fine-grained control over how JavaScript should handle our async code.
// Finally, we can use Promise.prototype.then() to run code once the async operation is complete - no need to keep tabs on the promise. JavaScript will do that for us.
// Promise.prototype.then() takes up to two functions as arguments - the first (required) function determines what happens if a promise is fulfilled while the second (optional) function determines what happens if the promise is rejected.
// We can even chain promises together because Promise.prototype.then() itself returns a promise. We'll learn more about that later in this section, though it's not required to do any chaining for the independent project.
// There are a few other useful methods related to promises as well, none of which you need to use this week. However, it's good to know about them and you may want to try them out during a class project. For instance, we can use Promise.all() to work with multiple promises:

// Promise.all([promise1, promise2, promise3]);
// Promise.all() wraps the enclosed promises into a single giant promise that only resolves after each of the included promises are resolved.

// There are a few other methods such as Promise.race() and Promise.catch(). Check out Mozilla's documentation on promises to learn more.