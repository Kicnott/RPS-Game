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

let playRound = elem => {

    let computerChoice = getComputerChoice();
    let playerChoice = elem;

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
            hi.textContent = score;
            return;
        }
        if(computerChoice == "scissors"){
            console.log("You Lost! Scissors beats Paper!");
            console.log("Score: "+ score);
            hi.textContent = score;
            return;
        }
    }

    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            console.log("You Lost! Paper beats Rock!");
            console.log("Score: "+ score);
            hi.textContent = score;
            return;
        }
        if(computerChoice == "scissors"){
            console.log("You Won! Rock beats Scissors!");
            score++;
            console.log("Score: "+ score);
            hi.textContent = score;
            return;
        }
    }

    if (playerChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("You Lost! Rock beats Scissors!");
            console.log("Score: "+ score);
            hi.textContent = score;
            return;
        }
        if(computerChoice == "paper"){
            console.log("You Won! Paper beats Scissors!");
            score++;
            console.log("Score: "+ score);
            hi.textContent = score;
            return;
        }
    }
}
const hi = document.querySelector("#score");
hi.textContent = score;
const Game = document.querySelectorAll("button");
Game.forEach(button => button.addEventListener("click", () => playRound(button.id)));


