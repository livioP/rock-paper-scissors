let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let bottoni = document.querySelectorAll("button");
let playerText = document.getElementById("playerText")
let computerText = document.getElementById("computerText")
let result = document.getElementById("result")
let score = document.getElementById("punteggio");
let won = document.getElementById('ending');
let lost = document.getElementsByClassName('ending2');
let playerChoice
let compChoice
let playerScore = 0;
let computerScore = 0;
let risposta;

/////////////////////// 






function round(){
    bottoni.forEach(bottoni => bottoni.addEventListener("click", () => { 
    playerChoice = bottoni.value;
    getComputerChoice();
    playerText.innerText = `Player choice: ${playerChoice}`;
    computerText.innerText = `Player choice: ${compChoice}`;
    score.innerText = `player: ${playerScore}, computer: ${computerScore}`
        if (risposta == 'computer wins'){
            result.innerText = 'Point for PC :('
        } else if (risposta == 'you win'){
            result.innerText = 'Point for you!!!'
        } else 
        result.innerText = `It's a tie!`;
    if (playerScore < 5 && computerScore < 5){
        playRound(playerChoice, compChoice);
    } else if (playerScore === 5){
        document.getElementById('ending').style.visibility = 'visible';
    } else if (computerScore === 5){
        document.getElementById('ending2').style.visibility = 'visible';
    }
    
    
}))
}

round()
///////////////////////////////////

function getComputerChoice(){
    const x = Math.floor(Math.random() * 3);
        if (x === 1){
            return compChoice = 'Rock'
        } else if (x === 2){
            return compChoice = 'Paper'
        } else 
            return compChoice = 'Scissors'
};


function playRound(playerChoice, compChoice){
    if (playerChoice === 'Rock' && compChoice === 'Rock'){
        return risposta = "It's a tie!"
    
    } else if (playerChoice === 'Rock' && compChoice === 'Paper'){
        return computerScore++, risposta = 'computer wins';
    
    } else if (playerChoice === 'Rock' && compChoice === 'Scissors'){
        return playerScore++, risposta = 'you win';
    
    } else if (playerChoice === 'Paper' && compChoice === 'Paper'){
        return risposta = "It's a tie!"
    
    } else if (playerChoice === 'Paper' && compChoice === 'Scissors'){
        return computerScore++, risposta = 'computer wins';
    
    } else if (playerChoice === 'Paper' && compChoice === 'Rock'){
        return playerScore++, risposta = 'you win';
    
    } else if (playerChoice === 'Scissors' && compChoice === 'Scissors'){
        return risposta = "It's a tie!"
    
    } else if (playerChoice === 'Scissors' && compChoice === 'Rock'){
        return computerScore++, risposta = 'computer wins';
    
    } else if (playerChoice == 'Scissors' && compChoice == 'Paper'){
    return playerScore++, risposta = 'you win';
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    score.innerText = `player: ${playerScore}, computer: ${computerScore}`
    document.getElementById('ending').style.visibility = 'hidden';
    document.getElementById('ending2').style.visibility = 'hidden';
}