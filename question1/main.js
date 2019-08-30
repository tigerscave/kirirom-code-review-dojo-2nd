"use strict"

//write code in here
let output = 0

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const numberElement = document.getElementById('number')

function calculate(operation){
  if(operation == '+'){
    output = output + 1
  }
  else if(operation == '-'){
    output = output - 1
  }
  numberElement.textContent = output
}
function reset(){
  output = 0
  numberElement.textContent = output
}

plusButton.addEventListener('click', () => calculate('+'))
minusButton.addEventListener('click', () => calculate('-'))
resetButton.addEventListener('click', reset)
