const number = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
let output = 0

function calculate(calculation)
{
  if(calculation == 'plus')
  {
    output += 1
    number.textContent = output
  }
  else if(calculation == 'minus')
  {
    output -= 1
    number.textContent = output
  }
  else if(calculation == "reset")
  {
    output = 0 
    number.textContent = output
  }
  else
  {
    number.textContent = "Invalid"
  }
  
}

plusButton.addEventListener('click', () => calculate("plus"))
minusButton.addEventListener('click', () => calculate("minus"))
resetButton.addEventListener('click', () => calculate("reset")) 
