const carrinhoIcone = document.querySelector('.carrinho')
const cartSection = document.querySelector('.shopping-cart')
const dropdownBtn = document.querySelector('.dropdown-toggle')
const dropdownList = document.querySelector('.dropdown-list')
const aPerifericos = document.querySelector('#id-perifericos')
const aHardware = document.querySelector('#id-hardware')
const dropdownPerifericos = document.querySelector('.dropdown-perifericos')
const dropdownHardware = document.querySelector('.dropdown-hardware')
const carrinhoBtn = document.querySelector('.carrinho')
const carrinhoContainer = document.querySelector('.container')

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

carrinhoBtn.addEventListener('click', () => {
  if (carrinhoContainer.style.display === 'none') {
    carrinhoContainer.style.display = 'block'
  } else {
    carrinhoContainer.style.display = 'none'
  }
})


/* ===================== carrinho.html =========================== */

let productsArray = []

function Products(title, price, priceFloat, imgSource) {
  this.title = title
  this.price = price
  this.priceFloat = priceFloat
  this.imgSource = imgSource
}

const addToCartButtons = document.querySelectorAll('.button-85')
console.log(addToCartButtons[0])

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', () => {
    let title = document.querySelectorAll('.produto-titulo')[i].textContent
    let price = document.querySelectorAll('.preco-item')[i].textContent
    let priceFloat = parseFloat(document.querySelectorAll('.preco-item')[i].textContent.replace('R$ ', ''))
    let imgSource = document.querySelectorAll('.card-produto-imagem')[i].src
    let product = new Products(title, price, priceFloat, imgSource)
    productsArray.push(product)
    console.log(productsArray)
    addItemToCart(title, price, imgSource)
  })
}

function addItemToCart(title, price, imgSource) {
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  let cartItems = document.querySelectorAll('.cart-items')[0]
  let cartItemTitles = cartItems.querySelectorAll('.cart-item-title')
  for (let i = 0; i < cartItemTitles.length; i++) {
    if (cartItemTitles[i].innerText === title) {
      alert('Produto já adicionado ao carrinho')
      return
    }
  }
  let cartRowContents =  `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imgSource}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  // cartRow.querySelectorAll('.btn-danger')[0].addEventListener('click', removeCartItem)
  // cartRow.querySelectorAll('.cart-quantity-input')[0].addEventListener('change', quantityChanged)
}