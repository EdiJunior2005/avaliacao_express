const { consultas } = require("../data");

function editarConsulta(req, res){
    const { id } = req.params;
    const consulta = consultas.find((c) => c.id == id);

    const novaData = req.body.data;
    const novoIdMedico = req.body.idMedico;
    const novoIdPaciente = req.body.idPaciente;
    const novaDescricao = req.body.descricao;

    consulta.data = novaData;
    consulta.descricao = novaDescricao;
    consulta.idMedico = novoIdMedico;
    consulta.idPaciente = novoIdPaciente;

    if (!consulta) {
        res.status(400).send({
            mensagem: "id nao encontrado"
        })
    } else {
        res.status(200).send({
            mensagem: "consulta editada com sucesso",
            consultas: consulta
        })
    }
}
module.exports = editarConsulta