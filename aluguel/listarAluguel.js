const { aluguel } = require("../data");

function listarAluguel(req, res) {
  res.status(200).send(aluguel);
}
module.exports = listarAluguel;
