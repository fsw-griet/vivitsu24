let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");

let images1 = ["IMG_3018.JPG", "IMG_3041.JPG", "IMG_3053.JPG"];
let images2 = ["IMG_3101.JPG", "IMG_3154.JPG", "IMG_3207.JPG"];
let images4 = ["IMG_3398.JPG", "IMG_3431.JPG", "IMG_3435.JPG"];
let images3 = ["IMG_3436.JPG", "IMG_3443.JPG", "IMG_3468.JPG"];

setInterval(function () {
  let ran = Math.floor(Math.random() * images1.length);
  image1.src = "./assets/images/insights/" + images1[ran];
  ran = Math.floor(Math.random() * images2.length);
  image2.src = "./assets/images/insights/" + images2[ran];
  ran = Math.floor(Math.random() * images3.length);
  image3.src = "./assets/images/insights/" + images3[ran];
  ran = Math.floor(Math.random() * images4.length);
  image4.src = "./assets/images/insights/" + images4[ran];
}, 3000);
