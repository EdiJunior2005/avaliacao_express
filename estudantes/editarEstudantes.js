const {estudante} = require('../data')

const editarEstudante = (req, res) => {

    const { id } = req.params;
    const novoNome = req.body.nome;
    const novaMatricula = req.body.matricula;
    const novoCurso = req.body.curso;
    const novoAno = req.body.ano;

    const estudanteId = estudante.find(estud => estud.id == id)

    if(!estudanteId){
        return res.status(404).send({mensagem:"Estudante não encontrado por favor tente um id válido"})
    }

    estudanteId.nome = novoNome
    estudanteId.matricula = novaMatricula
    estudanteId.curso = novoCurso
    estudanteId.ano = novoAno

    res.status(201).send({mensagem: 'Estudante editado com sucesso', estudante: estudanteId})
}

module.exports = editarEstudante