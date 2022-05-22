// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
let n = 348597;

function digitize(n) {
  let x = n.toString().split("");
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y.push(Number(x[i]));
  }
  return y.reverse();
}
console.log(digitize(n));
