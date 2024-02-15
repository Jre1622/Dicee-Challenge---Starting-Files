//Generate a random number 1-6
let randomNum = Math.floor(Math.random() * 6) + 1;
let randomNumTwo = Math.floor(Math.random() * 6) + 1;

//Select the image
let diceImage = document.querySelector(".dice .img1");
let diceImageTwo = document.querySelector(".dice .img2");

//Change the image
diceImage.src = `images/dice${randomNum}.png`;
diceImageTwo.src = `images/dice${randomNumTwo}.png`;
