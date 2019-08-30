"use strict"

//write code in here
const priceInput = document.getElementById('priceInput')
const taxInput = document.getElementById('taxRatioInput')
const calculateBtn = document.getElementById('calculateButton')
const resetBtn = document.getElementById('resetButton')
const taxPrice = document.getElementById('taxPrice')
const taxIncludedPrice = document.getElementById('taxIncludedPrice')

const clearInput = () => {
    priceInput.value = null
    taxInput.value = null
}

const onCalculateTaxBtnClicked = () => {
    let taxInputValue =  parseInt(taxInput.value) || 0
    let priceInputValue = parseInt(priceInput.value) || 0
    let totalPrice = Math.floor(priceInputValue + (priceInputValue * taxInputValue/100))
    taxPrice.textContent = taxInputValue
    taxIncludedPrice.textContent = totalPrice
    clearInput()
}

const onBtnResetClicked = () => {
    taxPrice.textContent = '0'
    taxIncludedPrice.textContent = '0'
    clearInput()
}

calculateBtn.addEventListener('click', onCalculateTaxBtnClicked)
resetBtn.addEventListener('click', onBtnResetClicked)


