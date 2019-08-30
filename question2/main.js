"use strict"

//write code in here
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')

const taxPrice = document.getElementById('taxPrice')
const taxIncludedPrice = document.getElementById('taxIncludedPrice')

let tax = 0
let taxIncluded = 0

function calculateTax() {
    const inputPrice = parseInt(priceInput.value)
    const taxRatio = parseInt(taxRatioInput.value)
    tax = Math.floor((inputPrice * taxRatio)/100)
    taxIncluded = inputPrice + tax
    taxPrice.textContent = (tax).toString()
    taxIncludedPrice.textContent = (taxIncluded).toString()
}

function reset() {
    taxPrice.textContent = '0'
    taxIncludedPrice.textContent = '0'
    priceInput.value = ''
    taxRatioInput.value = ''
}


calculateButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', reset)