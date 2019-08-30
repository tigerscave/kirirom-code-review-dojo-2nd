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

    if(taxRatio.value >= 60 || taxRatio.value <= 0 || isNaN(taxRatio.value + price.value))
    {
        alert("Invalid tax!")
    }
    
    else 
    {
        let priceValue = parseInt(price.value)
        let taxValue = parseInt(taxRatio.value)
        if(action == 'calculate')
        {
            taxIncludedPrice = parseInt(priceValue + taxValue * priceValue / 100)
            tax = parseInt(taxValue * priceValue / 100)
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
        }
    }
}
CalculateButton.addEventListener('click', () => calculateTax("calculate"))
resetButton.addEventListener('click', () => calculateTax("reset")) 
