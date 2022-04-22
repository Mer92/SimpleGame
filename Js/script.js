//Set variables to allow computer to select and output
let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissors";

// The playerSelection parameter is case insensitive
let patternChoice1 = /rock/i;
let input1 = choice1.match(patternChoice1);
let patternChoice2 = /paper/i;
let input2 = choice2.match(patternChoice2);
let patternChoice3 = /scissors/i;
let input3 = choice3.match(patternChoice3);

// The user uses a prompt method to input selection, either rock, paper or scissors 
const playerSelection = prompt("Please input your choice", "Rock | Paper | Scissors");

// A computerPlay function is created
function computerPlay(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
// The computer randomly outputs either rock, paper or scissors
   let randomNumber = computerChoice[Math.floor(Math.random()* 3)];
   
   //log computers output

   console.log("The computer has chosen: " + randomNumber);
}

// A single round function is created
// The function takes the parameters  of playerSelection and computerSelection
const computerSelection = computerPlay(); 

function playRound(playerSelection, computerSelection){
if (playerSelection == input1 && computerSelection == choice3){
    // When the round is over a message is displayed stating a winner or loser of the round
    console.log ("You Win! Rock beats Scissors");
    }
    else if (playerSelection == input3 && computerSelection == choice2){
        //print players choice?
        console.log ("You Win! Scissors beats Paper");
    }
    else if (playerSelection == input2 && computerSelection == choice1){
            console.log ("You Win! Paper beats Rock");
    }
    else if (playerSelection == input2 && computerSelection == choice3){
            console.log ("You Lose! Scissors beats Paper");
    }
    else if (playerSelection == input3 && computerSelection == choice1){
            console.log ("You Lose! Rock beats Scissors");
    }
    else if (playerSelection == input1 && computerSelection == choice2){
            console.log ("You Win! Paper beats Rock");
    }
}

// The results of the playRound function are returned 
console.log(playRound(playerSelection, computerSelection));

// A game function is created 
function game(){
    // The playRound function is called inside the game function
    playRound();
    // Loop from 0 to 5 
    for (let i = 0; i < 5; i++) {
        // your code here!
     }
}


// A 5 round game 
//keeps score
//reports the winner or loser at the end of each  game



// The results and winner of each round at the end  are seen in the console 
console.log("You Lose the game!! the computer won");
console.log("You Won the game!! the computer lose");