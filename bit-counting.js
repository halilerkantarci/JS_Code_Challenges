//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

let x = 1234;
let y = x.toString(2);
console.log(y);
let counter = 0;
for (let i = 0; i < y.length; i++) {
  if (y[i] == 1) {
    counter += 1;
  }
}
console.log(counter);
