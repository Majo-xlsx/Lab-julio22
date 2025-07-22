let totalItems = 0;
let totalPrecio = 0;
let carrito = [];

function agregarProducto(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  carrito.push(nombre);

  document.getElementById("total-items").innerText = totalItems;
  document.getElementById("total-precio").innerText = totalPrecio;

  if (totalPrecio > 200000 && totalPrecio - precio <= 200000) {
    alert("¡Envío gratis aplicado!");
  }

  console.log("Carrito actual:", carrito);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  carrito = [];

  document.getElementById("total-items").innerText = 0;
  document.getElementById("total-precio").innerText = 0;

  alert("Carrito vaciado");
}