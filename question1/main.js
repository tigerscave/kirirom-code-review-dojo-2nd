"use strict"

//write code in here

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const number = document.getElementById('number')

let num = 0

function calculate(symbol){
    if (symbol === '+'){
        number.textContent = (++num).toString()
    }
    else if (symbol === '-'){
        number.textContent = (--num).toString()
    }
    else {
        number.textContent = '0'
        num = 0
    }
}

plusButton.addEventListener('click', () => calculate('+'))
minusButton.addEventListener('click', () => calculate('-'))
resetButton.addEventListener('click', () => calculate(''))