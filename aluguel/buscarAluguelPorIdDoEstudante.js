const { estudante } = require('../data');

const buscarAluguelPorIdEstudante = (req, res) => {
const { idEstudante } = req.params;

const estudantes = estudante.find(estudantes => estudantes.idEstudante == idEstudante);

    if (!estudantes) {
        return res.status(404).send({ message: 'Estudante não encontrado.' });
}

    res.status(200).send(estudantes);
};

module.exports = buscarAluguelPorIdEstudante;