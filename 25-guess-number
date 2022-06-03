console.log("OYUN");
let devam;
do {
  let hak = 5;
  const rastgeleSayi = Math.floor(Math.random() * 100 + 1);

  do {
    const tahmin = Number(prompt("lütfen 0-100 arasında bir sayi giriniz"));
    hak--;
    if (tahmin === rastgeleSayi) {
      console.log(`Tebrikler ${5 - hak}. denemede bildiniz 🎉`);
      break;
    } else {
      if (tahmin < rastgeleSayi) {
        console.log("İncrease ⬆");
      } else {
        console.log("Decrease ⤵");
      }
    }
  } while (hak > 0);
  console.log("Game Over");
  if (hak === 0) {
    console.log("üzgünüm oyunu kaybettiniz 😥");
  }

  devam = prompt("yeniden oynamak ister misin e/h?");
} while (devam == "e" || devam == "E");
console.log("Yine Bekleriz");
