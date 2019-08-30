const priceInput = document.getElementById("priceInput")
const taxInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const taxprice = document.getElementById("taxPrice")
const total = document.getElementById("taxIncludedPrice")


function calculateTaxPrice(){
	const taxValue = parseInt(taxInput.value)
	const priceValue = parseInt(priceInput.value)
	let taxpriceValue = 0
	if (taxValue > 0 && taxValue <= 60){
		taxpriceValue =  Math.floor((taxValue * priceValue) / 100)
		taxprice.textContent = taxpriceValue
		total.textContent = taxpriceValue + priceValue
	}
	else{
		alert("Invalid tax radio entered")
	}
}

function reset(){
	priceInput.value = ""
	taxInput.value = ""
	taxprice.textContent = 0
	total.textContent = 0
}

calculateButton.addEventListener('click', calculateTaxPrice)
resetButton.addEventListener('click', reset)