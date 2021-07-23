var express = require('express');
var router = express.Router();
const model = require('../models/jugadores');


const verify = (req, res) => {
  console.log("entra");
  const datos = {
    confirmacionCorreo : req.params.uuid,
    obj : {habilitado : 1}
  }
  model.modify(datos).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

router.get('/verify/:uuid', verify);

module.exports = router;
