const { consultas } = require("../data");

function listarConsulta(req, res){
    res.status(200).send(consultas)
}
module.exports = listarConsulta