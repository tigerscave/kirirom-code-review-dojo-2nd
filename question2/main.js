"use strict"

//write code in here

const priceInput = document.getElementById ("priceInput")
const taxInput = document.getElementById ("taxRatioInput")

const calculateButton = document.getElementById ("calculateButton")
const resetButton = document.getElementById ("resetButton")

const taxPrice = document.getElementById("taxPrice")
const taxIncludedPrice = document.getElementById("taxIncludedPrice")

calculateButton.addEventListener('click', () => {
    let price = parseInt(priceInput.value)
    let taxRatio = parseInt(taxInput.value)

    let taxPriceResult = (price * taxRatio) / 100

    taxPrice.textContent = taxPriceResult
    taxIncludedPrice.textContent = price + taxPriceResult

    priceInput.value = null
    taxInput.value = null
})

resetButton.addEventListener('click', () => {
    taxPrice.textContent = 0
    taxIncludedPrice.textContent = 0
})