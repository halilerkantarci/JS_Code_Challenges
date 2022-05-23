// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//! 1. YOL
let x = "9119";
let y = x.split("").map(myFunction).join("");
function myFunction(value) {
  return value ** 2;
}
console.log(y);

//! 2. YOL

let z = "9119";
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((value) => value ** 2)
    .join("");
}
console.log(squareDigits(z));
