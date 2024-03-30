
// Obtener el contenedor donde se mostrarán los detalles del pedido
const confirmationDetails = document.getElementById("confirmationDetails");

// Función para mostrar los detalles del pedido
function mostrarDetallesPedido(producto, cantidad) {
    const detallePedido = document.createElement("div");
    detallePedido.innerHTML = `<p><strong>Producto:</strong> ${producto}</p>
                               <p><strong>Cantidad:</strong> ${cantidad}</p>`;
    confirmationDetails.appendChild(detallePedido);
}

// Función para confirmar el pedido
function confirmarPedido() {
    // Aquí puedes agregar la lógica para enviar los detalles del pedido al servidor y realizar la confirmación
    alert("¡Pedido confirmado!");
    // Redirigir a otra página o realizar alguna acción adicional después de confirmar el pedido
}

// Obtener el botón de confirmar pedido
const confirmBtn = document.getElementById("confirmBtn");

// Agregar un evento click al botón de confirmar pedido
confirmBtn.addEventListener("click", confirmarPedido);

// Ejemplo de llamada a la función mostrarDetallesPedido
// Suponiendo que tienes un producto seleccionado y una cantidad específica
const productoSeleccionado = "Leche";
const cantidadSeleccionada = 10;
mostrarDetallesPedido(productoSeleccionado, cantidadSeleccionada);
