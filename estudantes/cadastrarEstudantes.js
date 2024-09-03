const { estudante } = require('../data')

function cadastrarEstudantes(req, res) {
    const novoEstudante = {
        id: estudante.length + 1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano
    }
   
    estudante.push(novoEstudante)
    res.status(201).send({messagem: "Aluno cadastrado com sucesso", estudante: novoEstudante});
}

module.exports = cadastrarEstudantes