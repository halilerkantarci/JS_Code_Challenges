// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//! Filter 3 parametre alır value,index,array
//! Listeyi alıyor,her bir elemanın üstünde gezinir ve attığım fonksiyona göre hareket ediyor

//! FİLTER, BİR ARRAY METODUDUR. Orijinalini değiştirmez

let numbers = [2, 4, 5, 6];
let halil = numbers.filter(evenNumbers);

//* liste içindeki elemanlar sırasıyla içine girer halilin içine tekrar liste halinde filtreler
function evenNumbers(num) {
  if (num % 2 == 0) {
    return num;
  }
}
console.log(halil);
