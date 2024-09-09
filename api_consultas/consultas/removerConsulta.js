const { consultas } = require("../data");

function removerConsulta(req, res){
    const { id } = req.params;
    const index = consultas.findIndex((c) => c.id == id);

    if (index == -1) {
        res.status(400).send({
            mensagem: "id nao encontrado"
        })
    } else {
        const consulta_removida = consultas.splice(index, 1)[0]
        res.status(200).send({
            mensagem: "removido com sucesso",
            consultas: consulta_removida
        })
    }
}
module.exports = removerConsulta