const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
var displayNum = document.getElementById('number')

plusButton.addEventListener('click', ()=>clickButton('plus'))
minusButton.addEventListener('click', ()=>clickButton('minus'))
resetButton.addEventListener('click', ()=>clickButton('reset'))

let num = 0
function clickButton(buttonName)
{
    if(buttonName == 'plus')
    {
        num = num + 1
        displayNum.textContent = num
    }    
    else if(buttonName == 'minus')
    {
        num = num - 1
        displayNum.textContent = num
    }    
    else
    {
        num = 0
        displayNum.textContent = num
    }
}





