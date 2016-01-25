// I can't spell, make some constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "win";
const LOST = "lost";

function play(playerChoice) {
  var computerChoice = getComputerChoice();
  var winner = isPlayerWinner(playerChoice, computerChoice);   
  if (winner) {
    playerWon(computerChoice);
  } else {
    playerLost(computerChoice);
  }
  hideWinLost(winner);
}

function isPlayerWinner(playerChoice, computerChoice) {
  // if it's a tie, the player wins
  if (playerChoice == ROCK) {
    if (computerChoice == PAPER) {
      return false;
    } else {
      return true;
    }
  } else if (playerChoice == PAPER) {
    if (computerChoice == SCISSORS) {
      return false;
    } else {
      return true; 
    }
  } else if (playerChoice == SCISSORS) {
    if (computerChoice == ROCK) {
      return false;
    } else {
      return true;
    }
  }
}

function getComputerChoice() {
  // get a random number between 1 and 3
  var choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) return ROCK;
  else if (choice === 2) return PAPER;
  return SCISSORS;
}

function playerWon(computerChoice) {
  makeVisible(WIN);
  setMessage(WIN + "-message", computerChoice);
}

function playerLost(computerChoice) {
  makeVisible(LOST);
  setMessage(LOST + "-message", computerChoice);
}

function hideWinLost(playerWon) {
  var func;
  var timeout = 2000;
  // Need to capture which function to call
  if (playerWon) {
    func = hideWin;
    timeout += 1000;
  } else {
    func = hideLost;
  }
  
  window.setTimeout(func, timeout);
}

function hideWin() {
  makeHidden(WIN);
}

function hideLost() {
  makeHidden(LOST);
}

function makeVisible(id) {
  var node = document.getElementById(id);
  var className = node.className;
  // This removes the hidden class
  var classWithoutHidden = className.replace(/\bhidden\b/, "");
  node.className = classWithoutHidden;
}

function makeHidden(id) {
  var node = document.getElementById(id);
  // This adds the hidden class
  node.className += " hidden";    
}

function setMessage(id, computerChoice) {
  var node = document.getElementById(id);
  node.textContent = computerChoice.toUpperCase();
}