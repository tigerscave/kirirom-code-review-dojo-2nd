const cokeDiv = document.getElementById('cocaCola')
const angkorBeerDiv = document.getElementById('angkorBeer')
const moringaLunchDiv = document.getElementById('moringaLunch')
const bookDiv = document.getElementById('book')
const itemDisplay = document.getElementById('purchaseGoodsName')
const itemPrice = document.getElementById('purchaseGoodsPrice')
const gonnaPayInput = document.getElementById('paymentInput')
const calculateButton = document.getElementById('calculateButton')
const changeDisplay = document.getElementById('calculatedChange')

cokeDiv.addEventListener('click', ()=>display('Coca-cola', 1.15))
angkorBeerDiv.addEventListener('click', ()=>display('Angkor Beer', 2.25))
moringaLunchDiv.addEventListener('click', ()=>display('Moringa Lunch', 3.5))
bookDiv.addEventListener('click', ()=>display('Book', 4.5))
calculateButton.addEventListener('click', ()=>calculateChange())

function display(itemName, price) 
{
    itemDisplay.textContent = itemName
    itemPrice.textContent = price
    gonnaPayInput.value = ""
    changeDisplay.textContent = "" 
}

function calculateChange()
{
    let inputPrice = Number(gonnaPayInput.value)
    let changeInUSD = inputPrice - Number(itemPrice.textContent)
    let changeInKHR = changeInUSD * 4091

    changeDisplay.textContent = changeInKHR.toFixed(2)
}

