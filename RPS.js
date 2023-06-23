let button1 = document.querySelector('#btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');


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


function btn1(){
button1.addEventListener('click', () => {
    return 'Rock';
});
}

button2.addEventListener('click', () => {
    return 'Paper';
});
button3.addEventListener('click', () => {
    return 'Scissors';
});


function myFunction(btn) {
    const playerChoice = btn.value
}

console.log(playerChoice)