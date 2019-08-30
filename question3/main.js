"use strict"

//write code in here
const addGoodsButton = document.getElementById('addGoodsButton')
const goodsNameInput = document.getElementById('goodsNameInput')
const goodsPriceInput = document.getElementById('goodsPriceInput')
const purchaseGoodsNameEle = document.getElementById('purchaseGoodsName')
const purchaseGoodsPriceEle = document.getElementById('purchaseGoodsPrice')
const calculateButton = document.getElementById('calculateButton')
const calculatedChangeEle = document.getElementById('calculatedChange')
const goodsElements = document.getElementsByClassName('goods')
const paymentInput = document.getElementById('paymentInput')

const onGoodsClicked = (goodsName, price) => {
    purchaseGoodsNameEle.textContent = goodsName
    purchaseGoodsPriceEle.textContent = price
    paymentInput.value = null
}

const onCalculateBtnClicked = () => {
    const paymentVal = paymentInput.value

    if(isNaN(paymentVal) || paymentVal === '') return

    const result = Math.floor((paymentVal -  Number(purchaseGoodsPrice.textContent)) * 4091)
    calculatedChange.innerHTML = result
    paymentInput.value = null
}

for(let i = 0; i < goodsElements.length; i++){
    const goodsName = goodsElements[i].childNodes[1].textContent
    const price = Number(goodsElements[i].childNodes[3].innerHTML.slice(1))
    goodsElements[i].addEventListener('click', () => onGoodsClicked(goodsName, price))
}

calculateButton.addEventListener('click', onCalculateBtnClicked)
