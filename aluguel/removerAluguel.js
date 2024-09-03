const { aluguel } = require("../data");

function removerAluguel(req, res) {
  const { id } = req.params;
  const index = aluguel.findIndex((a) => a.id == id);

  if (index === -1) {
    res.status(400).send({
      mensagem: "aluguel nao econtrado!!",
    });
  }
  const aluguelDeletado = aluguel.splice(index, 1)[0];
  res.status(200).send({
    mensagem: "aluguel removido com sucesso!!",
    aluguel: aluguelDeletado,
  });
}
module.exports = removerAluguel