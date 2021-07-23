const Joi = require('@hapi/joi');

const schemas = {
    create: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().min(8).required().messages({
            "string.min" : "la password debe tener al menos 8 caracteres"
        }),
        nombreCompleto: Joi.string().required(),
        mail: Joi.string().email({ tlds: { allow: false } }).required(),
        edad:Joi.number().integer().min(18).required().messages({ 
            "edad.min": "Debe ser mayor a 18 años"
        }),        
        posicion: Joi.string().regex(/(arquero|defensor|volante|delantero)/).messages({
            "string.posicion": "La posicion debe ser correcta"
        }),
        descripcion: Joi.string().required(),
        

    }),
    modify: Joi.object().keys({
        id: Joi.number().integer().required(),
        username: Joi.string().optional(),
        password: Joi.string().min(8).optional().messages({
            "string.min" : "la password debe tener al menos 8 caracteres"
        }),
        mail: Joi.string().email({ tlds: { allow: false } }).optional(),
    })
}

module.exports = schemas;