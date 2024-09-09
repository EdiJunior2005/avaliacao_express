const { pacientes } = require("../data");

function buscarPorNascimento(req, res) {
  const { dataNascimento } = req.query;

  const paciente = pacientes.filter((p) =>
    p.dataNascimento.toLowerCase().includes(dataNascimento.toLowerCase())
  );
  if (paciente.length > 0) {
    res.status(200).send(paciente);
  } else {
    res.status(400).send({
      mensagem: "ano invalido!",
    });
  }
}
module.exports = buscarPorNascimento;
