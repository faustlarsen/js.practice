Array.prototype.push() //Push elements to the end of an array.

Array.prototype.concat() //Concatenate elements to the end of an array. Similar to Array.prototype.push() except it doesn't modify the original array.

Array.prototype.unshift() //Add an element to the beginning of an array.

Array.prototype.shift() //Remove an element from the beginning of an array.

Array.prototype.pop() //Remove an element from the end of an array.

Array.prototype.join() //Turn an array into a string. You can pass an optional separator in as an argument. "" is a common separator.

Array.prototype.slice() //Slice elements from the beginning and (optionally) the end of an array.

Array.prototype.splice() //Removes elements from and array and, if necessary, inserts new elements in their place.

Array.prototype.includes() // Determines whether an array includes a certain element, returning true or false as appropriate.

Array.prototype.sort() // sorts an array in ascending order.  Modifies Original Array.

let words = ["ca", "da", "a", "ab", "b", "ba", 10, 1, 4]
words.sort(function(a, b){return a-b}) //This format for sorting numbers. {return b-a} for reverse order.
returns: ["ca", "da", "a", "ab", "b", "ba", 1, 4, 10]

let words = ["ca", "da", "a", "ab", "b", "ba", 10, 1, 4]
words.sort() // this format for sorting alphabetically
returns: [1, 10, 4, "a", "ab", "b", "ba", "ca", "da"]



//Modify Elements in an Array with Bracket Notation

> let array = [1,2,3]
> array[0] = "We just modified the array at position zero."
> array
["We just modified the array at position zero.",2,3]