const priceInput = document.getElementById('priceInput')
const taxInput = document.getElementById('taxRatioInput')
const calculateTaxButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')
const taxDisplay = document.getElementById('taxPrice')
const taxPriceDisplay = document.getElementById('taxIncludedPrice')



calculateTaxButton.addEventListener('click', calculateTax)
resetButton.addEventListener('click', reset)


function calculateTax(){
    var price = Number(priceInput.value)
    var tax = Number(taxInput.value)

    var taxResult = Math.round(price * tax / 100)
    var taxPriceResult = price + taxResult

    taxDisplay.textContent = taxResult
    taxPriceDisplay.textContent = taxPriceResult
}

function reset(){
    taxDisplay.textContent = 0
    taxPriceDisplay.textContent = 0

    priceInput.value = ""
    taxInput.value = ""
}