const { estudante } = require("../data");

function buscarEstudantePorNome(req, res){
    const { nome } = req.query;
    const aluno = estudante.filter(e => e.nome.toLowerCase().includes(nome.toLowerCase()))
    if (aluno.length > 0) {
        res.status(200).send(aluno)
    } else {
        res.status(400).send({
            mensagem: "nenhum aluno encontrado!!"
        })
    }
}
module.exports = buscarEstudantePorNome