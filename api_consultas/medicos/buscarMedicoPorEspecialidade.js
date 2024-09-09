const { medicos } = require("../data")

function buscarPorEspecialidade(req, res){
    const { especialidade } = req.query

    const medico = medicos.filter(m => m.especialidade.toLowerCase().includes(especialidade.toLowerCase()))
    if (medico.length > 0) {
        res.status(200).send(medico)    
    } else {
        res.status(400).send({
            mensagem: "nome invalido!"
        })
    }
}
module.exports = buscarPorEspecialidade