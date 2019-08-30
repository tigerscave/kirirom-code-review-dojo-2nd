"use strict"

//write code in here

const price = document.getElementById('priceInput')
const taxRatio = document.getElementById('taxRatioInput')
const calculateButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')
const taxOutput = document.getElementById('taxPrice')
const total = document.getElementById('taxIncludedPrice')

function calculate(){
  let tax = 0
  let totalPrice = 0
  if(price.value == "" && taxRatio.value == ""){
    alert("Please input price and tax ratio")
  }
  else if(price.value == ""){
    alert("Please input price")
  }
  else if(taxRatio.value == ""){
    alert("Please input tax ratio")
  }
  else{
    tax = parseInt(price.value) * (parseInt(taxRatio.value)/100)
    totalPrice = parseInt(price.value) + tax
    taxOutput.textContent = parseInt(tax)
    total.textContent = parseInt(totalPrice)
  }
}
function reset(){
  taxRatio.value = ""
  price.value = ""
  taxOutput.textContent = "0"
  total.textContent = "0"
}

calculateButton.addEventListener('click', calculate)
resetButton.addEventListener('click', reset)
