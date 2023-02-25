// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1].charCodeAt() - array[i].charCodeAt() > 1) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}
