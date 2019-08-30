'use strict'

//write code in here
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')

const taxPrice = document.getElementById('taxPrice')
const taxIncludedPrice = document.getElementById('taxIncludedPrice')

function calculateTax() {
    const inputPrice = parseInt(priceInput.value)
    const taxRatio = parseInt(taxRatioInput.value)
    if(!validTax(taxRatio)) return  
    let tax = Math.floor((inputPrice * taxRatio) / 100)
    let taxIncluded = inputPrice + tax
    taxPrice.textContent = tax
    taxIncludedPrice.textContent = taxIncluded
}

function reset() {
    taxPrice.textContent = 0
    taxIncludedPrice.textContent = 0
    priceInput.value = ''
    taxRatioInput.value = ''
}
function validTax(taxRatio){
    if(taxRatio<0 || taxRatio>60)
    alert('Invalid tax ratio entered')
    return fasle
}

calculateButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', reset)