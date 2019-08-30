const cocacola = document.getElementById("cocaCola")
const angkorBeer = document.getElementById("angkorBeer")
const moringaLunch = document.getElementById("moringaLunch")
const book = document.getElementById("book")
const productName = document.getElementById("purchaseGoodsName")
const productPrice = document.getElementById("purchaseGoodsPrice")
const paidInDollar = document.getElementById("paymentInput")
const changeRiel = document.getElementById("calculatedChange")
const calculateButton = document.getElementById("calculateButton")

let selectedProduct = ""
let displayPrice = ""
let paidPrice = 0
 
function selectCocacola(){
    selectedProduct = "Coca-cola"
    displayPrice = "1.15"
    paidPrice = 1.15
}

function selectAngkorBeer(){
    selectedProduct = "Angkor Beer"
    displayPrice = "2.25"
    paidPrice = 2.25
}

function selectMoringaLunch(){
    selectedProduct = "Moringa Lunch"
    displayPrice = "3.5"
    paidPrice = 3.5
}

function selectBook(){
    selectedProduct = "book"
    displayPrice = "4.5"
    paidPrice = 4.5
}

function selectProduct(product){
    switch(product) {
        case 'cocaCola' : selectCocacola()
            break
        case 'angkorBeer' : selectAngkorBeer()
            break
        case 'moringaLunch' : selectMoringaLunch()
            break
        case 'book' : selectBook()
            break
        default : break
    }
    
    productName.textContent = selectedProduct
    productPrice.textContent = displayPrice
}

function calculateChange(){
    const payment = parseFloat(paidInDollar.value)
    changeRiel.textContent = parseInt(payment - paidPrice) * 4091 
}

cocacola.addEventListener('click', () => selectProduct('cocaCola'))
angkorBeer.addEventListener('click', () => selectProduct('angkorBeer'))
moringaLunch.addEventListener('click', () => selectProduct('moringaLunch'))
book.addEventListener('click', () => selectProduct('book'))
calculateButton.addEventListener('click', calculateChange)