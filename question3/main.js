"use strict"

//write code in here
const purchaseGoodsName = document.getElementById('purchaseGoodsName')
const purchaseGoodsPrice= document.getElementById('purchaseGoodsPrice')
const calculateButton = document.getElementById('calculateButton')
const calculatedChange = document.getElementById('calculatedChange')
const paymentInput = document.getElementById('paymentInput')
const goodsList = document.getElementsByClassName('goods')
let khrExchangeRate = 4091
let clickedGoods = ''
let goodsPrice = 0

function onGoodsClick(goods) {
    let goodsId = getGoodsId(goods)
    clickedGoods = document.getElementById(goodsId)
    goodsPrice = clickedGoods.children[1].textContent
    goodsPrice = parseFloat(goodsPrice.slice(1,goodsPrice.length))
    purchaseGoodsName.textContent = clickedGoods.children[0].textContent
    purchaseGoodsPrice.textContent = goodsPrice
    paymentInput.value = ''
    calculatedChange.textContent = ''
}

function onCalculateChangeClick() {
    let change = parseFloat(paymentInput.value) - goodsPrice
    calculatedChange.textContent = Math.round(change * khrExchangeRate)
    paymentInput.value = ''
}

function getGoodsId(goods) {
    return goods.id
}

calculateButton.addEventListener('click', onCalculateChangeClick)
for(let goods of goodsList) {
    goods.addEventListener('click', () => onGoodsClick(goods))
}