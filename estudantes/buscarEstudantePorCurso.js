const { estudante } = require("../data");

function buscarEstudantePorCurso(req, res){
    const { curso } = req.query;
    const aluno = estudante.filter(e => e.curso.toLowerCase().includes(curso.toLowerCase()));

    if (aluno.length > 0) {
        res.status(200).send(aluno)
    } else {
        res.status(400).send({
            mensagem: "Curso nao encontrado!!"
        })
    }
}
module.exports = buscarEstudantePorCurso