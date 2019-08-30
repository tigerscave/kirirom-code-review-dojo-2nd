"use strict"

//write code in here
const cocaColaButton = document.getElementById("cocaCola")
const angkorBeerButton = document.getElementById("angkorBeer")
const moringaLunchButton = document.getElementById("moringaLunch")
const bookButton = document.getElementById("book")
const displayItemName = document.getElementById("purchaseGoodsName")
const displayItemPrice = document.getElementById("purchaseGoodsPrice")
const paymentInput = document.getElementById("paymentInput")
const calculateChangeButton = document.getElementById("calculateButton")
const displayChange = document.getElementById("calculatedChange")
let change = 0
let itemPrice = 0

function onCocaColaButtonClick(){
	itemPrice = 1.15
	displayItemName.textContent = "Coca-cola"
	displayItemPrice.textContent = itemPrice
	paymentInput.value = ""
	displayChange.textContent = ""
}

function onAngkorBeerButtonClick(){
	itemPrice = 2.25
	displayItemName.textContent = "Angkor Beer"
	displayItemPrice.textContent = itemPrice
	paymentInput.value = ""
	displayChange.textContent = ""
}

function onMoringaLunchButtonClick(){
	itemPrice = 3.5
	displayItemName.textContent = "Moringa Lunch"
	displayItemPrice.textContent = itemPrice
	paymentInput.value = ""
	displayChange.textContent = ""
}

function onBookButtonClick(){
	itemPrice = 4.5
	displayItemName.textContent = "Book"
	displayItemPrice.textContent = itemPrice
	paymentInput.value = ""
	displayChange.textContent = ""
}

function onCalculateChangeButtonClick(){
	change = Math.round(parseInt(paymentInput.value) - itemPrice) * 4091 
	displayChange.textContent = change
}

cocaColaButton.addEventListener("click", onCocaColaButtonClick)
angkorBeerButton.addEventListener("click", onAngkorBeerButtonClick)
moringaLunchButton.addEventListener("click", onMoringaLunchButtonClick)
bookButton.addEventListener("click", onBookButtonClick)
calculateChangeButton.addEventListener("click", onCalculateChangeButtonClick)