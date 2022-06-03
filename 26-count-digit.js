// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

// For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.
// Problem Statement
// Write a function that takes a 3 parameters: a digit, lower and upper bounds as integer. The function will calculate how many times the given digit occurs within the numbers including lower and upper bounds.
// Please solve the problem for 0 <= digit < 10 and 0 < low < high, otherwise function should return -1.
// If no occurrences is found in the given range, function should return 0

function countDigits(digit, low, high) {
  let counter = 0;
  if (0 <= digit && digit < 10 && 0 < low && low < high) {
    for (let i = low; i <= high; i++) {
      let str = i.toString();
      str.split("").forEach((x) => {
        if (x == digit) {
          counter += 1;
        }
      });
    }
    return counter;
  } else if (digit >= 10) {
    return -1;
  } else {
    return counter;
  }
}

desc = "3_30_39";
inputDigit = 3;
inputLow = 30;
inputHigh = 39;
console.log(countDigits(inputDigit, inputLow, inputHigh));
actual = countDigits(inputDigit, inputLow, inputHigh);
expected = 11;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

// desc = "digit gt 9";
// inputDigit = 10;
// inputLow = 2;
// inputHigh = 3;
// console.log(countDigits(inputDigit, inputLow, inputHigh));
// actual = countDigits(inputDigit, inputLow, inputHigh);
// expected = -1;
// assertEqual(actual, expected, desc);

// desc = "no match";
// inputDigit = 2;
// inputLow = 5;
// inputHigh = 10;
// console.log(countDigits(inputDigit, inputLow, inputHigh));
// actual = countDigits(inputDigit, inputLow, inputHigh);
// expected = 0;
// assertEqual(actual, expected, desc);
