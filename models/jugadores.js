const bd = require('../utils/bd');
const sha1 = require("sha1");
const bdService = require('../utils/dbService');


const getAll = () => bd('jugadores').where({habilitado:1}).select('nombreCompleto','mail', 'edad', 'posicion', 'descripcion');

const single = (id) => bd('jugadores').where({id:id, habilitado:1}).select('nombreCompleto','mail', 'edad', 'posicion', 'descripcion' );

const create = async (obj) => {
    try {
        const id = await bdService.create("jugadores", obj);
        return id;
    }
    catch (e) {
        console.log(e);
    }
};

const modify = ({id = false,obj, confirmacionCorreo = false}) => bd("jugadores").where({id}).orWhere({confirmacionCorreo}).update(obj);

const createImagen = (obj) => bdService.create("jugadores_imagenes", obj);

const imagenes = (id_jugadores) => bd("jugadores_imagenes").where({id_jugadores}).select("uuid");

module.exports = {getAll, single, modify, create, createImagen, imagenes};