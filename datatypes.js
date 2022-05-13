let challenge = "30 days of Javascript";
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3, 6)); //3. indexten başla 6 karakter daha al
console.log(challenge.substring(3, 12)); //3. indexten başla 12. indexe kadar git. 12. index dahil değil
console.log(challenge.substring(3, challenge.length - 3)); //3. indexten başla -3. indekse kadar git
console.log(challenge.slice(3, -3)); //3. indexten başla -3. indekse kadar git
console.log(challenge.substr(-10)); // -10. indexten sona kadar git
console.log(challenge.substr(-3, 3)); // -3. indexten başla 3 indeks sağa doğru ilerle
console.log(challenge.includes("script"));
console.log(challenge.split()); // [ '30 days of Javascript' ]
console.log(challenge.split("")); // her bi elemanı ayırır
console.log(challenge.split(" ")); //[ '30', 'days', 'of', 'Javascript' ]
console.log(challenge.split(" ").join("").split(""));

// convert boolean to string
let a = true;
console.log(a);
console.log(typeof a.toString());

console.log(challenge.split(" "));
console.log(challenge.split(" ").join(" "));
