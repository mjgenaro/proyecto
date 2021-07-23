const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const sha1 = require("sha1");
const privateKey = fs.readFileSync("./keys/private.pem");
const signOptions = {algorithm: 'RS256', expiresIn: "600min"};
const model = require("./../models/login");
const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);  

const auth = async (req, res) => {
    try {
        let {username, password} = req.body;
        password = sha1(password);
        const [user] = await model.isLogged(username, password);
        if (!user) res.sendStatus(401);
        if (!user.habilitado) res.send("verifique su mail");
        if (user.habilitado){
            const token = createToken({id: user.id});
            res.status(200).json({JWT : token, info : user});    
        };
    }   
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

};

router.post('/', auth)

module.exports = router;