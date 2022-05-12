//! FİBONACCİ NUMBER //

let fibo = [0, 1, 1];
let sayi = 10;
for (let i = 0; i < sayi; i++) {
  newFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
  fibo.push(newFibo);
}
console.log(fibo);
