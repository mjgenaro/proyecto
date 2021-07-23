const fs = require("fs");

const borrarTemp = (req, res) => {
    
    const file = req.files;
    
    fs.unlink(file[0].path, (e) => {
        if(e){
            throw res.status(500);
        };
    });
    res.sendStatus(200);
};

module.exports = {borrarTemp};