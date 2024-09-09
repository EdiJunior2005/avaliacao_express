const { consultas } = require("../data")

function buscarPorPaciente(req, res){
        const { idPaciente } = req.params
    
        const paciente = consultas.filter(p => p.idPaciente == idPaciente)
        if (paciente.length > 0) {
            res.status(200).send(paciente)    
        } else {
            res.status(400).send({
                mensagem: "id invalido!"
            })
        }
    }
module.exports = buscarPorPaciente