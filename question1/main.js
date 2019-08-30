"use strict"
//write code in here
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numberElement = document.getElementById("number")

function addition(){
	numberElement.textContent++
}

function substraction(){
	numberElement.textContent--
}

function resetNumber(){
	numberElement.textContent = "0"
}

plusButton.addEventListener('click', addition)
minusButton.addEventListener('click', substraction)
resetButton.addEventListener('click', resetNumber)

