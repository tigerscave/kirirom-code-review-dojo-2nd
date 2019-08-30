const priceInput = document.getElementById("priceInput")
const taxInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const taxprice = document.getElementById("taxPrice")
const total = document.getElementById("taxIncludedPrice")


function calculateTaxPrice(){
	if (parseInt(taxInput.value) > 0 && parseInt(taxInput.value) <= 60){
		taxPrice.textContent = parseInt((parseInt(taxInput.value) * parseInt(priceInput.value)) / 100)
		total.textContent = parseInt(taxPrice.textContent) + parseInt(priceInput.value)
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