const express = require('express')
const router = express.Router()

const _controlador = require("../controllers/marcadores");


router.get('/marcadores', (req, resp) => {
    _controlador.consultarUrls().then(respuestaDB => {
        let registros = respuestaDB.rows;
        resp.send(registros);
    }).catch(error => {
        resp.send(error);
    })
});

router.get('/marcadores/:id', (req, resp) => {
    let id = req.params.id;
    _controlador.consultarUrl(id).then(respuestaDB => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? 'Consultado Efectivamente' : 'Sin registro';
        resp.send({ ok: true, mensaje, info: registros });
    }).catch(error => {
        resp.send(error);
    })
});

router.post("/marcadores", (req, resp) => {
    try {
        let info_marcador = req.body;
        _controlador.validarUrl(info_marcador);
        _controlador.guardarUrl(info_marcador).then(respuestaDB => {
            resp.send({ ok: true, mensaje: "Efectivamente guardada" });
        }).catch(error => {
            resp.send(error);
        });

    } catch (error) {
        resp.send(error);
    }
});

router.delete("/marcadores/:id", (req, resp) => {
    let id = req.params.id;
    _controlador.eliminarUrl(id).then((respuestaDB) => {
        resp.send({ ok: true, mensaje: "Eliminado exitosamente " });
    }).catch((error) => {
        resp.send({ ok: false, mensaje: "Error al eliminar ", info: "" });
    });


});

router.put("/marcadores/:id", (req, resp) => {
    let id = req.params.id; 
    let marcador = req.body;
    _controlador.modificarUrl(marcador, id).then(respuestaDB => {
        resp.send({ ok: true, mensaje: "Modificado exitosamente ", info: respuestaDB });
    }).catch(error => {
        resp.send({ ok: false, mensaje: "Error al modificar ", info: error });
    })
})


module.exports = router;