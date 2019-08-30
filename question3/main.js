"use strict"

//write code in here

const cocaColaButton = document.getElementById('cocaCola')
const angkorBeerButton = document.getElementById('angkorBeer')
const moringaLunchButton = document.getElementById('moringaLunch')
const bookButton = document.getElementById('book')
const calculateButton = document.getElementById('calculateButton')

const purchaseGoodsName = document.getElementById('purchaseGoodsName')
const purchaseGoodsPrice = document.getElementById('purchaseGoodsPrice')

const paymentInput = document.getElementById('paymentInput')
const calculatedChange = document.getElementById('calculatedChange')

let selectedGoodItem = ""

function separateContent(good) {
    const goodChildren = good.children
    
    const goodName = goodChildren[0].textContent
    const goodPriceWithDollarSign = goodChildren[1].textContent

    const goodPriceSeparate = goodPriceWithDollarSign.split('$')
    const goodPrice = goodPriceSeparate[1]

    const goodDetail = [goodName, goodPrice]

    return goodDetail
}

function payment(paymentInput) {
    const goodDetail = separateContent(selectedGoodItem)

    const goodPrice = goodDetail[1]
    const paymentInDollar = paymentInput.value

    const paymentResult = paymentInDollar - goodPrice

    const changeInRiels = Math.floor(paymentResult*4091)

    if(changeInRiels < 0) {
        alert("Please enter a higher amount")
    } else {
        calculatedChange.textContent = changeInRiels
    }
}

function selectedGood(good) {
    const goodDetail = separateContent(good)
    const goodName = goodDetail[0]
    const goodPrice = goodDetail[1]

    purchaseGoodsName.textContent = goodName
    purchaseGoodsPrice.textContent = goodPrice

    selectedGoodItem = good
}

cocaColaButton.addEventListener('click', () => selectedGood(cocaColaButton))
angkorBeerButton.addEventListener('click', () => selectedGood(angkorBeerButton))
moringaLunchButton.addEventListener('click', () => selectedGood(moringaLunchButton))
bookButton.addEventListener('click', () => selectedGood(bookButton))
calculateButton.addEventListener('click', () => payment(paymentInput))
