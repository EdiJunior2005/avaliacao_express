const { estudante } = require('../data')

const listarEstudantes = (req, res) => {
    if(estudante.length > 0){
    res.status(201).send({mensagem: "Alunos encontrados", estudante: estudante })
    }else{
        res.status(404).send({mensagem:"Nenhum Aluno encontrado"})
    }
}

module.exports = listarEstudantes