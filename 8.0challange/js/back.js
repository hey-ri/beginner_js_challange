const before = document.querySelector(".wrap");

const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage)

const bgimg = document.createElement("img");
bgimg.src = `img/${chosenImage}`;
//console.log(bgimg);

document.body.insertBefore(bgimg, before);
