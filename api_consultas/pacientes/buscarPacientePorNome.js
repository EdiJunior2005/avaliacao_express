const { pacientes } = require("../data")

function buscarPacientePorNome(req, res){
    const { nome } = req.query

    const paciente = pacientes.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()))
    if (paciente.length > 0) {
        res.status(200).send(paciente)    
    } else {
        res.status(400).send({
            mensagem: "nome invalido!"
        })
    }
}
module.exports = buscarPacientePorNome