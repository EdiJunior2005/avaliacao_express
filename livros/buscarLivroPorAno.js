const { livros } = require('../data');

const buscarLivroPorAno = (req, res) => {
    const { data } = req.query;

    const resultados = livros.filter(livro => livro.ano == data
    );

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Não foi encontrado esse ano.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarLivroPorAno;