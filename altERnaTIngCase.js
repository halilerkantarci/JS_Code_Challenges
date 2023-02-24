// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE

const word = prompt("please enter a sentence");

const cevir = (convertArray) => {
  const mapping = convertArray.map((letter) => {
    if (letter.toLowerCase() == letter) {
      return letter.toUpperCase();
    } else if (letter.toUpperCase() == letter) {
      return letter.toLowerCase();
    }
  });
  const str = mapping.join("");
  console.log(str);
};

const convertArray = word.split("");
cevir(convertArray);
