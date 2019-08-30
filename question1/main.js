"use strict"

//write code in here
const numberElement = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
var numberValue = 0

function plusNumber(){
	numberValue += 1
	numberElement.textContent = numberValue 
}

function minusNumber(){
	numberValue -= 1
	numberElement.textContent = numberValue
}

function resetNumber(){
	numberValue = 0
	numberElement.textContent = numberValue
}

plusButton.addEventListener('click', plusNumber)
minusButton.addEventListener('click', minusNumber)
resetButton.addEventListener('click', resetNumber)