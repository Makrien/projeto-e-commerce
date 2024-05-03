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
const checkoutSection = document.querySelector('.checkout-section')
const checkoutBtn = document.querySelector('.checkout-btn')

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
    carrinhoContainer.style.display = 'flex'
  } else {
    carrinhoContainer.style.display = 'none'
  }
})

checkoutBtn.addEventListener('click', () => {
  alert('Obrigado por comprar na Juju Eletro!')
})

/* ===================== carrinho.html =========================== */

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {

  let removeCartItemButtons = document.querySelectorAll('.btn-danger')
  for (let i = 0; i < removeCartItemButtons.length; i++) {
      let button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  let quantityInputs = document.querySelectorAll('.cart-quantity-input')
  for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  let addToCartButtons = document.querySelectorAll('.button-85')
  for (let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.querySelectorAll('.btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  let cartItems = document.querySelectorAll('.cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  if (checkoutSection.style.display === 'none') {
    checkoutSection.style.display = 'flex'
  } else {
    checkoutSection.style.display = 'none'
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let title = shopItem.querySelector('.shop-item-title').innerText
  let price = shopItem.querySelector('.shop-item-price').innerText
  let imageSrc = shopItem.querySelector('.shop-item-image').src
  addItemToCart(title, price, imageSrc)
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
        <button class="btn btn-danger" type="button">REMOVER</button>
    </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.querySelectorAll('.btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.querySelectorAll('.cart-quantity-input')[0].addEventListener('change', quantityChanged)
  alert('Item adicionado ao carrinho')
  updateCartTotal()
}

function updateCartTotal() {
  let cartItemContainer = document.querySelectorAll('.cart-items')[0]
  let cartRows = cartItemContainer.querySelectorAll('.cart-row')
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.querySelector('.cart-price')
    let quantityElement = cartRow.querySelector('.cart-quantity-input')
    let price = parseFloat(priceElement.innerText.replace('R$ ', ''))
    let quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  total = total.toFixed(2)
  document.querySelector('.cart-total-price').innerText = `R$ ${total}`
  document.querySelector('.checkout-total').innerText = `R$ ${total}`
  document.querySelector('.subtotal').innerText = `R$ ${total}`
}

const addToCartButtons = document.querySelectorAll('.button-85')
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', () => {
    let title = document.querySelectorAll('.produto-titulo')[i].textContent
    let price = document.querySelectorAll('.preco-item')[i].textContent
    let priceFloat = parseFloat(document.querySelectorAll('.preco-item')[i].textContent.replace('R$ ', ''))
    let imgSource = document.querySelectorAll('.card-produto-imagem')[i].src
    addItemToCart(title, price, imgSource)
  })
}







