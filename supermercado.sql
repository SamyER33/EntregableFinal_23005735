
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS inventario_supermercado;

-- Seleccionar la base de datos
USE inventario_supermercado;

-- Crear tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    existencia INT,
    proveedor VARCHAR(255) NOT NULL,
    categoria VARCHAR(255) NOT NULL
);

-- Crear tabla de proveedores
CREATE TABLE proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono INT NOT NULL,
    email VARCHAR(255) UNIQUE
);

-- Crear tabla de empleados
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    contrasena VARCHAR(255) UNIQUE
);

-- Crear tabla de pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    id_empleado INT,
    cantidad INT,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);

-- Insertar datos de ejemplo en la tabla de proveedores
INSERT INTO proveedores (nombre, direccion, telefono, email) VALUES
('Lácteos S.A.', '123 Calle Principal', '55551234', 'info@lacteos.com'),
('Agricultores Unidos', '456 Avenida Central', '55555678', 'info@agricultores.com'),
('Frutas Frescas', '789 Calle Secundaria', '55559123', 'info@frutas.com'),
('Granjas Avícolas', '012 Avenida Norte', '55554567', 'info@granjas.com'),
('Pastificio Italiano', '345 Calle Italia', '55558901', 'info@pastas.com'),
('Productos Cereales S.A.', '567 Calle del Maíz', '55552345', 'info@cereales.com'),
('Panadería San Martín', '890 Avenida del Pan', '55556789', 'info@panaderia.com'),
('Bebidas Refrescantes S.A.', '123 Calle de las Bebidas', '55550123', 'info@bebidas.com');

-- Insertar datos de ejemplo en la tabla de empleados
INSERT INTO empleados (nombre, cargo, email, contrasena) VALUES
('Juan Perez', 'Vendedor', 'juan@empresa.com', 'pass.123'),
('Maria Lopez', 'Gerente', 'maria@empresa.com', 'pass.456'),
('Pedro Ramirez', 'Almacenero', 'pedro@empresa.com', 'pass.789');

-- Insertar datos de ejemplo en la tabla de productos
INSERT INTO productos (nombre, descripcion, existencia, proveedor, categoria) VALUES
('Leche', 'Leche entera', 100, 'Lácteos S.A.', 'Lácteos'),
('Arroz', 'Arroz blanco', 50, 'Agricultores Unidos', 'Granos'),
('Manzanas', 'Manzanas rojas', 80, 'Frutas Frescas', 'Frutas'),
('Pollo', 'Pollo fresco', 8, 'Granjas Avícolas', 'Carnes'),
('Pasta', 'Pasta de trigo', 60, 'Pastificio Italiano', 'Pastas'),
('Cereal', 'Cereal de maíz', 30, 'Productos Cereales S.A.', 'Cereales'),
('Pan', 'Pan integral', 70, 'Panadería San Martín', 'Panadería'),
('Agua', 'Agua mineral', 120, 'Bebidas Refrescantes S.A.', 'Bebidas'),
('Yogur', 'Yogur natural', 90, 'Lácteos S.A.', 'Lácteos'),
('Jugo', 'Jugo de naranja', 50, 'Frutas Frescas', 'Bebidas');
