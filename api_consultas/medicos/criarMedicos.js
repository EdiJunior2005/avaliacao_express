const { medicos } = require("../data");

function criarMedico(req, res){
    const novoMedico = {
        id: medicos.length + 1,
        nome: req.body.nome,
        especialidade: req.body.especialidade
    }
    medicos.push(novoMedico);

    if (novoMedico != 0) {
        res.status(200).send({
            mensagem: "medico criado com sucesso!",
            medicos: novoMedico 
        })
    } else {
        res.status(400).send({mensagem: "preencha os campos corretamente!!"})
    }
}
module.exports = criarMedico