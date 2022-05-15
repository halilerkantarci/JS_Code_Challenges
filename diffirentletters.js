let x = "aabbccddeeffdd";
let y = x.split(" ").join("").split("");
let z = [];
for (let i = 0; i < y.length; i++) {
  if (z.includes(y[i])) {
    continue;
  } else {
    z.push(y[i]);
  }
}
console.log(z);
