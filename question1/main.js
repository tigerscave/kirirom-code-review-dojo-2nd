'use strict'

//write code in here

let output = 0

const numberElement = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

function operation(operator) {
  if (operator == '+') {
    output += 1
  } else if (operator == '-') {
    output -= 1
  }
  numberElement.textContent = output
}
function reset() {
  output = 0
  numberElement.textContent = output
}

plusButton.addEventListener('click', () => operation('+'))
minusButton.addEventListener('click', () => operation('-'))
resetButton.addEventListener('click', reset)
