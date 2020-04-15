// Imprtando librerias
const express = require("express");
const bodyParser = require("body-parser");

// Inicializando librerias
const server = express();
server.use(express.json());

// Definiendo constantes
const port = 3000

server.get("/",(req, resp) => {
    resp.send("Hola Mundo!")
})

// Levantando servidor
server.listen(port, () => {
    console.log('Corriendo...');
})

// Importando rutas con los endpoint
const rutas_marcadores = require('./routes/marcadores')
server.use(rutas_marcadores);