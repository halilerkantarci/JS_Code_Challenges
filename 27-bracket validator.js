// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false
// Simply making sure each opener has a corresponding closer is not enough—we must also confirm that they are correctly ordered.
// For example, "{ [ ( ] ) }" should return false, even though each opener can be matched to a closer.

// let x = ["{", "[", "]", "(", ")", "{", "}", "[", "]", "(", ")", "}"];
let x = "{[]()}";
let counter = 0;
for (let i = 1; i < x.length - 1; i++) {
  if (x[0] == "{" && x[x.length - 1] == "}") {
    if (x[i] == "[" && x[i + 1] == "]") {
      counter += 1;
    }
    if (x[i] == "(" && x[i + 1] == ")") {
      console.log("ok");
      counter += 1;
    }

    if (x[i] == "{" && x[i + 1] == "}") {
      counter += 1;
    }
  }
}
if (x.length / 2 === counter + 1) {
  console.log(true);
  console.log(counter);
} else {
  console.log(false);
}
