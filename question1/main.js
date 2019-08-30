"use strict"

//write code in here
let num = 0

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const number = document.getElementById('number')

function cal(symbol){
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

plusButton.addEventListener('click', () => cal('+'))
minusButton.addEventListener('click', () => cal('-'))
resetButton.addEventListener('click', () => cal(''))