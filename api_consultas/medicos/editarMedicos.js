const { medicos } = require("../data");

function editarMedico(req, res){
    const { id } = req.params;
    const medico = medicos.find((m) => m.id == id);

    const novoNome = req.body.nome;
    const novaEspecialidade = req.body.especialidade;
    

    medico.nome = novoNome;
    medico.especialidade = novaEspecialidade;

    if (!medico) {
        res.status(400).send({
            mensagem: "id nao encontrado"
        })
    } else {
        res.status(200).send({
            mensagem: "medico editado com sucesso",
            medicos: medico
        })
    }
}
module.exports = editarMedico