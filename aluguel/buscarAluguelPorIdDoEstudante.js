const { aluguel } = require('../data');

const buscarAluguelPorIdEstudante = (req, res) => {
const { idEstudante } = req.params;

const estudantes = aluguel.find(estudantes => estudantes.idEstudante == idEstudante);

    if (!estudantes) {
        return res.status(404).send({ message: 'Estudante não encontrado.' });
}

    res.status(200).send(estudantes);
};

module.exports = buscarAluguelPorIdEstudante;