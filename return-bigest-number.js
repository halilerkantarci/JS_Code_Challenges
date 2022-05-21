//* FİND THE BİGEST NUMBERS İN EVERY SUBARRAY
let arr = [
  [4, 5, 1, 3, 49, 57],
  [13, 37, 18, 26],
  [35, 35, 37, 39],
  [1000, 1001, 857, 1],
];
let result = [];
function largestofFOr(a) {
  for (let i = 0; i < a.length; i++) {
    result.push(Math.max(...a[i])); //! arraylere max methoduyla ulaşamazsın ama ...arr[i] yaparsan ulaşabilirsin
  }
  return result;
}
console.log(largestofFOr(arr));
