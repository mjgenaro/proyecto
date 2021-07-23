const express = require('express');
const router = express.Router();
const sha1 = require("sha1");
const multer = require("multer")
const temp = {dest: "./public/temp"}
const model = require("./../models/jugadores")
const upload = multer(temp);
const service = require('./../services/jugadores')
const {validateModify} = require("./../middlewares/jugadores")
const {logeado} = require('./../middlewares/login')
const {borrarTemp} = require('./../middlewares/borrarTemp')
const fs = require('fs')

const get = (req, res) => {
  model.getAll(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
};

const single = (req, res) => {
  model.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err))
};

const modify = (req, res) => {
  if (req.body.password){
      req.body.password = sha1(req.body.password);
  };

  model.modify(req.params.id, req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err))
};

const createFoto = async (req, res, next) => {
  try {
      const idImg = await service.crearFoto(req.id, req.files);
      next();
  }
  catch (err) {
      console.log(err)
      res.sendStatus(500);
  }
};

const jugadoresImg = async (req, res) => {
  try{
    console.log(req.body.id_jugadores);
    const uuid = await model.imagenes(req.body.id_jugadores);
    const img = uuid[0].uuid;
    const path = `./public/images/${img}.jpeg`;
    console.log(path)
    const data = fs.readFileSync(path);
    res.json({data})
  }
  catch (err) {
    console.log(err)  
    res.sendStatus(500);
  }
};

router.get('/all', get);
router.get('/single/:id', single);
router.put('/modify/:id', validateModify, modify)
router.post('/createFoto', logeado, upload.array("imagen"), createFoto, borrarTemp)
router.get('/jugadoresImg', jugadoresImg);

module.exports = router;
