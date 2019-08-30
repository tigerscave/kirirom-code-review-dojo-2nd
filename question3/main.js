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

for(let goodsEle of goodsElements){
    const goodsName = goodsEle.children[0].textContent
    const price = Number(goodsEle.children[1].innerHTML.slice(1))
    goodsEle.addEventListener('click', () => onGoodsClicked(goodsName, price))
}

calculateButton.addEventListener('click', onCalculateBtnClicked)
