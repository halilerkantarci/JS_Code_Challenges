// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
let x = "1521";

if (x == Number(x) && x.includes(".") !== true) {
  if (x.length === 4 || x.length === 6) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log(false);
}

//   if (b == NaN && (x.length === 4 || x.length === 6)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
