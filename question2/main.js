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

    if(taxRatioInputValue < 0 || taxRatioInputValue > 60 || isNaN(taxRatioInputValue)) {
        alert("Invalid tax")
        resetButtonClick()
        return
    }
    else if(isNaN(priceInputValue)) {
        alert("Invalid price")
        resetButtonClick()
        return
    }
    else {
        let taxPrice = parseInt(priceInputValue * (taxRatioInputValue / 100))
        taxPriceElement.textContent = taxPrice
        taxIncludedPriceElement.textContent = priceInputValue + taxPrice
    }    
}

function resetButtonClick() {
    priceInput.value = ""
    taxRatioInput.value = ""
    taxPriceElement.textContent = 0
    taxIncludedPriceElement.textContent = 0
}

calculateButton.addEventListener('click', calculateButtonClick)
resetButton.addEventListener('click', resetButtonClick)