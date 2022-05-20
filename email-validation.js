// Email Validation
// Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

// Valid email addresses must follow these rules:
// It must have the username@websitename.extension format type.
// The maximum length of the extension is 3.

let x = "username@websitename.js";
if (
  (x.includes("@") && x.charAt(x.length - 3) == ".") ||
  x.charAt(x.length - 4) == "."
) {
  console.log("invalid email");
} else {
  console.log("uninvalid");
}
