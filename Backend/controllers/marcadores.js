
const ServicioPG = require('../services/postgres')

/**
 * Validar la información del marcador
 * @param {*} marcador 
 */
let validarUrl = marcador => {
    if (!marcador.url) {
        throw {
            ok: false,
            mensaje: "La url del marcador es obligatoria"
        };
    }
    if (!marcador.nombre) {
        throw {
            ok: false,
            mensaje: "El nombre del marcador es obligatorio"
        };
    }
    if (!marcador.descripcion) {
        throw { ok: false, mensaje: "La descripción del marcador es obligatoria" };
    }
};

let guardarUrl = async marcador => {
    let _servicio = new ServicioPG()
    let sql = `INSERT INTO public.marcadores(url, nombre, descripcion)
        VALUES (
           '${marcador.url}',
           '${marcador.nombre}', 
           '${marcador.descripcion}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarUrl = async () => {
    let _servicio = new ServicioPG()
    let sql = `SELECT * FROM marcadores`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

module.exports = { validarUrl, guardarUrl, consultarUrl }