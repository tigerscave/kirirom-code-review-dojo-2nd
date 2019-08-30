const price = document.getElementById('priceInput')
const taxRatio = document.getElementById('taxRatioInput')
const resetButton = document.getElementById('resetButton')
const CalculateButton = document.getElementById('calculateButton')
const taxOutput = document.getElementById('taxPrice')
const totalPrice = document.getElementById('taxIncludedPrice')

function calculateTax(action)
{
    let tax = 0
    let taxIncludedPrice = 0
	if(action == 'calculate')
	{
		taxIncludedPrice = parseInt(parseInt(price.value) + parseInt(taxRatio.value) * parseInt(price.value) / 100)
        tax = parseInt(parseInt(taxRatio.value) * parseInt(price.value) / 100)
        totalPrice.textContent = taxIncludedPrice
        taxOutput.textContent = tax
	}
	else if (action == 'reset')
	{
        tax = 0
        taxIncludedPrice = 0
        taxOutput.textContent = tax
        totalPrice.textContent = taxIncludedPrice
        document.getElementById('priceInput').value = "" 
        document.getElementById('taxRatioInput').value = ""
        // price.placeholder = "price"
        // taxRatio.placeholder = "tax(%)"
    }
}
CalculateButton.addEventListener('click', () => calculateTax("calculate"))
resetButton.addEventListener('click', () => calculateTax("reset")) 
