
#Entrega Final
##Descripción

El programa pide un manejo de inventario para un supermercado. Va a tener la capacidad de manejar personal, inventario y pedidos. Se va a comunicar con una base de datos para almacenar y administrar información.

Ventana "Inicio de Sesión":
- Maneja los datos de ID del empleado y su contraseña.
- Se conecta con "Lista de Productos"
- Se conectó correctamente a la base de datos. Lamentablemente me salió este error, y por más que intenté solucionarlo no pude. Le entrego mis avances hasta el momento, espero poder solucionarlo o que me pueda usted ayudar en horario extra aula.
"Uncaught TypeError: Cannot read properties of undefined (reading 'whenReady')" En linea 38 del main.js
- Por lo que tampoco pude comprobar si las ventanas de "Información de Productos", "Realizar Pedido" y "Confirmar Pedido". 
- La ventana "Lista de Productos", si se conectó a la base de datos.

Ventana "Lista de Productos":
- Maneja los datos de ID del productos, Nombre del producto, Nombre del proveedor, Descripción del producto, Categoría y Existencia en inventario.
- Se eliminó la imagen del producto.
- Se conecta con "Información de Producto" y "Realizar Pedidos"
- Productos con baja existencia se muestran con fondo rojo.

// Ventana "Información de Productos"
// - Maneja los datos de Código del producto que no se modifica, Nombre del producto, Proveedor/es, Descripción del producto, Categoría y Existencia en inventario, todos éstos datos si se modifican.
// - Se conecta con "Lista de Productos"
// - Tendrá conexión con la lista de proveedores, listado de productos, existencias del producto de la base de datos.
// - Se da click en el botón Guardar cambios para regresar a la Lista de Productos y se dará click en el botón Cancelar, para hacer un reset de los cambios y regresar al estado original.

// Ventana "Realizar Pedido"
// - Maneja los datos de Código del producto y Nombre del producto que no se modifican, Proveedor/es y cantidad del producto a llevar.
// - Se conecta la lista de proveedores, existencias del producto de la base de datos.
// - Se produjo un error que ya no solicita llenar existencias antes de confirmar pedido.
// - Se conecta con "Confirmar Pedido".

// Ventana "Confirmar Pedido"
// - Maneja los datos fijos de Producto y Cantidad.
// - Se da click en Confirmar Pedido, para mensaje emergente de Pedido confirmado.

##Estudiante
23005735 - Brenda Samara Escobar Avila



--------------------



#Entregable 2
##Descripción

El programa pide un manejo de inventario para un supermercado. Va a tener la capacidad de manejar personal, inventario y pedidos. Se va a comunicar con una base de datos para almacenar y administrar información.

Ventana "Inicio de Sesión":
- Maneja los datos de ID del empleado y su contraseña.
- Se conecta con "Lista de Productos"
- ID del Empleado: 123
- Constraseña: 1234

Ventana "Lista de Productos":
- Maneja los datos de ID del productos, Nombre del producto, Nombre del proveedor, Descripción del producto, Categoría y Existencia en inventario, Imagen del producto.
- Se conecta con "Información de Producto" y "Realizar Pedidos"
- Productos con baja existencia se muestran con fondo rojo.

Ventana "Información de Productos"
- Maneja los datos de Código del producto que no se modifica, Nombre del producto, Proveedor/es, Descripción del producto, Categoría y Existencia en inventario, todos éstos datos si se modifican.
- Se conecta con "Lista de Productos"
- Tendrá conexión con la lista de proveedores, listado de productos, existencias del producto de la base de datos.
- Se da click en el botón Guardar cambios para regresar a la Lista de Productos y se dará click en el botón Cancelar, para hacer un reset de los cambios y regresar al estado original.

Ventana "Realizar Pedido"
- Maneja los datos de Código del producto y Nombre del producto que no se modifican, Proveedor/es y cantidad del producto a llevar.
- Se conecta la lista de proveedores, existencias del producto de la base de datos.
- Se conecta con "Confirmar Pedido".

Ventana "Confirmar Pedido"
- Maneja los datos fijos de Producto y Cantidad.
- Se da click en Confirmar Pedido, para mensaje emergente de Pedido confirmado.

##Estudiante
23005735 - Brenda Samara Escobar Avila



--------------------



#Entregable 1
##Descripción

El programa pide un manejo de inventario para un supermercado. Va a tener la capacidad de manejar personal, inventario y pedidos. Se va a comunicar con una base de datos para almacenar y administrar información.

Ventana "Inicio de Sesión":
- Manejará los datos de ID del empleado y su contraseña.
- Solamente tendrá el botón de inicio de sesión, por lo que no podrá crear una cuenta nueva.
- Tendrá conexión con la "Lista de Productos".
- Tendrá conexión con el listado de empleados de la base de datos.
- Se hará click en el botón de inicio de sesión.
- Tendrá que validar su contraseña con los parámetros específicos.

Ventana "Lista de Productos":
- Manejará los datos de ID del productos, Nombre del producto, Nombre del o los proveedores, Descripción breve del producto, Categoría y Existencia en inventario.
- Tendrá conexión con la "Información de Producto" y "Ventana de Pedidos"
- Tendrá conexión con el listado de productos, listado de proveedores de la base de datos.
- Se hará click en el botón Editar para acceder a la "Información de producto" y se dará click en el botón Hacer Pedido para acceder a la "Ventana de Pedidos".

Ventana "Información de Productos"
- Manejará los datos de Código del producto que no se podrá modificar, Nombre del producto, Proveedor/es, Descripción breve del producto, Categoría y Existencia en inventario, todos éstos datos si se podrán modificar.
- Tendrá conexión con la "Lista de Productos"
- Tendrá conexión con la lista de proveedores, listado de productos, existencias del producto de la base de datos.
- Se dará click en el botón Guardar cambios para regresar a la Lista de Productos y se dará click en el botón Cancelar, para hacer un reset de los cambios y regresar al estado original.

Ventana "Ventana de Pedido"
- Manejará los datos de Código del producto y Nombre del producto que no se podrán modificar, Proveedor/es y cantidad del producto a llevar.
- Tendrá conexión con la lista de proveedores, existencias del producto de la base de datos.
- Se dará click en el botón Confirmar Pedido para terminar la sesión.

##Estudiante
23005735 - Brenda Samara Escobar Avila