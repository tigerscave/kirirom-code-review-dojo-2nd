const cocaCola = document.getElementById("cocaCola")
const angkorBeer = document.getElementById("angkorBeer")
const moringaLunch = document.getElementById("moringaLunch")
const purchaseGoodsName = document.getElementById("purchaseGoodsName")
const purchaseGoodsPrice = document.getElementById("purchaseGoodsPrice")
const paymentInput = document.getElementById("paymentInput")
const calculateButton = document.getElementById("calculateButton")
const calculatedChange = document.getElementById("calculatedChange")
const book = document.getElementById("book")

function display(goodsName, goodsPrice) {
    purchaseGoodsName.textContent = goodsName
    purchaseGoodsPrice.textContent = goodsPrice.substr(1)
    paymentInput.value = ''
}
function calculateButtonClick() {
    let payment = parseFloat(paymentInput.value)
    let changePrice = (payment - parseFloat(purchaseGoodsPrice.textContent.substr(1))) * 4091
    calculatedChange.textContent = changePrice
}

cocaCola.addEventListener("click", ()=> display(cocaCola.firstElementChild.textContent, cocaCola.lastElementChild.textContent))
angkorBeer.addEventListener("click", ()=> display(angkorBeer.firstElementChild.textContent, angkorBeer.lastElementChild.textContent))
moringaLunch.addEventListener("click", ()=> display(moringaLunch.firstElementChild.textContent, moringaLunch.lastElementChild.textContent))
book.addEventListener("click", ()=> display(book.firstElementChild.textContent, book.lastElementChild.textContent))
calculateButton.addEventListener("click", calculateButtonClick)