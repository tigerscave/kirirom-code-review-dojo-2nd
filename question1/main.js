"use strict"

//write code in here
const textElement = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

let total = 0

function operation(operator) {
  if (operator === "+") {
    total++
  } else if (operator === "-") {
    total--
  } else if (operator === "reset") {
    total = 0
  }

  display(total)
}

function display(total) {
  textElement.innerHTML = total
}

plusButton.addEventListener('click', () => operation("+"))
minusButton.addEventListener('click', () => operation("-"))
resetButton.addEventListener('click', () => operation("reset"))