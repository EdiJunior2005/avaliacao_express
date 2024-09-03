const { livros } = require('../data');

const buscarLivroPorAutor = (req, res) => {
    const { escritor } = req.query;

    const resultados = livros.filter(livro => livro.autor.toLowerCase().includes(escritor.toLowerCase())
    );

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum autor encontrado.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarLivroPorAutor;