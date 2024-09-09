const { consultas } = require("../data");

function criarConsulta(req, res){
    const novaConsulta = {
        id: consultas.length + 1,
        data: req.body.data,
        idMedico: req.body.idMedico,
        idPaciente: req.body.idPaciente,
        descricao: req.body.descricao
    }
    consultas.push(novaConsulta);

    if (novaConsulta != 0) {
        res.status(200).send({
            mensagem: "consulta criada com sucesso!",
            consultas: novaConsulta
        })
    } else {
        res.status(400).send({mensagem: "preencha os campos corretamente!!"})
    }
}
module.exports = criarConsulta