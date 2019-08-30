"use strict"

//write code in here
const count = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')  
var num = 0
const numberElement = document.getElementById('number')

function increase() {
    num++
    count.textContent = num
}
function decrease() {
    num--
    count.textContent = num
}
function reset() {
    num=0
    count.textContent = num
}

plusButton.addEventListener('click', () => increase())
minusButton.addEventListener('click',() => decrease())
resetButton.addEventListener('click', () => reset())