'use strict'

//write code in here
const priceInput = document.getElementById('priceInput')
const taxInput = document.getElementById('taxRatioInput')
const taxPriceElement = document.getElementById('taxPrice')
const taxIncludedElement = document.getElementById('taxIncludedPrice')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')

function calculateTaxPrice(price, taxValue) {
  validateTaxRatio(taxValue)
  const taxPrice = (price * taxValue) / 100
  const taxIncludedPrice = Math.round(price + taxPrice)

  display(Math.round(taxPrice), taxIncludedPrice, price, taxValue)
}

function resetElements() {
  display(0, 0, '', '')
}

function validateTaxRatio(taxValue) {
  if (taxValue < 0 || taxValue > 60) {
    alert('Invalid tax ratio entered.')
  }
}

function display(tax, priceIncludedTax, priceInputBoxValue, taxInputBoxValue) {
  priceInput.value = priceInputBoxValue
  taxInput.value = taxInputBoxValue
  taxPriceElement.innerHTML = tax
  taxIncludedElement.innerHTML = priceIncludedTax
}

calculateButton.addEventListener('click', () => calculateTaxPrice(parseFloat(priceInput.value), parseFloat(taxInput.value)))
resetButton.addEventListener('click', resetElements)