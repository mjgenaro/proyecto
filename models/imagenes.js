const bd = require('../utils/bd');
const bdService = require('../utils/dbService');

const create = (obj) => bdService.create("jugadores", obj);
const createImagen = (obj) => bdService.create("jugadores_imagenes", obj);
const getImg = (id) => bd.get('jugadores_imagenes').where(id).select('uuid');

module.exports = { create, createImagen, getImg }