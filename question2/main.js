"use strict"

//write code in here
const priceInput = document.getElementById('priceInput')
const taxInput = document.getElementById('taxRatioInput')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')
const taxPrice = document.getElementById('taxPrice')
const taxIncludedPrice = document.getElementById('taxIncludedPrice')
let price = 0
let tax = 0

function calculateButtonClick()
{
    price = Number(priceInput.value)
    tax = Number(taxInput.value)
    if(!validateTax(tax)) return
    taxPrice.textContent = Math.floor((tax*price)/100)
    taxIncludedPrice.textContent = Math.floor(price + Number(taxPrice.textContent))
}

function resetButtonClick()
{
    taxPrice.textContent = 0
    taxIncludedPrice.textContent = 0
    taxInput.value = ''
    priceInput.value = ''
}

function validateTax(tax)
{
    if(tax<0 || tax>60)
    {
        alert("Invalid Tax Ratio")
        return false
    }
}

calculateButton.addEventListener('click', calculateButtonClick)
resetButton.addEventListener('click', resetButtonClick)