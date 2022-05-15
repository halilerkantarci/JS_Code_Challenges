let challenge = "30 days of Javascript";
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substr(3, 6)); //3. indexten başla 6 karakter daha al
// console.log(challenge.substring(3, 12)); //3. indexten başla 12. indexe kadar git. 12. index dahil değil
// console.log(challenge.substring(3, challenge.length - 3)); //3. indexten başla -3. indekse kadar git
// console.log(challenge.slice(3, -3)); //3. indexten başla -3. indekse kadar git
// console.log(challenge.substr(-10)); // -10. indexten sona kadar git
// console.log(challenge.substr(-3, 3)); // -3. indexten başla 3 indeks sağa doğru ilerle
// console.log(challenge.includes("script"));
// console.log(challenge.split()); // [ '30 days of Javascript' ]
// console.log(challenge.split("")); // her bi elemanı ayırır
// console.log(challenge.split(" ")); //[ '30', 'days', 'of', 'Javascript' ]
// console.log(challenge.split(" ").join("").split(""));

// // convert boolean to string
// let a = true;
// console.log(a);
// console.log(typeof a.toString());

// console.log(challenge.split(" "));
// console.log(challenge.split(" ").join(" "));

// let b = challenge.replace("Javascript", "Pyhton");
// console.log(b);
// console.log(challenge.charAt(15)); //15. indeks nedir
// console.log(challenge.indexOf("a"));
// console.log(challenge.search("days"));
// console.log(challenge.startsWith("30"));

// let c = "abc";
// console.log(challenge.concat(c));

// let x = "";
// console.log(Boolean(x));

// let z = true;
// let y = false;
// console.log((z = z || y));

// let p = 10;
// let v = "10";
// console.log(p != v);

// let isRaining = true;
// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");
// isRaining = false;

// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");

// let s = windows.alert("asdasdas");

// let a = +prompt("a");
// let b = +prompt("b");
// console.log(a + b);

// const a = confirm("adasdadas");
// console.log(a);

let b = new Date();
console.log(b.getFullYear());
console.log(b.getDay());
console.log(b.getDate());
