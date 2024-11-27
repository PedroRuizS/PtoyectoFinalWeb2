// Cargar el carrito desde localStorage
let articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Variables
const contenedorCarritoPage = document.querySelector(
  ".carrito__contenedor-page"
);
const contenedorCarrito = document.querySelector(".carrito__contenedor");
const actualizarTotal = document.querySelector(".carrito__subtotal-precio");
const actualizarTotalCarrito = document.querySelector(".carrito__precio-total");
console.log(contenedorCarrito);

// Mostrar el contenido del carrito en la consola
console.log("Contenido del carrito:", articulosCarrito);

// Ejemplo: recorrer los productos
articulosCarrito.forEach((producto) => {
  console.log(
    `Producto: ${producto.descripcion}, Cantidad: ${producto.cantidad}`
  );
});

llamadaFunciones();

function llamadaFunciones() {
  mostrarProductos();
  contenedorCarritoPage.addEventListener("click", eliminarProducto);
}

function mostrarProductos() {
  actualizaCarrito();
  let total = 0;
  //Agregamos al carrito del header
  articulosCarrito.forEach((producto) => {
    const productoAgregar = document.createElement("div");
    productoAgregar.innerHTML = `
        <div class = "carrito__canasta"> 
            <img src="${producto.imagen}" alt="imagenProducto">
            <p class="carrito__descripcion">${producto.descripcion}</p>
            <p class="carrito__precio">${producto.precio}</p>
            <p class="carrito__cantidad">${producto.cantidad}</p>
            <input
                    type="submit"
                    value="X"
                    class="carrito__borrar-btn"
                    data-id=${producto.id}
                  />
        </div>
    
    `;
    //Agregamos el HTML a la pagina carrito
    contenedorCarrito.appendChild(productoAgregar);
    total = total + parseInt(producto.cantidad * producto.precio.slice(1));
  });
  //Agregamos los productos a la pagina del carrito
  articulosCarrito.forEach((producto) => {
    const productoAgregar = document.createElement("div");
    productoAgregar.innerHTML = `
    <div class = "carrito__producto">
      <div class = "carrito__img">
        <img src = "${producto.imagen}" alt= "imagenProducto">
      </div>
      <div class= "carrito__descripcion">
        ${producto.descripcion}
      </div>
      <div class="carrito__cantidad">${producto.cantidad}</div>
      <div class="carrito__precio">${producto.precio}</div>
      <input
                    type="submit"
                    value="X"
                    class="carrito__borrar-btn"
                    data-id=${producto.id}
                  />
    </div>
    
    `;
    //Agregamos el HTML a la pagina carrito
    contenedorCarritoPage.appendChild(productoAgregar);
    total = total + parseInt(producto.cantidad * producto.precio.slice(1));
  });
  actualizarTotal.innerHTML = `$${total}`;
  actualizarTotalCarrito.innerHTML = `$${total}`;
}

//Eliminar producto
function eliminarProducto(e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("carrito__borrar-btn")) {
    const productoId = e.target.getAttribute("data-id");

    //Elimina el arreglo dede articulosCarrito
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoId
    );
    mostrarProductos(); //Iteramos sobre el carrito y lo actualizamos
  }
}

//Actualiza los Productos del carrito
function actualizaCarrito() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
