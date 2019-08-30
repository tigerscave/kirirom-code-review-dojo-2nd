const count = document.getElementById('number')
const increase = document.getElementById('plus')
const decrease = document.getElementById('minus')
const reset = document.getElementById('reset')

var num = 1

function handleIncrease() {
  num++
  count.textContent = num
}

function handleReset(){
  num = 0
  count.textContent = num
}

function handleDecrease(number) {
  num--
  count.textContent = num
}

reset.addEventListener('click', handleReset)
increase.addEventListener('click', handleIncrease)
decrease.addEventListener('click', handleDecrease)
