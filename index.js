var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h3").innerHTML = "Player 1 wins !";
}
//if player2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h3").innerHTML = "Player 2 wins !";
}
//If dwa
else {
  document.querySelector("h3").innerHTML = "Draw!! No one wins. ";
}
