// This script contains all of the functions for an online calculator **Written By Jake McSwain//

//Const for buttons and locations//
const numbers = document.querySelectorAll('.numbers');
const operations = document.querySelectorAll('.functions');
const display = document.getElementById('output');
const input = display.innerHTML;
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equals')
let currentNum = ""
let previousNum = ""
let error = "Error"
let operator = undefined;

//Event Listeners for Clicks on Buttons//
numbers.forEach(button => button.addEventListener('click', () => {
    var audio = new Audio("quack.mp3")
    audio.play()
    appendNumber(button.innerText)
    updateDisplay();
})); 

operations.forEach(button => button.addEventListener('click', () => {
    var audio = new Audio("quack.mp3")
    audio.play()
    chooseOperation(button.innerText)
}));

equalButton.addEventListener('click', () => {
    var audio = new Audio("quack.mp3")
    audio.play()
    operate();
    updateDisplay();
});
    
clearButton.addEventListener('click', () => {
    var audio = new Audio("quack.mp3")
    audio.play()
    clear();
    updateDisplay();
});



//function to run everything//

function updateDisplay () {
    display.textContent = currentNum;
}

function appendNumber (number) {
    if (number === '.' && currentNum.includes('.')) return;
    currentNum = currentNum.toString() + number.toString();
}

function chooseOperation(operation) {
    if (currentNum === '') return;
    if (previousNum !== '') {
        operate();
        updateDisplay();
    }
    operator = operation;
    previousNum = currentNum;
    currentNum = '';
}

function operate() {
    let result;
    let prev = parseFloat(previousNum);
    let curr = parseFloat(currentNum);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-': 
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '÷':
            if (curr === 0) {
                result = error;
            } else result = prev / curr;
            break;
        default :
        return;
    }
    
    currentNum = result;
    operation = undefined;
    previousNum = '';
}

function clear() {
    operator = undefined;
    previousNum = '';
    currentNum = '';
}

