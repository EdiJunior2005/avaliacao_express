const { consultas } = require("../data")

function buscarPorMedico(req, res){
    const { idMedico } = req.params

    const medico = consultas.filter(m => m.idMedico == idMedico)
    if (medico.length > 0) {
        res.status(200).send(medico)    
    } else {
        res.status(400).send({
            mensagem: "nome invalido!"
        })
    }
}
module.exports = buscarPorMedico