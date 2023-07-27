var carrito = [];

function agregarAlCarrito(juegoId, precio) {
  var juegoNombre = "Juego " + juegoId;
  var juegoPrecio = parseFloat(precio);
  var juego = {
    id: juegoId,
    nombre: juegoNombre,
    precio: juegoPrecio
  };
  
  carrito.push(juego);
  actualizarCarrito();
}

function cancelarJuego(juegoId) {
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].id === juegoId) {
      carrito.splice(i, 1);
      break;
    }
  }
  
  actualizarCarrito();
}

function actualizarCarrito() {
  var carritoList = document.getElementById('carrito');
  carritoList.innerHTML = "";
  
  for (var i = 0; i < carrito.length; i++) {
    var juego = carrito[i];
    var listItem = document.createElement('li');
    listItem.textContent = juego.nombre + " - $" + juego.precio;
    carritoList.appendChild(listItem);
  }
  
  calcularTotal();
}

function calcularTotal() {
  var total = 0;
  
  for (var i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  
  document.getElementById('total').textContent = total;
}

function registrar() {
  var fechaDevolucion = document.getElementById('fecha-devolucion').value;
  
  for (var i = 0; i < carrito.length; i++) {
    var juego = carrito[i];
    var registroTable = document.getElementById('registro').getElementsByTagName('tbody')[0];
    
    var row = registroTable.insertRow();
    var juegoCell = row.insertCell(0);
    var precioCell = row.insertCell(1);
    var fechaCell = row.insertCell(2);
    
    juegoCell.innerHTML = juego.nombre;
    precioCell.innerHTML = juego.precio;
    fechaCell.innerHTML = fechaDevolucion;
  }
  
  carrito = [];
  actualizarCarrito();
}

function resetearTabla() {
  var registroTable = document.getElementById('registro').getElementsByTagName('tbody')[0];
  registroTable.innerHTML = "";
}
