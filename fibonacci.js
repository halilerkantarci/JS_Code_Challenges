//! FİBONACCİ NUMBER //

let fibo = [0, 1];
let sayi = Number(prompt("Please Enter a Number"));

function halil() {
  for (let i = 0; i < sayi - 2; i++) {
    let newFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(newFibo);
  }
  return fibo;
}
console.log(halil());
