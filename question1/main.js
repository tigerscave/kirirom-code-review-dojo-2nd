'use strict'

//write code in here

let output = 0

const numberElement = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

function operate(operator) {
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

plusButton.addEventListener('click', () => operate('+'))
minusButton.addEventListener('click', () => operate('-'))
resetButton.addEventListener('click', reset)
