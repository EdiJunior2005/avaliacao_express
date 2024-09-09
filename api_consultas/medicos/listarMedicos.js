const { medicos } = require("../data");

function listarMedico(req, res){
    res.status(200).send(medicos)
}
module.exports = listarMedico