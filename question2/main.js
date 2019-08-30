"use strict"

//write code in here
const priceInput = document.getElementById('priceInput')
const taxInput = document.getElementById('taxRatioInput')
const calculateBtn = document.getElementById('calculateButton')
const resetBtn = document.getElementById('resetButton')
const taxPriceEle = document.getElementById('taxPrice')
const taxIncludedPriceEle = document.getElementById('taxIncludedPrice')

const clearInput = () => {
    priceInput.value = null
    taxInput.value = null
}

const onCalculateTaxBtnClicked = () => {
    let taxInputValue =  parseInt(taxInput.value)/100 || false
    let priceInputValue = Math.floor(priceInput.value) || false
    let totalPrice = Math.floor(priceInputValue + (priceInputValue * taxInputValue))

    if(!(taxInputValue || priceInputValue) || isNaN(taxInputValue) || isNaN(priceInputValue))
        return alert('Input must be a number')

    taxPriceEle.textContent = taxInputValue
    taxIncludedPriceEle.textContent = totalPrice
    clearInput()
}

const onResetBtnClicked = () => {
    taxPriceEle.textContent = '0'
    taxIncludedPriceEle.textContent = '0'
    clearInput()
}

calculateBtn.addEventListener('click', onCalculateTaxBtnClicked)
resetBtn.addEventListener('click', onResetBtnClicked)


