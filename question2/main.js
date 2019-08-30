"use strict"

//write code in here

const priceInput = document.getElementById ("priceInput")
const taxInput = document.getElementById ("taxRatioInput")

const calculateButton = document.getElementById ("calculateButton")
const resetButton = document.getElementById ("resetButton")

const taxPrice = document.getElementById("taxPrice")
const taxIncludedPrice = document.getElementById("taxIncludedPrice")

function clearInput () {
    priceInput.value = null
    taxInput.value = null
}

calculateButton.addEventListener('click', () => {

    if(isNaN(priceInput.value) || isNaN(taxInput.value) || priceInput.value == '' || taxInput.value == '') {
        alert('Invalid Input')
    } 

    const price = parseInt(priceInput.value)
    const taxRatio = parseInt(taxInput.value)

    const taxPriceResult = Math.floor((price * taxRatio) / 100)

    taxPrice.textContent = taxPriceResult
    taxIncludedPrice.textContent = Math.floor(price + taxPriceResult)

    clearInput()
})

resetButton.addEventListener('click', () => {
    taxPrice.textContent = 0
    taxIncludedPrice.textContent = 0

    clearInput()
})