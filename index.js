const btnCart = document.querySelector('.contenedor-icon')
const contenedorCartProducto = document.querySelector('.contenedor-cart-producto')

btnCart.addEventListener('click',() => {contenedorCartProducto.classList.toggle('hidden-cart')})