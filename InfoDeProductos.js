
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los elementos del formulario
    const saveBtn = document.querySelector(".save-btn");
    const resetBtn = document.querySelector(".reset-btn");
    const form = document.querySelector("form");

    // Agregar evento de clic al botón "Guardar Cambios"
    saveBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Una vez guardados los cambios, redireccionar a la lista de productos
        window.location.href = "ListaDeProductos.html";
    });

    // Agregar evento de clic al botón "Cancelar"
    resetBtn.addEventListener("click", function() {
        // Limpiar todos los campos del formulario
        form.reset();
    });
});
