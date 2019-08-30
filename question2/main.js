'use strict'

//write code in here
const taxPriceElement = document.getElementById('taxPrice')
const taxIncludedPriceElement = document.getElementById('taxIncludedPrice')
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')

function calculate() {
  let tax = parseInt(priceInput.value) * (parseInt(taxRatioInput.value) / 100)
  tax = Math.round(parseInt(tax))
  let taxIncludedPrice = parseInt(priceInput.value) + tax

  taxPriceElement.textContent = tax
  taxIncludedPriceElement.textContent = taxIncludedPrice
  priceInput.value = ''
  taxRatioInput.value = ''
}
function reset() {
  taxPriceElement.textContent = 0
  taxIncludedPriceElement.textContent = 0
  priceInput.value = ''
  taxRatioInput.value = ''
}

calculateButton.addEventListener('click', calculate)
resetButton.addEventListener('click', reset)
