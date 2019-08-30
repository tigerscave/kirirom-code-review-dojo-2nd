"use strict"
//write code in here
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const taxPriceElement = document.getElementById('taxPrice')
const taxIncludedPriceElement = document.getElementById('taxIncludedPrice')

function calculateTax() {
	if (taxRatioInput.value >= 0 && taxRatioInput.value <= 60) {
		taxPriceElement.textContent = ((parseInt(priceInput.value) * parseInt(taxRatioInput.value)) / 100) | 0
		taxIncludedPriceElement.textContent = parseInt(taxPriceElement.textContent) + parseInt(priceInput.value)
	}
	else {
		alert("Invalid tax ratio entered")
	}
}

function resetCalculation() {
	taxPriceElement.textContent = "0"
	taxIncludedPriceElement.textContent = "0"
	priceInput.value = ""
	taxRatioInput.value = ""
}

calculateButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', resetCalculation)