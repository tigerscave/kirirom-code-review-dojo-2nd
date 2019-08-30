"use strict"

//write code in here
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')

const taxPrice = document.getElementById('taxPrice')
const taxIncludedPrice = document.getElementById('taxIncludedPrice')

const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')

calculateButton.addEventListener('click', () => {
    var price = priceInput.value
    var tax = taxRatioInput.value

    const taxPriceCal = (price * tax) / 100

    price = parseInt(price) + parseInt(taxPriceCal)

    taxPrice.textContent = taxPriceCal
    taxIncludedPrice.textContent = price

    priceInput.value = null
    taxRatioInput.value = null
})

resetButton.addEventListener('click', () => {
    taxPrice.textContent = 0
    taxIncludedPrice.textContent = 0
})