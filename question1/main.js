"use strict"

const numberElement = document.getElementById("number")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")

let number = 0

function countNumber(action) {
    if(action == '+') {
        ++ number
    }
    else if(action == '-') {
        -- number
    }
    else {
        number = 0
    }
    numberElement.textContent = number
}

plusButton.addEventListener('click', () => countNumber('+'))
minusButton.addEventListener('click', () => countNumber('-'))
resetButton.addEventListener('click', () => countNumber('reset'))
