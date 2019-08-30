const number = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
let output = 0

function calculate(operator)
{
  if(operator == 'plus')
  {
    output += 1
    number.textContent = output
  }
  else if(operator == 'minus')
  {
    output -= 1
    number.textContent = output
  }
  else if(operator == "reset")
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
