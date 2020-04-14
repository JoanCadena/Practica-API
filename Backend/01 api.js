const express = require("express");
const server = express();

server.get("/",(req, resp) => {
    resp.send("Hola Mundo!")
})

server.listen(3000, "127.0.0.1", () => {
    console.log('Corriendo');
    
})