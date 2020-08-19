let wins = 0;
let losses = 0;
let ties = 0;

let weapons = [
  {
    name: "rock",
    img: "rock-img.jpg"
  },
  {
    name: "paper",
    img: "paper-img.jpg"
  },
  {
    name: "scissors",
    img: "scissors-img.jpg"
  }
]


function play(playerChoice) {
  let compChoice = randomChoice();
debugger
  if (playerChoice == compChoice) {
    ties++;
  } else if (playerChoice == 'rock' && compChoice == 'scissors') {
    wins++;
  } else if (playerChoice == 'rock' && compChoice == 'paper') {
    losses++;
  } else if (playerChoice == 'paper' && compChoice == 'rock') {
    wins++;
  } else if (playerChoice == 'paper' && compChoice == 'scissors') {
    losses++;
  } else if (playerChoice == 'scissors' && compChoice == 'paper') {
    wins++;
  } else if (playerChoice == 'scissors' && compChoice == 'rock') {
    losses++;
  } 
  setScore();
}

function draw() {
  let playerImgElem = document.getElementById("playerImg")
  let compImgElem = document.getElementById("compImg")
}

function setScore() {
 let winsElem = document.getElementById("wins");
 let lossesElem = document.getElementById("losses");
 let tiesElem = document.getElementById("ties");

 winsElem.innerHTML = `<h2>Wins: ${wins} </h2>`
 lossesElem.innerHTML = `<h2>Losses: ${losses} </h2>`
 tiesElem.innerHTML = `<h2>Ties: ${ties} </h2>`
}

function randomChoice() {
  let randomNum = Math.floor(Math.random() * (weapons.length - 1));
  let choice = weapons[randomNum].name;
  return choice
}

setScore()