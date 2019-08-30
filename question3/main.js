"use strict"

const colaCola = document.getElementById("cocaCola")
const angkorBeer = document.getElementById("angkorBeer")
const moringaLunch = document.getElementById("moringaLunch")
const book = document.getElementById("book")

const purchaseGoodsNameDisplay = document.getElementById("purchaseGoodsName")
const purchaseGoodsPriceDisplay = document.getElementById("purchaseGoodsPrice")
const paymentInput = document.getElementById("paymentInput")
const calculateButton = document.getElementById("calculateButton")
const calculatedChange = document.getElementById("calculatedChange")

function display(goodsName, goodsPrice) {
    purchaseGoodsNameDisplay.textContent = goodsName
    purchaseGoodsPriceDisplay.textContent = goodsPrice
    calculatedChange.textContent = 0
    paymentInput.value = ""
}

function calculatedChangeClick() { 
    calculatedChange.textContent = parseInt((paymentInput.value - purchaseGoodsPriceDisplay.textContent) * 4091)
}

colaCola.addEventListener('click', () => display("Coca-Cola", 1.15))
angkorBeer.addEventListener('click', () => display("Angkor Beer", 2.25))
moringaLunch.addEventListener('click', () => display("Moringa Lunch", 3.5))
book.addEventListener('click', () => display("Book", 4.5))
calculateButton.addEventListener('click', calculatedChangeClick)