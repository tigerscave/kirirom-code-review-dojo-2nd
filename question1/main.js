"use strict"

//write code in here
let initNum = 0
const number = document.getElementById('number')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const resetBtn = document.getElementById('reset')

const onBtnClicked = (operator) => () => {
  if (operator === '+') number.textContent = (++initNum).toString()
  else if(operator === '-') number.textContent = (--initNum).toString()
  else {
    initNum = 0
    number.textContent = '0'
  }
}

plusBtn.addEventListener('click', onBtnClicked('+'))
minusBtn.addEventListener('click', onBtnClicked('-'))
resetBtn.addEventListener('click', onBtnClicked(''))