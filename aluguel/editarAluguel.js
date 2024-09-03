const { aluguel } = require("../data");

function editarAluguel(req, res) {
  const { id } = req.params;
  const novoIdEstudante = req.body.idEstudante;
  const novoIdLivro = req.body.idLivro;
  const novoDataAluguel = req.body.dataAluguel;
  const novoDataDevolucao = req.body.dataDevolucao;

  const alugado = aluguel.find((a) => a.id == id);

  alugado.dataAluguel = novoDataAluguel;
  alugado.dataDevolucao = novoDataDevolucao;
  alugado.idEstudante = novoIdEstudante;
  alugado.idLivro = novoIdLivro;

  if (!alugado) {
    res.status(404).send({
      mensagem: "aluguel nao encontrado!!",
    });
  } else {
    res.status(200).send({
      mensagem: "aluguel editado com sucesso",
      aluguel: alugado,
    });
  }
}
module.exports = editarAluguel;
