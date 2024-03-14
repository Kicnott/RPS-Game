let score = 0;

function getComputerChoice(){
    let computerValue=(Math.floor(Math.random()*3));
    if (computerValue == 0){
        return "rock";
    }
    if (computerValue == 1){
        return "scissors";
    }
    if(computerValue == 2){
        return "paper";
    }
}

function playRound(){

    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == computerChoice){
        console.log("It's a tie!");
        playRound();
        return;
    }

    if (playerChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You Won! Paper beats Rock!");
            score++;
            console.log("Score: "+ score);
            return;
        }
        if(computerChoice == "scissors"){
            console.log("You Lost! Scissors beats Paper!");
            console.log("Score: "+ score);
            return;
        }
    }

    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("You Lost! Paper beats Rock!");
            console.log("Score: "+ score);
            return;
        }
        if(computerChoice == "scissors"){
            console.log("You Won! Rock beats Scissors!");
            score++;
            console.log("Score: "+ score);
            return;
        }
    }

    if (playerChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("You Lost! Rock beats Scissors!");
            console.log("Score: "+ score);
            return;
        }
        if(computerChoice == "paper"){
            console.log("You Won! Paper beats Scissors!");
            score++;
            console.log("Score: "+ score);
            return;
        }
    }
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log("Final Score:" +  score + "/ 5");
    if (score >= 3){
        console.log("You Won the Game!");
        return;
    }
    else{
        console.log("You Lost the Game!");
        return;
    }
}

playGame();