const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/marcadores");


router.get('/marcadores', (req, resp) => {
    _controlador.consultarUrl().then(respuestaDB =>{
        let registros = respuestaDB.rows;
        resp.send({ok: true, info: registros, mensaje: 'Consultado Efectivamente'});
    }).catch(error =>{
        resp.send(error);
    })
});

router.post("/marcadores", (req, resp) => {
    try {
        // Obtiene el body desde la request
        let info_marcador = req.body;

        // Valida la información de la url
        _controlador.validarUrl(info_marcador);

        //Guarda la persona en la DB
        _controlador.guardarUrl(info_marcador).then(respuestaDB => {
            resp.send({ok: true, mensaje: "Efectivamente guardada"});
        }).catch(error => {
            resp.send(error);
        });
        
    } catch (error) {
        resp.send(error);
    }
});


module.exports = router;