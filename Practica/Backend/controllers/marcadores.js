
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

let consultarUrls = async () => {
    let _servicio = new ServicioPG()
    let sql = `SELECT * FROM marcadores`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarUrl = async (id) => {
    let _servicio = new ServicioPG()
    let sql = `SELECT * FROM marcadores WHERE id=${id}`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let eliminarUrl = async (id) => {
    let _servicio = new ServicioPG()
    let sql = `DELETE FROM marcadores WHERE id=${id}`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let modificarUrl = async (marcador, id) => {
    if (marcador.id != id) {
        throw { ok: false, mensaje: 'Id erroneo,no encontrado' };
    }else{
    let _servicio = new ServicioPG()
    let sql = `UPDATE public.marcadores
	SET url='${marcador.url}', nombre='${marcador.nombre}', descripcion='${marcador.descripcion}'
	WHERE id= ${marcador.id};`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
    }
}; 

module.exports = { validarUrl, guardarUrl, consultarUrls, consultarUrl, eliminarUrl, modificarUrl }