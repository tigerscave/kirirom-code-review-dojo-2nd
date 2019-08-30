"use strict"

//write code in here
const cocaColaButton = document.getElementById('cocaCola')
const angkorBeerButton = document.getElementById('angkorBeer')
const moringaLunchButton = document.getElementById('moringaLunch')
const bookButton = document.getElementById('book')
const displayGoodsName = document.getElementById('purchaseGoodsName')
const displayGoodsPrice = document.getElementById('purchaseGoodsPrice')
const paymentInput = document.getElementById('paymentInput')
const calculateButton = document.getElementById('calculateButton')
const calculatedChange = document.getElementById('calculatedChange')

function goodsSelect(goodsName, goodsPrice) {
	displayGoodsName.textContent = goodsName
	displayGoodsPrice.textContent = goodsPrice
	paymentInput.value = ""
	calculatedChange.textContent = ""
}

function calculateChange() {
	if (paymentInput.value >= 0) {
		let totalPayment = parseInt(paymentInput.value) * 4091
		let goodsPrice = parseInt(displayGoodsPrice.textContent) * 4091
		calculatedChange.textContent = totalPayment - goodsPrice
	} else {
		alert("Ïnvalid Payment Input")
	}
}

cocaColaButton.addEventListener('click', () => goodsSelect('Coca-cola', 1.15))
angkorBeerButton.addEventListener('click', () => goodsSelect('Angkor Beer', 2.25))
moringaLunchButton.addEventListener('click', () => goodsSelect('Moringa Lunch', 3.5))
bookButton.addEventListener('click', () => goodsSelect('Book', 4.5))
calculateButton.addEventListener('click', calculateChange)
