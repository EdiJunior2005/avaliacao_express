const { estudante } = require("../data");

function buscarEstudantePorMatricula(req, res){
    const { matricula } = req.query;
    const aluno = estudante.filter(e => e.matricula == matricula)

    if(aluno.length > 0){
        res.status(200).send(aluno);
    }else{
        res.status(400).send({
            mensagem: "matricula nao encontrada!!"
        })
    }
}
module.exports = buscarEstudantePorMatricula