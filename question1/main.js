const numberElement = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

let num = 1

function handleIncrease() {
  num++
  numberElement.textContent = num
}

function handleReset(){
  num = 0
  numberElement.textContent = num
}

function handleDecrease(number) {
  num--
  numberElement.textContent = num
}

resetButton.addEventListener('click', handleReset)
plusButton.addEventListener('click', handleIncrease)
minusButton.addEventListener('click', handleDecrease)
