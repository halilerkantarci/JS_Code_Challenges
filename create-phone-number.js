//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(number) {
  return `(${number.slice(0, 3).join("")}) ${number
    .slice(3, 6)
    .join("")}-${number.slice(6, 10).join("")}`;
}
console.log(createPhoneNumber(numbers));
