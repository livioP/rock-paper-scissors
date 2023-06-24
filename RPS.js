let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let bottoni = document.querySelectorAll("button");
let playerText = document.getElementById("playerText")
let computerText = document.getElementById("computerText")
let result = document.getElementById("result")
let score = document.getElementById("punteggio");
let playerChoice
let compChoice
let playerScore = 0
let computerScore = 0





/////////////////////// 
let round =
    bottoni.forEach(bottoni => bottoni.addEventListener("click", () => { 
        playerChoice = bottoni.value;
        getComputerChoice();
        playerText.innerHTML = `Player choice:  ${playerChoice}`;
        computerText.innerHTML = `Computer choice:  ${compChoice}`;
        score.innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
        result.innerHTML = `${playRound(playerChoice, compChoice)}`;
            if (result.innerHTML === "Oh no, computer wins"){
                return computerScore++;
            } else if (result.innerHTML === 'You WIN!'){
                return playerScore++;
            } else console.log('tie')
                  
}))




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
        return "It's a tie!"
    } else if (playerChoice === 'Rock' && compChoice === 'Paper'){
        return "Oh no, computer wins"
    } else if (playerChoice === 'Rock' && compChoice === 'Scissors'){
        return 'You WIN!'
    } else if (playerChoice === 'Paper' && compChoice === 'Paper'){
        return "It's a tie!"
    } else if (playerChoice === 'Paper' && compChoice === 'Scissors'){
        return "Oh no, computer wins"
    } else if (playerChoice === 'Paper' && compChoice === 'Rock'){
        return 'You WIN!'
    } else if (playerChoice === 'Scissors' && compChoice === 'Scissors'){
        return "It's a tie!"
    } else if (playerChoice === 'Scissors' && compChoice === 'Rock'){
        return "Oh no, computer wins"
    } else if (playerChoice == 'Scissors' && compChoice == 'Paper'){
    return 'You WIN!'
    }
}
