"use strict"
//write code in here

const cocacola = document.getElementById('cocaCola')
const angkorbeer = document.getElementById('angkorBeer')
const moringalunch = document.getElementById('moringaLunch')
const book = document.getElementById('book')
const purchaseName = document.getElementById('purchaseGoodsName')
const purchasePrice = document.getElementById('purchaseGoodsPrice')
const paymentInput = document.getElementById('paymentInput')
const calButton = document.getElementById('calculateButton')
const change = document.getElementById('calculatedChange')

const priceCalculation = (good, price) => () => {
    purchaseName.textContent = good
    purchasePrice.textContent = price
    paymentInput.value = ''
}

function calculation() 
{
    const payment = parseInt(paymentInput.value)
    const goodPrice =parseFloat(purchasePrice.textContent)
    change.textContent = ((payment-goodPrice)*4091).toFixed(2)
}

book.addEventListener('click', PriceCalculation('Book', '4.5'))
moringalunch.addEventListener('click', PriceCalculation('Moringa Lunch', '3.5'))
angkorbeer.addEventListener('click', PriceCalculation('Angkor Beer', '2.25'))
cocacola.addEventListener('click', PriceCalculation('Coca-cola', '1.15'))
calButton.addEventListener('click', () => calculation())