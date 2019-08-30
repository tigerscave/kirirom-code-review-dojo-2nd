"use strict"

//write code in here
const addGoodsButton = document.getElementById('addGoodsButton')
const goodsNameInput = document.getElementById('goodsNameInput')
const goodsPriceInput = document.getElementById('goodsPriceInput')
const purchaseGoodsName = document.getElementById('purchaseGoodsName')
const purchaseGoodsPrice = document.getElementById('purchaseGoodsPrice')
const calculateButton = document.getElementById('calculateButton')
const calculatedChange = document.getElementById('calculatedChange')
const goodsElements = document.getElementsByClassName('goods')
const paymentInput = document.getElementById('paymentInput')

const onGoodsClicked = (goodsName, price) => {
    purchaseGoodsName.textContent = goodsName
    purchaseGoodsPrice.textContent = price
    paymentInput.value = null
}

const onCalculateBtnClicked = () => {
    let paymentVal = paymentInput.value
    if(isNaN(paymentVal) || paymentVal === '') return
    let result = Math.floor((paymentVal -  Number(purchaseGoodsPrice.textContent)) * 4091)
    calculatedChange.innerHTML = result
    paymentInput.value = null
}

for(let i = 0; i < goodsElements.length; i++){
    let goodsName = goodsElements[i].childNodes[1].textContent
    let goodsPrice = goodsElements[i].childNodes[3].innerHTML.slice(1)
    goodsElements[i].addEventListener('click', () => onGoodsClicked(goodsName, goodsPrice))
}

calculateButton.addEventListener('click', onCalculateBtnClicked)
