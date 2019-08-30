'use strict'

//write code in here
let tax = 0
let taxIncludedPrice = 0

const taxPriceElement = document.getElementById('taxPrice')
const taxIncludedPriceElement = document.getElementById('taxIncludedPrice')
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')

function calculate() {
  tax = parseInt(priceInput.value) * (parseInt(taxRatioInput.value) / 100)
  tax = Math.round(parseInt(tax))
  taxIncludedPrice = parseInt(priceInput.value) + tax

  taxPriceElement.textContent = tax
  taxIncludedPriceElement.textContent = taxIncludedPrice
  priceInput.value = ''
  taxRatioInput.value = ''
}
function reset() {
  tax = 0
  taxIncludedPrice = 0

  taxPriceElement.textContent = tax
  taxIncludedPriceElement.textContent = taxIncludedPrice
  priceInput.value = ''
  taxRatioInput.value = ''
}

calculateButton.addEventListener('click', calculate)
resetButton.addEventListener('click', reset)
