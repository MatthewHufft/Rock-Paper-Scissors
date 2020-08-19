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

  draw(playerChoice, compChoice)
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

function draw(pChoice, cChoice) {
  //get reference for image elements
  let playerImgElem = document.getElementById("playerImg");
  let compImgElem = document.getElementById("compImg");

  //get reference for weapons
  let playerObj = weapons.find(w => w.name == pChoice);
  let compObj = weapons.find(w => w.name == cChoice);

  //draw inner HTML of image elements
  playerImgElem.innerHTML = `<img src="${playerObj.img}" height="500px" width="500px">`;
  compImgElem.innerHTML = `<img src="${compObj.img}" height="500px" width="500px">`

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
  let randomNum = Math.floor(Math.random() * (weapons.length - 0.01));
  let choice = weapons[randomNum].name;
  return choice
}

function start() {
  // Buttons
  let btnContainer = document.getElementById("buttons");
  btnContainer.innerHTML = `
    <button class="btn btn-primary m-3" onclick="play('rock')">Rock</button>
    <button class="btn btn-primary m-3" onclick="play('paper')">Paper</button>
    <button class="btn btn-primary m-3" onclick="play('scissors')">Scissors</button>
  `;
  // VS sign in the middle
  let vsElem = document.getElementById("versus");
  vsElem.innerHTML = `<h1>VS</h1>`;
  // draw pseudo images for choose your character
  let playerUnknown = document.getElementById('playerImg');
  playerUnknown.innerHTML = `<img src="./character.jpg" height="500px" width="500px">`
  let compUnknown = document.getElementById('compImg');
  compUnknown.innerHTML = `<img src="./character.jpg" height="500px" width="500px">`
}


setScore()