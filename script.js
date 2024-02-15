//Generate a random number 1-6
let randomNum = Math.floor(Math.random() * 6) + 1;
let randomNumTwo = Math.floor(Math.random() * 6) + 1;

//Select the image
let diceImage = document.querySelector(".dice .img1"); //Select the image with class img1 child of class dice
let diceImageTwo = document.querySelector(".dice .img2");

//Change the image
diceImage.src = "./images/dice" + randomNum + ".png";
diceImageTwo.src = "./images/dice" + randomNumTwo + ".png";

//Select the h1
let h1 = document.querySelector("h1"); //Grab the large "Refresh Me"

//Change the h1
if (randomNum > randomNumTwo) {
	h1.innerHTML = "🚩Player 1 Wins!";
} else if (randomNum < randomNumTwo) {
	h1.innerHTML = "Player 2 Wins! 🚩";
} else {
	h1.innerHTML = "Draw!";
}
