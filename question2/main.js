"use strict"
//write code in here
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const taxPriceElement = document.getElementById('taxPrice')
const totalPriceElement = document.getElementById('taxIncludedPrice')

function calculateTax() {
	const taxRatio = parseInt(taxRatioInput.value)
	const price = parseInt(priceInput.value)

	if (taxRatio >= 0 && taxRatio <= 60) {
		taxPriceElement.textContent = ((price * taxRatio) / 100) | 0
		totalPriceElement.textContent = parseInt(taxPriceElement.textContent) + price
	}
	else {
		alert("Invalid tax ratio entered")
	}
}

function resetCalculation() {
	taxPriceElement.textContent = "0"
	totalPriceElement.textContent = "0"
	priceInput.value = ""
	taxRatioInput.value = ""
}

calculateButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', resetCalculation)