"use strict"

const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const number = document.getElementById('number')
const resetButton = document.getElementById('reset')

function minusButtonClick()
{
    number.textContent = Number(number.textContent) - 1
}

function plusButtonClick()
{
    number.textContent = Number(number.textContent) + 1
}

function resetButtonClick()
{
    number.textContent = 0
}

minusButton.addEventListener('click', minusButtonClick)
plusButton.addEventListener('click', plusButtonClick)
resetButton.addEventListener('click', resetButtonClick)
