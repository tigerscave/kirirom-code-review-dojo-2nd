"use strict"

//write code in here
const cocaColaButton = document.getElementById('cocaCola')
const angkorButton = document.getElementById('angkorBeer')
const moringaButton = document.getElementById('moringaLunch')
const bookButton = document.getElementById('book')
const paymentInput = document.getElementById('paymentInput')
const calculateButton = document.getElementById('calculateButton')
const calculatedChange = document.getElementById('calculatedChange')
let itemElement = document.getElementById('purchaseGoodsName')
let itemPriceElement = document.getElementById('purchaseGoodsPrice')

function buyItems(good,price){
	itemElement.textContent = good
	itemPriceElement.textContent = price

	itemElement.value = good
	itemPriceElement.value = price
}
function calculateChange(){
	let paymentValue = paymentInput.value
	let itemPriceValue = itemPriceElement.value
	
	if(isNaN(paymentValue) || paymentValue == '')
	{
		alert("Invalid input entered");
	}
	else
	{
	let changeInDollars = parseInt(paymentValue) - parseInt(itemPriceValue)
	let changeInRiels = changeInDollars * 4091
	calculatedChange.textContent = changeInRiels
	}
}
cocaColaButton.addEventListener('click', () => buyItems("Coca-Cola", 1.15))
angkorButton.addEventListener('click', () => buyItems("Angkor Beer", 2.25))
moringaButton.addEventListener('click', () => buyItems("Moringa Lunch", 3.5))
bookButton.addEventListener('click', () => buyItems("Book", 4.5))
calculateButton.addEventListener('click', calculateChange)