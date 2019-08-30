"use strict"

//write code in here
const cocaCola = document.getElementById('cocaCola')
const angkorBeer = document.getElementById('angkorBeer')
const moringaLunch = document.getElementById('moringaLunch')
const book = document.getElementById('book')
const purchaseGoodsName = document.getElementById('purchaseGoodsName')
const goodsPriceEle = document.getElementById('purchaseGoodsPrice')
const paymentInput = document.getElementById('paymentInput')
const calculateButton = document.getElementById('calculateButton')
const calculatedChange = document.getElementById('calculatedChange')

function calculateChange(){
        const price = Number(goodsPriceEle.textContent)
        const priceInput = Number(paymentInput.value)
        const change = Math.floor((priceInput - price) * 4091)
        calculatedChange.textContent = change
        paymentInput.value = ''
    }
function displayitem(item, price){
    if(item == 'coca'){
        display(item, value)
    }
    else if (item == 'beer'){
        display(item, value)
    }
    else if (item == 'lunch'){
        display(item, value)
    }
    else if (item == 'book'){
        display(item, value)
    }
}
function displayItem(item, price){
    purchaseGoodsName.textContent = item
    purchaseGoodsPrice.textContent = price
    calculatedChange.textContent = ''
    paymentInput.value = ''
}
cocaCola.addEventListener('click', ()=> display('coca', 1.15))
angkorBeer.addEventListener('click', ()=> display('beer', 2.25))
moringaLunch.addEventListener('click', ()=> display('lunch', 3.5))
book.addEventListener('click', ()=> display('book', 4.5))
calculateButton.addEventListener('click', calculateChange)

