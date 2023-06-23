let rock = document.getElementById('btn1');
let paper = document.getElementById('btn2');
let scissors = document.getElementById('btn3');


const x = Math.floor(Math.random() * 3);

function getComputerChoice(x){
        if (x === 1){
            return 'Rock'
        } else if (x === 2){
            return 'Paper'
        } else return 'Scissors'
};

const compChoice = getComputerChoice(x);
console.log(compChoice);


/*function getPlayerChoice*/