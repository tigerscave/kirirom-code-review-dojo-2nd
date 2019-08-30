'use strict'

// Goods
const cocaColaItem = document.getElementById('cocaCola')
const angkorBeerItem = document.getElementById('angkorBeer')
const moringaLunchItem = document.getElementById('moringaLunch')
const bookServiceItem = document.getElementById('book')

// Elements
const goodsNameElement = document.getElementById('purchaseGoodsName')
const goodsPriceElement = document.getElementById('purchaseGoodsPrice')
const calculatedChangeElement = document.getElementById('calculatedChange')

// Input Box
const paymentInput = document.getElementById('paymentInput')

// Button
const calculateChangeButton = document.getElementById('calculateButton')

const todayExchangeRate = 4091
let selectedGoodsPrice = 0

function displayProductNameAndPrice(product, price) {
  paymentInput.value = ''
  goodsNameElement.innerHTML = product
  goodsPriceElement.innerHTML = price
  selectedGoodsPrice = price
}

function calculateChange(paymentInput) {
  const changeAmount = Math.round((paymentInput - selectedGoodsPrice) * todayExchangeRate)
  calculatedChangeElement.innerHTML = changeAmount
}

cocaColaItem.addEventListener('click', () => displayProductNameAndPrice("Coca-cola", "1.15"))
angkorBeerItem.addEventListener('click', () => displayProductNameAndPrice("Angkor Beer", "2.25"))
moringaLunchItem.addEventListener('click', () => displayProductNameAndPrice("Moringa Lunch", "3.5"))
bookServiceItem.addEventListener('click', () => displayProductNameAndPrice("Book", "4.5"))
calculateChangeButton.addEventListener('click', () => calculateChange(parseFloat(paymentInput.value)))