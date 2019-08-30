"use strict"

//write code in here
const purchaseNameElement = document.getElementById('purchaseGoodsName')
const purchasePriceElement = document.getElementById('purchaseGoodsPrice')
const calculateButton = document.getElementById('calculateButton')
const calculatedChange = document.getElementById('calculatedChange')
const paymentInputElement = document.getElementById('paymentInput')
const goodsList = document.getElementsByClassName('goods')
const khrExchangeRate = 4091
let goodsPrice = 0

function onGoodsClick(goods) {
    goodsPrice = goods.children[1].textContent
    goodsPrice = parseFloat(goodsPrice.slice(1,goodsPrice.length))
    purchaseNameElement.textContent = goods.children[0].textContent
    purchasePriceElement.textContent = goodsPrice
    paymentInputElement.value = ''
    calculatedChange.textContent = ''
}

function onCalculateChangeClick() {
    const change = parseFloat(paymentInput.value) - goodsPrice
    calculatedChange.textContent = Math.round(change * khrExchangeRate)
    paymentInput.value = ''
}

calculateButton.addEventListener('click', onCalculateChangeClick)
for(let goods of goodsList) {
    goods.addEventListener('click', () => onGoodsClick(goods))
}