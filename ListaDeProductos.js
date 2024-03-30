
const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", function() {
    const productTable = document.getElementById('productTable');

    function mostrarProductos() {
        // Aquí deberías enviar una solicitud al proceso principal para obtener los productos de la base de datos
        ipcRenderer.send('obtener-productos');

        // Escuchar la respuesta del proceso principal con los productos obtenidos de la base de datos
        ipcRenderer.on('productos-obtenidos', (event, data) => {
            const productos = data.productos;
            var tableBody = productTable.getElementsByTagName("tbody")[0];
            for (var i = 0; i < productos.length; i++) {
                var product = productos[i];
                var row = tableBody.insertRow();
                row.insertCell(0).textContent = product.codigo;
                row.insertCell(1).textContent = product.nombre;
                row.insertCell(2).textContent = product.proveedor;
                row.insertCell(3).textContent = product.descripcion;
                row.insertCell(4).textContent = product.categoria;
                row.insertCell(5).textContent = product.existencia;
                var imageCell = row.insertCell(6);
                var img = document.createElement('img');
                img.src = product.imagen;
                img.alt = product.nombre;
                img.style.maxWidth = '100px';
                imageCell.appendChild(img);

                if (product.existencia < 10) {
                    row.classList.add("pedido-pendiente");
                }
            }
        });
    }

    mostrarProductos();

    document.getElementById("editBtn").addEventListener("click", function() {
        window.location.href = "InfoDeProductos.html";
    });

    document.getElementById("orderBtn").addEventListener("click", function() {
        window.location.href = "RealizarPedidos.html";
    });
});
