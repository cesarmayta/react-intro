/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let btn = document.getElementById('btnAgregarCarrito')
let carrito = document.getElementById('carrito')
let productosCarrito = 0

btn.addEventListener('click',function(){
    console.log("presionaste boton")
    productosCarrito++
    carrito.innerHTML = `
    <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">${productosCarrito}</span>
    </button>
    `
})

const arrayProductos = [
    {
        'nombre':'producto 1',
        'imagen':'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        'precio':'$100'
    },
    {
        'nombre':'producto 2',
        'imagen':'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        'precio':'$200'
    },
    {
        'nombre':'producto 3',
        'imagen':'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        'precio':'$300'
    }
]

//arrayProductos.forEach(e => console.log(e))

function crearProducto(prod) {
    const productos = document.getElementById('productos')
    const nuevoProducto = document.createElement('div')
    nuevoProducto.className = "col mb-5"

    const tarjetaProducto = document.createElement('div')
    tarjetaProducto.className = "card h-100"

    const imgProducto = document.createElement('img')
    imgProducto.className = "card-img-top"
    imgProducto.src = prod.imagen

    const bodyProducto = document.createElement('div')
    bodyProducto.className = "card-body p-4"

    const textProducto = document.createElement('div')
    textProducto.className = "text-center"

    const headingProducto = document.createElement('h5')
    headingProducto.className = "fw-bolder"
    headingProducto.innerText = prod.nombre

    const precio = document.createTextNode(prod.precio)


    textProducto.appendChild(headingProducto)
    textProducto.appendChild(precio)
    bodyProducto.appendChild(textProducto)
    tarjetaProducto.appendChild(imgProducto)
    tarjetaProducto.appendChild(bodyProducto)
    nuevoProducto.appendChild(tarjetaProducto)
    productos.appendChild(nuevoProducto)
}

arrayProductos.forEach(e => crearProducto(e))

/*
const carrito = document.getElementById('form_carrito')
const productos = document.getElementById('productos')

const nuevoProducto = document.createElement('div')
nuevoProducto.className = "col mb-5"

const tarjetaProducto = document.createElement('div')
tarjetaProducto.className = "card h-100"

const imgProducto = document.createElement('img')
imgProducto.className = "card-img-top"
imgProducto.src = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"

const bodyProducto = document.createElement('div')
bodyProducto.className = "card-body p-4"

const textProducto = document.createElement('div')
textProducto.className = "text-center"

const headingProducto = document.createElement('h5')
headingProducto.className = "fw-bolder"
headingProducto.innerText = "Fancy Product"

const precio = document.createTextNode("$100")


textProducto.appendChild(headingProducto)
textProducto.appendChild(precio)
bodyProducto.appendChild(textProducto)
tarjetaProducto.appendChild(imgProducto)
tarjetaProducto.appendChild(bodyProducto)
nuevoProducto.appendChild(tarjetaProducto)
productos.appendChild(nuevoProducto)
*/
