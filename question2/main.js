"use strict"

const priceInput = document.getElementById("priceInput")
const taxRatioInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const taxPriceElement = document.getElementById("taxPrice")
const taxIncludedPriceElement = document.getElementById("taxIncludedPrice")

function calculateButtonClick() {
    let priceInputValue = parseInt(priceInput.value)
    let taxRatioInputValue = parseInt(taxRatioInput.value)

    if(isNaN(priceInputValue)) {
        priceInputValue = 0
    }
    else if(isNaN(taxRatioInputValue)) {
        taxRatioInputValue = 0
    }

    let taxPrice = parseInt(priceInputValue * (taxRatioInputValue/ 100))
    taxPriceElement.textContent = taxPrice
    taxIncludedPriceElement.textContent = priceInputValue + taxPrice
}

function resetButtonClick(){
    priceInput.value = ""
    taxRatioInput.value = ""
    taxPriceElement.textContent = 0
    taxIncludedPriceElement.textContent = 0
}

calculateButton.addEventListener('click', calculateButtonClick)
resetButton.addEventListener('click', resetButtonClick)