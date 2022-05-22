// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

let array = [4, 3, 9, 7, 2, 1];
let square = [];
for (let i = 0; i < array.length; i++) {
  if (Math.sqrt(array[i]) % 1 == 0) {
    //!tam sayi bulma
    square.push(Math.sqrt(array[i]));
  } else {
    square.push(array[i] ** 2);
  }
}
console.log(square);
