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

function computerPlay () { 
    switch(MutationEvent.random()*Math.floor(3)){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    
}

function playerPlay () { 
    while(result != ("rock" || "paper" || "scissors")){
    let result = window.prompt("Paper, Scissors, Rock!").toLowerCase();
    }
    return result;
}

function playRound (playerSelection, computerSelection) { 
    if(playerSelection == computerSelection) {
        return 0; 
    }else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection== "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
    ){
        return -1;
    }else {
        return 1;
    }
}

function game () { 
    let playerCounter = 0;
    let computerCounter = 0; 
    while ((playerCounter||computerCounter) != 5 ){
        
    }
}
