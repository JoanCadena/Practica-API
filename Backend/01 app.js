const express = require("express");
const server = express();
const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.get("/",(req, resp) => {
    resp.send("Hola Mundo!")
})

server.get("/x2",(req, resp) => {
    resp.send("Hola Mundo x2!")
})

server.post("/x3",(req, resp) => {
    let body = req.body;
    console.log(body);
    
    
    resp.send("Mandalo ps")
})

server.listen(3000, "127.0.0.1", () => {
    console.log('Corriendo');
    
})