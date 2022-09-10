const before = document.querySelector("#quote");

const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage)

const bgimg = document.createElement("img");
bgimg.src = `img/${chosenImage}`;

//console.log(bgimg);

//document.body.appendChild(bgimg);
document.body.insertBefore(bgimg, before);
