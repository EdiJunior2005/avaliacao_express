const { medicos } = require("../data");

function removerMedico(req, res){
    const { id } = req.params;
    const index = medicos.findIndex((m) => m.id == id);

    if (index == -1) {
        res.status(400).send({
            mensagem: "id nao encontrado"
        })
    } else {
        const medico_removido = medicos.splice(index, 1)[0]
        res.status(200).send({
            mensagem: "removido com sucesso",
            medicos: medico_removido
        })
    }
}
module.exports = removerMedico