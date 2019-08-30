"use strict"

//write code in here
const priceInput = document.getElementById("priceInput")
const taxRatioInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const displayTaxPrice = document.getElementById("taxPrice")
const displayTaxIncludedPrice = document.getElementById("taxIncludedPrice")

let taxPrice = 0
let totalPrice = 0

function onClickCalcualteButton(){
	if(taxRatioInput.value >= 0 && taxRatioInput <=60){
		taxPrice = Math.round((priceInput.value * taxRatioInput.value) / 100)
    	totalPrice = taxPrice + parseInt(priceInput.value)
	    displayTaxPrice.textContent = taxPrice
    	displayTaxIncludedPrice.textContent = totalPrice
	}
	else{
		alert("Invalid tax ratio input")
	}
    
}

function onClickReset(){
    displayTaxPrice.textContent = 0 
    displayTaxIncludedPrice.textContent = 0
    priceInput.value = ""
    taxRatioInput.value = ""
}

calculateButton.addEventListener("click", onClickCalcualteButton)
resetButton.addEventListener("click", onClickReset)