const { pacientes } = require("../data");

function listarPaciente(req, res){
    res.status(200).send(pacientes)
}
module.exports = listarPaciente