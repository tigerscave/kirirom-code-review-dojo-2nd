"use strict"

//write code in here
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")

let number = 0

function onPlusButtonClick(){
    number = number + 1
    numberElement.textContent = number
}

function onMinusButtonClick(){
    number = number - 1
    numberElement.textContent = number
}

function onResetButtonClick(){
    number = 0
    numberElement.textContent = number
}

plusButton.addEventListener("click", onPlusButtonClick)
minusButton.addEventListener("click", onMinusButtonClick)
resetButton.addEventListener("click", onResetButtonClick)