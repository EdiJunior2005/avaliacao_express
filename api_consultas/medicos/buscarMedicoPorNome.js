const { medicos } = require("../data")

function buscarMedicoPorNome(req, res){
    const { nome } = req.query

    const medico = medicos.filter(m => m.nome.toLowerCase().includes(nome.toLowerCase()))
    if (medico.length > 0) {
        res.status(200).send(medico)    
    } else {
        res.status(400).send({
            mensagem: "nome invalido!"
        })
    }
}
module.exports = buscarMedicoPorNome