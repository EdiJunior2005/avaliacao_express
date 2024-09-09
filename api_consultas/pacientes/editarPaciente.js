const { pacientes } = require("../data");

function editarPaciente(req, res){
    const { id } = req.params;
    const paciente = pacientes.find((p) => p.id == id);

    const novoNome = req.body.nome;
    const novaDataNascimento = req.body.dataNascimento;
    

    paciente.nome = novoNome;
    paciente.dataNascimento = novaDataNascimento;

    if (!paciente) {
        res.status(400).send({
            mensagem: "id nao encontrado"
        })
    } else {
        res.status(200).send({
            mensagem: "paciente editado com sucesso",
            pacientes: paciente 
        })
    }
}
module.exports = editarPaciente