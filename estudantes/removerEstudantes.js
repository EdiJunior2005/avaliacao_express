let { estudante } = require('../data')

const removerEstudantes = (req, res) => {
    const { id } = req.params
    const index = estudante.find(estud => estud.id == id)

    if(!index){
        return res.status(404).send({mensagem:"Estudante não encontrado por favor tente um id válido"})
    }

    const estudanteRemovido = estudante.splice(index, 1)[0]
    estudante.forEach((estudante, index) => {
        if(estudante.id == id){
           estudante.splice(index, 1)
        }
        res.status(200).send({mensagem: 'Aluno deletado com sucesso!', estudante: estudanteRemovido})
    });
}

module.exports = removerEstudantes

