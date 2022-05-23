// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
let str = "abcdefghijklmno";

function solution(str) {
  let x = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str.slice(i, i + 2).length == 2) {
      x.push(str.slice(i, i + 2));
    } else {
      x.push(str.slice(i, i + 2) + "_");
    }
  }

  return x;
}
console.log(solution(str));


