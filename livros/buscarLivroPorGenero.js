const { livros } = require('../data');

const buscarLivroPorGenero = (req, res) => {
    const { genes } = req.query;

    const resultados = livros.filter(livro => livro.genero.toLowerCase().includes(genes.toLowerCase())
    );

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Esse genero não foi encontrado.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarLivroPorGenero;