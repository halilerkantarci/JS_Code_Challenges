let text = "what was the name of your first pet?";
cc = "skippy";
let liste1 = [];
let a = cc.split("");
console.log(a);
for (i = 0; i < a.length - 4; i++) {
  liste1.push("#");
}
console.log(liste1.join(""));
let dd = liste1.join("") + a.join("").slice(-4);
console.log(dd);
