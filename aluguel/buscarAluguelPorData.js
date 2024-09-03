const { aluguel } = require('../data');

const buscarAluguelPorData = (req, res) => {
    const { dataluguel } = req.query;

    const resultados = aluguel.filter(alugueis => alugueis.data.toLowerCase().includes(dataluguel.toLowerCase())
    );

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum aluguel encontrado.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarAluguelPorData;