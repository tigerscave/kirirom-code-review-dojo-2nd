//write code in here
const priceInput = document.getElementById("priceInput")
const taxRatioInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const taxPriceDisplay = document.getElementById("taxPrice")
const taxIncludedPriceDisplay = document.getElementById("taxIncludedPrice")

function calculateButtonClick() {
    const price = parseFloat(priceInput.value)
    const taxRate = parseFloat(taxRatioInput.value)
    const tax = (price * taxRate) / 100
    const taxWithPrice = tax + price

    taxPriceDisplay.textContent = Math.floor(tax)
    taxIncludedPriceDisplay.textContent = Math.floor(taxWithPrice)
}
function resetButtonClick() {
    taxPriceDisplay.textContent = 0
    taxIncludedPriceDisplay.textContent = 0
    priceInput.value = ''
    taxRatioInput.value = ''
}


calculateButton.addEventListener("click", calculateButtonClick)
resetButton.addEventListener("click", resetButtonClick)