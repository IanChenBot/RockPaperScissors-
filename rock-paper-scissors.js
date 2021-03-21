/* ComputerPlay Function creates random number from ranging from 1-3 and accordingly spits out corresponding RPS
    PlayerPlay Function lists possible options and user types out the RPS they want to use 
    RPS function takes two parameters ComputerSelection PlayerSelection
        If ComputerSelection and PlayerSelection is the same then tie 
        If ComputerSelection = Paper and PlayerSelection = Rock , Computer win
        If ComputerSelection = Scissors and PlayerSelection = Paper, Computer win 
        If ComputerSelection = Rock and PlayerSelection = Scissors, Computer win 
        Else PlayerSelection wins
    Game Function Displays winner and loser and keeps count of score 

*/

game();

function computerPlay () { 
    switch(Math.floor(Math.random()*3)){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
    
}

function playerPlay () {   
    var result;
    while(result != ("rock" || "paper" || "scissors")){
     result = window.prompt("Paper, Scissors, Rock!").toLowerCase();
    }
    return result;
}

function playRound (playerSelection, computerSelection) { 
    if(playerSelection == computerSelection) {
        console.log(`Tie!`)
        return 0; 
    }else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
    ){
        console.log(`You Lose${playerSelection} loses to ${computerSelection}`)
        return -1;
    }else {
        console.log(`You Win ${playerSelection} beats ${computerSelection}`)
        return 1;
    }
}

function game () { 
    let playerCounter = 0;
    let computerCounter = 0; 
    while ((playerCounter||computerCounter) <= 5 ){
        let result = playRound(playerPlay(), computerPlay());
        if (result == 1){
            playerCounter++
        }else if(result == -1){
            computerCounter++
        }
    }   
    if(playerCounter == 5){
        console.log("Player Wins");
    }else {
        console.log("Player Loses")
    }
}
