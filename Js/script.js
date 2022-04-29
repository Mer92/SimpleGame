let rockPattern;
let  paperPattern;
let scissorsPattern;


function choice() {
  let playerChoice = prompt(
    "Please input your choice",
    "Rock | Paper | Scissors"
  );
  console.log("You chose: " + playerChoice);

  return playerChoice;
}

let playerSelection;
// The user uses a promptmethod to input selection, either rock, paper or scissors
//let playerSelection = prompt("Please input your choice", "Rock | Paper | Scissors");
//console.log("You chose: " + playerSelection);

// A computerPlay function is created
function computerPlay() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  // The computer randomly outputs either rock, paper or scissors
  let randomNumber = computerChoice[Math.floor(Math.random() * 3)];

  //log computers output

  console.log("The computer has chosen: " + randomNumber);

  return randomNumber;
}

let playerPoints = 0;
let computerPoints = 0;
// A single round function is created
// The function takes the parameters  of playerSelection and computerSelection
let computerSelection;

function playRound(playerSelection, computerSelection) {
  playerSelection = choice();
  computerSelection = computerPlay();
  rockPattern = /rock/i;
  paperPattern = /paper/i;
  scissorsPattern = /scissors/i;


  if (playerSelection.match(rockPattern)  && computerSelection == "Scissors") {
    // When the round is over a message is displayed stating a winner or loser of the round
    console.log(
      "You Win! Rock beats Scissors. Your point(s) are: " + ++playerPoints
    );
    console.log("The computers point(s) are: " + computerPoints);
  } else if (playerSelection.match(scissorsPattern)  && computerSelection == "Paper") {
    //print players choice?
    console.log(
      "You Win! Scissors beats Paper. Your point(s) are: " + ++playerPoints
    );
    console.log("The computers point(s) are: " + computerPoints);
  } else if (playerSelection.match(paperPattern)  && computerSelection == "Rock") {
    console.log(
      "You Win! Paper beats Rock. Your point(s) are: " + ++playerPoints
    );
    console.log("The computers point(s) are: " + computerPoints);
  } else if (playerSelection.match(paperPattern)  && computerSelection == "Scissors") {
    console.log(
      "You Lose! Scissors beats Paper. Your point(s) are: " + playerPoints
    );
    console.log("The computers point(s) are: " + ++computerPoints);
  } else if (playerSelection.match(scissorsPattern)  && computerSelection == "Rock") {
    console.log(
      "You Lose! Rock beats Scissors. Your point(s) are: " + playerPoints
    );
    console.log("The computers point(s) are: " + ++computerPoints);
  } else if (playerSelection.match(rockPattern)  && computerSelection == "Paper") {
    console.log(
      "You Lose! Paper beats Rock. Your point(s) are: " + playerPoints
    );
    console.log("The computers point(s) are: " + ++computerPoints);
  } else if (playerSelection.match(rockPattern) || playerSelection.match(paperPattern)
  ||playerSelection.match(scissorsPattern) == computerSelection) {
    console.log("ITS A DRAW!!. Your point(s) are: " + playerPoints);
    console.log("The computers point(s) are: " + computerPoints);
  }

  return { playerSelection, computerSelection };
}

playRound();



// The results of the playRound function are returned
//console.log(playRound(playerSelection, computerSelection));
/*
// A game function is created
function game() {
    // The playRound function is called inside the game function
    playRound();
    // Loop from 0 to 5
    for (let i = 0; i < 5; i++) {
      // your code here!
      // if player has more points at the end of game they win game
      if (playerPoints > computerPoints && i == 5) {
        console.log("You Won the game you have " + playerPoints + "Points");
        console.log("The computer has " + computerPoints + "Points");
      }
  
      // if computer has more points at the end of game they win
      else if (computerPoints > playerPoints && i == 5) {
        console.log("You Lost the game you have " + playerPoints + "Points");
        console.log("The computer has " + computerPoints + "Points");
      }
    }
  }
  game();

// A 5 round game 
//keeps score
//reports the winner or loser at the end of each  game



// The results and winner of each round at the end  are seen in the console 
/* console.log("You Lose the game!! the computer won");
console.log("You Won the game!! the computer lost"); */

/*
//Set variables to allow computer to select and output
let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissors";

// The user uses a prompt method to input selection, either rock, paper or scissors 
let playerSelection = prompt("Please input your choice", "Rock | Paper | Scissors");
console.log("You chose: " + playerSelection);

// The playerSelection parameter is case insensitive
let patternChoice1 = /rock/i;
let input1 = patternChoice1.exec(playerSelection);
let patternChoice2 = /paper/i;
let input2 = patternChoice2.exec(playerSelection);
let patternChoice3 = /scissors/i;
let input3 = patternChoice3.exec(playerSelection);

*/
