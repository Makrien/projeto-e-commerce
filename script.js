const carrinhoIcone = document.querySelector('.carrinho')
const cartSection = document.querySelector('.shopping-cart')
const dropdownBtn = document.querySelector('.dropdown-toggle')
const dropdownList = document.querySelector('.dropdown-list')
const aPerifericos = document.querySelector('#id-perifericos')
const aHardware = document.querySelector('#id-hardware')
const dropdownPerifericos = document.querySelector('.dropdown-perifericos')
const dropdownHardware = document.querySelector('.dropdown-hardware')

carrinhoIcone.addEventListener('click', () => {
  if (cartSection.style.display === 'none') {
    cartSection.style.display = 'flex'
  } else {
    cartSection.style.display = 'none'
  }
})

dropdownBtn.addEventListener('click', () => {
  if (dropdownList.style.display === 'none') {
    dropdownList.style.display = 'flex'
  } else {
    dropdownList.style.display = 'none'
  }
})

aPerifericos.addEventListener('click', () => {
  if (dropdownPerifericos.style.display === 'none') {
    dropdownPerifericos.style.display = 'flex'
    dropdownHardware.style.display = 'none'
  } else {
    dropdownPerifericos.style.display = 'none'
  }
})

aHardware.addEventListener('click', () => {
  if (dropdownHardware.style.display === 'none') {
    dropdownHardware.style.display = 'flex'
    dropdownPerifericos.style.display = 'none'
  } else {
    dropdownHardware.style.display = 'none'
  }
})



/* ===================== carrinho.html =========================== */

let productsArray = []

function Products(title, price, imgSource) {
  this.title = title
  this.price = price
  this.imgSource = imgSource
}

const addToCartButtons = document.getElementsByClassName('button-85')
console.log(addToCartButtons)

// for (let i = 0; i < addToCartButtons.length; i++) {
//   addToCartButtons[i].addEventListener('click', () => {
//     const title = document.getElementsByClassName('produto-titulo')[0].textContent
//     console.log(title)
//   })
// }


function addToProductsArray() {

}