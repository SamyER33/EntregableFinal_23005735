
const connection = require('./main'); 

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const employeeId = document.getElementById('employee_id').value;
        const password = document.getElementById('password').value;

        // Consulta a la base de datos para verificar las credenciales
        connection.query('SELECT * FROM empleados WHERE id = ? AND contrasena = ?', [employeeId, password], (err, rows) => {
            if (err) {
                console.error('Error al verificar credenciales:', err);
                alert('Error al iniciar sesión. Por favor, inténtelo de nuevo.');
                return;
            }
            
            if (rows.length > 0) {
                // Inicio de sesión exitoso
                alert('Inicio de sesión exitoso.');
                // Redirigir a la ventana de lista de productos
                window.location.href = 'ListaDeProductos.html';
            } else {
                // Inicio de sesión fallido
                alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
            }
        });
    });
});
