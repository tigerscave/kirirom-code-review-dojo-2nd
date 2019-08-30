//write code in here
const priceInput = document.getElementById("priceInput")
const taxRatioInput = document.getElementById("taxRatioInput")
const calculateButton = document.getElementById("calculateButton")
const resetButton = document.getElementById("resetButton")
const taxPriceDisplay = document.getElementById("taxPrice")
const taxIncludedPriceDisplay = document.getElementById("taxIncludedPrice")

function calculateButtonClick(){
    price = parseFloat(priceInput.value)
    taxRate = parseFloat(taxRatioInput.value)
    tax = (price * taxRate)/100
    taxWithPrice = tax + price

    taxPriceDisplay.textContent = Math.floor(tax)
    taxIncludedPriceDisplay.textContent = Math.floor(taxWithPrice)
}
function resetButtonClick(){
    taxPriceDisplay.textContent = 0
    taxIncludedPriceDisplay.textContent = 0
    clearInput()
}
function clearInput(){
    priceInput.value = ''
    taxRatioInput.value = ''
}
calculateButton.addEventListener("click", calculateButtonClick)
resetButton.addEventListener("click", resetButtonClick)