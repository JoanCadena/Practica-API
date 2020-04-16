// Imprtando librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// Inicializando librerias
const server = express();
server.use(express.json());
server.use(cors());

// Definiendo constantes
const port = 3001

server.get("/",(req, resp) => {
})

// Levantando servidor
server.listen(port, () => {
    console.log('Corriendo...');
})

// Importando rutas con los endpoint
const rutas_marcadores = require('./routes/marcadores')
server.use(rutas_marcadores);