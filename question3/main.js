
// const goodsList = document.getElementById("goodsList")
// const addGoodsButton = document.getElementById("addGoodsButton")
// const goodsNameInput = document.getElementById("goodsNameInput")
// const goodsPriceInput = document.getElementById("goodsPriceInput")

const cocaCola = document.getElementById("cocaCola")
const angkorBeer = document.getElementById("angkorBeer")
const moringaLunch = document.getElementById("moringaLunch")
const purchaseGoodsName = document.getElementById("purchaseGoodsName")
const purchaseGoodsPrice = document.getElementById("purchaseGoodsPrice")
const paymentInput = document.getElementById("paymentInput")
const calculateButton = document.getElementById("calculateButton")
const calculatedChange = document.getElementById("calculatedChange")
const book = document.getElementById("book")

var goodsName
var goodsPrice = cocaCola.lastElementChild.textContent
function cocaColaClick() {
    goodsName = cocaCola.firstElementChild.textContent
    goodsPrice = cocaCola.lastElementChild.textContent
    purchaseGoodsName.textContent = goodsName
    purchaseGoodsPrice.textContent = goodsPrice.substr(1)

}
function angkorBeerClick() {
    goodsName = angkorBeer.firstElementChild.textContent
    goodsPrice = angkorBeer.lastElementChild.textContent
    purchaseGoodsName.textContent = goodsName
    purchaseGoodsPrice.textContent = goodsPrice.substr(1)
    clearPayment()
}
function moringaLunchClick() {
    goodsName = moringaLunch.firstElementChild.textContent
    goodsPrice = moringaLunch.lastElementChild.textContent
    purchaseGoodsName.textContent = goodsName
    purchaseGoodsPrice.textContent = goodsPrice.substr(1)
    clearPayment()
}
function bookClick() {
    goodsName = book.firstElementChild.textContent
    goodsPrice = book.lastElementChild.textContent
    purchaseGoodsName.textContent = goodsName
    purchaseGoodsPrice.textContent = goodsPrice.substr(1)
    clearPayment()
}
function calculateButtonClick() {
    let payment = parseFloat(paymentInput.value)
    let changePrice = (payment - parseFloat(goodsPrice.substr(1))) * 4091
    calculatedChange.textContent = changePrice
}
function clearPayment() {
    paymentInput.value = ''
}
cocaCola.addEventListener("click", cocaColaClick)
angkorBeer.addEventListener("click", angkorBeerClick)
moringaLunch.addEventListener("click", moringaLunchClick)
book.addEventListener("click", bookClick)
calculateButton.addEventListener("click", calculateButtonClick)