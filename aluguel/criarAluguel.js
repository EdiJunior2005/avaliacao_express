const { aluguel } = require("../data");

function criarAluguel(req, res) {
  const novoAluguel = {
    id: aluguel.length + 1,
    idLivro: req.body.idLivro,
    idEstudante: req.body.idEstudante,
    dataAluguel: req.body.dataAluguel,
    dataDevolucao: req.body.dataDevolucao,
  };
  aluguel.push(novoAluguel);
  if (novoAluguel != null) {
    res.status(200).send({
      mensagem: "aluguel registrado com sucesso!",
    });
  } else {
    res.status(400).send("preencha os campos corretamente!!");
    return criarAluguel;
  }
}
module.exports = criarAluguel;
