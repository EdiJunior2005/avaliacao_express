const { pacientes } = require("../data");

function removerPaciente(req, res){
    const { id } = req.params;
    const index = pacientes.findIndex((p) => p.id == id);

    if (index == -1) {
        res.status(400).send({
            mensagem: "id nao encontrado"
        })
    } else {
        const paciente_removido = pacientes.splice(index, 1)[0]
        res.status(200).send({
            mensagem: "removido com sucesso",
            pacientes: paciente_removido
        })
    }
}
module.exports = removerPaciente