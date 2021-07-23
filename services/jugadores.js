const {createImagen, single} = require ("./../models/jugadores")
const {imgFile} = require("./../utils/fileHandler");


const crearFoto = async (id_jugadores, files) => {
    try{
    const jugador = await single(id_jugadores);
    const uuid = imgFile(files);
    const obj = {
        id_jugadores,
        uuid
    }
    const id = await createImagen(obj);
    return id;
    }
    catch(e) {
        throw e;
    }
;}

module.exports = {crearFoto};