"use strict"

//write code in here

const cocaColaBtn = document.getElementById('cocaCola')
const angkorBtn = document.getElementById('angkorBeer')
const moringaLunchBtn = document.getElementById('moringaLunch')
const purchaseGoodsPrice = document.getElementById('purchaseGoodsPrice')
const bookBtn = document.getElementById('book')
const input = document.getElementById('paymentInput')
const purchaseName = document.getElementById('purchaseGoodsName')
const calculatedChange = document.getElementById('calculatedChange')
function priceShow (goods,price) 
{
    purchaseName.textContent = goods
    purchaseGoodsPrice.textContent = price   
}


function calculate()
{
    let val = parseInt(input.val)
    calculatedChange.textContent = 
}

cocaColaBtn.addEventListener('click',()=>priceShow('cocaCola', '1.15'))
angkorBtn.addEventListener('click',()=>priceShow('angkorBeer', '2.25'))
moringaLunchBtn.addEventListener('click',()=>priceShow('moringaLunch','3.5'))
bookBtn.addEventListener('click',()=>priceShow('book','4.5'))
