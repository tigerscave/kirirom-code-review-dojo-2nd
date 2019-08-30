const cocacolaButton = document.getElementById('cocaCola')
const angkorbeerButton = document.getElementById('angkorBeer')
const moringalunchButton = document.getElementById('moringaLunch')
const bookButton = document.getElementById('book')
const goodsName = document.getElementById('purchaseGoodsName')
const goodsPrice = document.getElementById('purchaseGoodsPrice')
const payment = document.getElementById('paymentInput')
const calculateButton = document.getElementById('calculateButton')
const change = document.getElementById('calculatedChange')

let productPrice = 0 
let pay = 0
let changeMoney = 0

function displayProduct(product, price)
{
    productPrice = price
    console.log(price)
    goodsName.textContent = product
    goodsPrice.textContent = price
    change.textContent = ''
    payment.value = ''
}

function calculate()
{
    pay = parseFloat(payment.value)
    changeMoney = (pay - productPrice) * 4091
    change.textContent = Math.round(changeMoney)
    payment.value = ''
}
cocacolaButton.addEventListener('click', () => productInfo('Coca-cola', 1.15))
angkorbeerButton.addEventListener('click', () => productInfo('Angkor Beer', 2.5))
moringalunchButton.addEventListener('click', () => productInfo('Moringa Lunch', 3.5))
bookButton.addEventListener('click', () => productInfo('Book', 4.5))
calculateButton.addEventListener('click', () => calculate())

