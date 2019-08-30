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

function cocaColaClick() {
	displayGoodsName.textContent = "Coca-cola"
	displayGoodsPrice.textContent = 1.15
	paymentInput.value = ""
}

function angkorBeerClick() {
	displayGoodsName.textContent = "Angkor Beer"
	displayGoodsPrice.textContent = 2.25
	paymentInput.value = ""
}

function moringaLunchClick() {
	displayGoodsName.textContent = "Moringa Lunch"
	displayGoodsPrice.textContent = 3.5
	paymentInput.value = ""
}

function bookClick() {
	displayGoodsName.textContent = "Book"
	displayGoodsPrice.textContent = 4.5
	paymentInput.value = ""
}

function calculateChange() {
	if (paymentInput.value >= 0) {
		let totalPayment = parseInt(paymentInput.value) * 4091
		let goodsPrice = parseInt(displayGoodsPrice.textContent) * 4091
		calculatedChange.textContent = totalPayment - goodsPrice
	} else {
		alert(Ïnvalid Payment Input)
	}
}

cocaColaButton.addEventListener('click', cocaColaClick)
angkorBeerButton.addEventListener('click', angkorBeerClick)
moringaLunchButton.addEventListener('click', moringaLunchClick)
bookButton.addEventListener('click', bookClick)
calculateButton.addEventListener('click', calculateChange)
