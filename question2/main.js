"use strict"

//write code in here
const priceElement = document.getElementById('priceInput')
const taxElement = document.getElementById('taxRatioInput')
const taxButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')
const taxPrice = document.getElementById('taxPrice')
const taxIncludedPrice = document.getElementById('taxIncludedPrice')
let priceNumber = 0
let taxNumber = 0

function calculateTax(){
	if(isNaN(priceElement.value) || isNaN(taxElement.value) || priceElement.value =='' || taxElement.value == '')
	{
		alert("Invalid input entered");
	}
	else
	{
		taxNumber = Math.floor(parseInt(taxElement.value) * parseInt(priceElement.value)/100)
		taxPrice.textContent = taxNumber
		priceNumber = Math.floor(parseInt(priceElement.value) + taxNumber)
		taxIncludedPrice.textContent = priceNumber
		
	}
}

function resetAll(){
	priceElement.value = null
	taxElement.value = null
	taxPrice.textContent = 0
	taxIncludedPrice.textContent = 0
}

taxButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', resetAll)