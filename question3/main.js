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
        purchaseGoodsName.textContent = 'Coca-Cola'
        purchaseGoodsPrice.textContent = price
        calculatedChange.textContent = ''
        paymentInput.value = ''
    }
    else if (item == 'beer'){
        purchaseGoodsName.textContent = 'Angkor Beer'
        purchaseGoodsPrice.textContent = price
        calculatedChange.textContent = ''
        paymentInput.value = ''
    }
    else if (item == 'lunch'){
        purchaseGoodsName.textContent = 'Moringa Lunch'
        purchaseGoodsPrice.textContent = price
        calculatedChange.textContent = ''
        paymentInput.value = ''
    }
    else if (item == 'book'){
        purchaseGoodsName.textContent = 'Book'
        purchaseGoodsPrice.textContent = price
        calculatedChange.textContent = ''
        paymentInput.value = ''
    }
}
cocaCola.addEventListener('click', ()=> displayitem('coca', 1.15))
angkorBeer.addEventListener('click', ()=> displayitem('beer', 2.25))
moringaLunch.addEventListener('click', ()=> displayitem('lunch', 3.5))
book.addEventListener('click', ()=> displayitem('book', 4.5))
calculateButton.addEventListener('click', calculateChange)

