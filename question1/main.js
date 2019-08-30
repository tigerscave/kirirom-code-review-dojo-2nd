"use strict"

//write code in here

const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")

let number = parseInt(numberElement.textContent)

plusButton.addEventListener('click', () => {
    number += 1
    numberElement.textContent = number 
})
minusButton.addEventListener('click', () => {
    number -= 1
    numberElement.textContent = number 
})
resetButton.addEventListener('click', () => {
    number = 0
    numberElement.textContent = number 
})
