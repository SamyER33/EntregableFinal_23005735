
document.addEventListener("DOMContentLoaded", function() {
    // Simulando carga de proveedores desde la base de datos
    const proveedores = ["Lácteos S.A.", "Agricultores Unidos", "Frutas Frescas", "Granjas Avícolas", "Pastificio Italiano"];

    const proveedoresDropdown = document.getElementById("proveedores");

    // Llenar la lista desplegable con los proveedores
    proveedores.forEach(proveedor => {
        const option = document.createElement("option");
        option.text = proveedor;
        proveedoresDropdown.appendChild(option);
    });

    const pedidoForm = document.getElementById("pedidoForm");
    const cantidadInput = document.getElementById("cantidad");
    const cantidadError = document.getElementById("cantidadError");

    pedidoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (cantidadInput.value.trim() === "" || parseInt(cantidadInput.value) === 0) {
            cantidadError.textContent = "Por favor, ingrese una cantidad válida.";
        } else {
            // Aquí iría la lógica para enviar el pedido
            redirigirAConfirmarPedido();
        }
    });

    // Agregar controlador de eventos para el botón de confirmación de pedido
    document.getElementById("confirmOrderBtn").addEventListener("click", function() {
        console.log ('entrar')
        window.location.href = "ConfirmacionDePedido.html";

    });

});