
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')
const mysql = require('mysql2')
const bcrypt = require('bcrypt');

// Crear conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Samy.my.SQL',
    database: 'inventario_supermercado'
});

// Conexión a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión establecida a la base de datos.');
});

module.exports = connection;

function createWindow() {
    const ventana = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    ventana.loadFile('InicioDeSesion.html');
}

app.whenReady().then(createWindow);

ipcMain.on('obtener-productos', (event) => {
    // Consulta a la base de datos para obtener productos
    connection.query('SELECT * FROM productos', (err, rows) => {
        if (err) {
            console.error('Error al obtener productos: ', err);
            event.reply('productos-obtenidos', { error: err.message });
            return;
        }
        event.reply('productos-obtenidos', { productos: rows });
    });
});