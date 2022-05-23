// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
// a=1, b = 2, c = 3, d =e, e = 5, f = 6, g =7, h = 8, i =9, j =10, k =11, l =12, m =13, n =14, o =15, p =16, q =17, r =18, s =19, t =20, u =21, v =22, w =23, x =24, y =25, z =26

let a = [21, 13, 2, 7, 5, 14, 7, 15, 9, 10];

if (
  a.includes(2) &&
  a.includes(9) &&
  a.includes(14) &&
  a.includes(7) &&
  a.includes(15)
) {
  console.log("win");
} else {
  console.log("lose");
}
