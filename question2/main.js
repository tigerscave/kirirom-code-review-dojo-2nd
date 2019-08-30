const priceInput = document.getElementById("priceInput")
const taxInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const taxprice = document.getElementById("taxPrice")
const total = document.getElementById("taxIncludedPrice")


function calculateTaxPrice(){
	const taxValue = parseInt(taxInput.value)
	const priceValue = parseInt(priceInput.value)
	if (taxValue > 0 && taxValue <= 60){
		taxPrice.textContent = parseInt((taxValue * priceValue) / 100)
		total.textContent = parseInt(taxPrice.textContent) + priceValue
	}
	else{
		alert("Invalid tax radio entered")
	}
}

function reset(){
	priceInput.value = ""
	taxInput.value = ""
	taxPrice.textContent = 0
	total.textContent = 0
}

calculateButton.addEventListener('click', calculateTaxPrice)
resetButton.addEventListener('click', reset)