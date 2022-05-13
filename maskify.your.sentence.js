//! FİRST WAY

let text = "what was the name of your first pet?";
cc = "skippy";
let liste1 = [];
let a = cc.split("");

for (i = 0; i < a.length - 4; i++) {
  liste1.push("#");
}
let dd = liste1.join("") + a.join("").slice(-4);
console.log(dd);

//! SECOND WAY
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
console.log(maskify("skippy"));
