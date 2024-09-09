const { pacientes } = require("../data");

function criarPaciente(req, res){
    const novoPaciente = {
        id: pacientes.length + 1,
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento
    }
    pacientes.push(novoPaciente);

    if (novoPaciente != 0) {
        res.status(200).send({
            mensagem: "paciente criado com sucesso!",
            pacientes: novoPaciente
        })
    } else {
        res.status(400).send({mensagem: "preencha os campos corretamente!!"})
    }
}
module.exports = criarPaciente