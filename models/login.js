const bd = require('../utils/bd');

const isLogged = (username, password) => {
    console.log(username, password)
    const info = bd("jugadores").where({username, password}).select("id", "username", "habilitado");
    console.log("voy a imprimir info")
    console.log(info)
    return info;
    
};

module.exports = {isLogged}