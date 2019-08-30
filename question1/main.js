const number = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
var output = 0
function doOperation(operation)
{
  if(operation == 'plus')
  {
    output += 1
    number.textContent = output
  }
  else if(operation == 'minus')
  {
    output -= 1
    number.textContent = output
  }
  else if(operation == "reset")
  {
    output = 0 
    number.textContent = output
  }
  else
  {
    number.textContent = "Invalid"
  }
  
}

plusButton.addEventListener('click', () => doOperation("plus"))
minusButton.addEventListener('click', () => doOperation("minus"))
resetButton.addEventListener('click', () => doOperation("reset")) 
