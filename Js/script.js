//Set variables to allow computer to select and output
let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissors";

// The playerSelection parameter is case insensitive
let patternChoice1 = /Rock/i;
let input1 = choice1.match(patternChoice1);
let patternChoice2 = /Paper/i;
let input2 = choice2.match(patternChoice2);
let patternChoice3 = /Scissors/i;
let input3 = choice3.match(patternChoice3);

// The user uses a prompt method to input selection, either rock, paper or scissors 
let playerSelection = prompt("Please input your choice", "Rock | Paper | Scissors");

// A computerPlay function is created
// The computer randomly outputs either rock, paper or scissors
function computerPlay(){


}

// A single round function is created
// The function takes the parameters  of playerSelection and computerSelection
// When the round is over a message is displayed stating a winner or loser of the round

function round(playerSelection, computerSelection){
if (playerSelection == input1 && computerSelection == choice3){
    console.log ("You Win! Rock beats Scissors");
    }
else if (playerSelection == input3 && computerSelection == choice2){
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

// A playRound function is declared
function playRound(playerSelection, computerSelection) { 
    
    // your code here! 

} 

/* const playerSelection = "rock"; 
const computerSelection = computerPlay(); 
console.log(playRound(playerSelection, computerSelection)); */
// The results are returned in the playRound function
// A game function is created 
function game(){
    playRound();
}
// The playRound function is called inside the game function

// A 5 round game keeps score, reports the winner or loser at the end of each round game
// Loop from 0 to 5 
for (let i = 0; i < 5; i++) {
    // your code here!
 }

// The results and winner of each round at the end  are seen in the console 
