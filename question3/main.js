'use strict'

//write code in here
const cocaColaElement = document.getElementById('cocaCola')
const angkorBeerElement = document.getElementById('angkorBeer')
const moringaLunchElement = document.getElementById('moringaLunch')
const bookElement = document.getElementById('book')
const calculateButton = document.getElementById('calculateButton')
const paymentInput = document.getElementById('paymentInput')
const purchaseGoodsName = document.getElementById('purchaseGoodsName')
const purchaseGoodsPrice = document.getElementById('purchaseGoodsPrice')
const calculatedChange = document.getElementById('calculatedChange')
const goods = [
  {
    name: 'cocaCola',
    price: 1.15
  },
  {
    name: 'angkorBeer',
    price: 2.25
  },
  {
    name: 'moringaLunch',
    price: 3.5
  },
  {
    name: 'book',
    price: 4.5
  }
]
const exchangeRate = 4091

let price = 0

function calculateChange() {
  let change = parseInt(paymentInput.value) - price
  change = Math.floor(change * exchangeRate)
  calculatedChange.textContent = change
}
function showGoodDetials(id) {
  paymentInput.value = ''
  calculatedChange.textContent = ''
  for (let i = 0; i < goods.length; i++) {
    if (goods[i].name == id) {
      purchaseGoodsName.textContent = goods[i].name
      purchaseGoodsPrice.textContent = goods[i].price
      price = goods[i].price
    }
  }
}

calculateButton.addEventListener('click', calculateChange)
cocaColaElement.addEventListener('click', () => showGoodDetials('cocaCola'))
angkorBeerElement.addEventListener('click', () => showGoodDetials('angkorBeer'))
moringaLunchElement.addEventListener('click', () => showGoodDetials('moringaLunch'))
bookElement.addEventListener('click', () => showGoodDetials('book'))
