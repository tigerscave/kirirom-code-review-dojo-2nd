"use strict"

const numberElement = document.getElementById("number")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

let number = 0

function calculate(operator) {
    if(operator == '+') {
        ++ number
    }
    else if(operator == '-') {
        -- number
    }
    else {
        number = 0
    }
    numberElement.textContent = number
}

plusButton.addEventListener('click', () => calculate('+'))
minusButton.addEventListener('click', () => calculate('-'))
resetButton.addEventListener('click', () => calculate('_'))
