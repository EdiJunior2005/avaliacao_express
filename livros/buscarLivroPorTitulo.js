const { livros } = require('../data');

const buscarLivroPorTitulo = (req, res) => {
    const { termo } = req.query;

    const resultados = livros.filter(livro => livro.titulo.toLowerCase().includes(termo.toLowerCase())
    );

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Esse título não foi encontrado.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarLivroPorTitulo;