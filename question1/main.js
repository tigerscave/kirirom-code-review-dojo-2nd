//write code in here
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const numElement = document.getElementById("number")

function plusButtonClick() {
    number = Number(numElement.textContent) + 1
    numElement.textContent = number
}
function minusButtonClick() {
    number = Number(numElement.textContent) - 1
    numElement.textContent = number
}
function resetButtonClick() {
    numElement.textContent = 0
}

plusButton.addEventListener("click", plusButtonClick)
minusButton.addEventListener("click", minusButtonClick)
resetButton.addEventListener("click", resetButtonClick)