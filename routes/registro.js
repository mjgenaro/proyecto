const express = require('express');
const router = express.Router();
const model = require('../models/jugadores');
const sha1 = require('sha1');
const {v4 : uuid} = require('uuid');
const {validateCreate} = require('../middlewares/jugadores');
const { send } = require('../services/mail');

const create = async (req, res) => {
    try {
        const {username, password, nombreCompleto, mail, edad, posicion,descripcion} = req.body; 

        const nuevo = {
            username,
            password : sha1(password),
            nombreCompleto,
            mail,
            edad,
            posicion,
            descripcion,
            confirmacionCorreo : uuid(),
        };  
        
        const nuevoUsuario = await model.create(nuevo);
        console.log(nuevoUsuario);

        const mailinfo = {  
            to: mail,
            subject: "Se ha registrado con éxito",
            
            html : `<a href =http://localhost:3000/mailConfirm/${nuevo.confirmacionCorreo}> Para confirmar su suscripción haga click en el siguiente enlace ${nombreCompleto}</a>`
            // `<a href = "${process.env.URL}/users/verify/${nuevo.confirmacionCorreo}"> Para confirmar su suscripción haga click en el siguiente enlace ${nombreCompleto}</a>`
        }
        const mensaje = await send(mailinfo);
        res.json(mensaje);
        
    }
    catch (err) {
        console.error(err);
        res.status(500);
    }
};

router.post('/',validateCreate, create);
module.exports = router;