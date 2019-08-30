"use strict"

//write code in here
const priceElement = document.getElementById('priceInput')
const taxElement = document.getElementById('taxRatioInput')
const taxButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')
const taxPriceElement = document.getElementById('taxPrice')
const taxIncludedPriceElement = document.getElementById('taxIncludedPrice')

function calculateTax(){
	let priceValue = priceElement.value
	let taxValue = taxElement.value
	if(isNaN(priceValue) || isNaN(taxValue) || taxValue == '' || priceValue == '')
	{
		alert("Invalid input entered");
	}
	else
	{
		let taxPrice = Math.floor(parseInt(taxValue) * parseInt(priceValue)/100)
		let includedTaxPrice = Math.floor(parseInt(priceValue) + taxPrice)	
		taxPriceElement.textContent = taxPrice
		taxIncludedPriceElement.textContent = includedTaxPrice
		
	}
}

function resetAll(){
	priceElement.value = null
	taxElement.value = null
	taxPriceElement.textContent = 0
	taxIncludedPriceElement.textContent = 0
}

taxButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', resetAll)