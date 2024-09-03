const { livros } = require('../data');

const buscarAluguelPorIdLivro = (req, res) => {
const { idLivro } = req.params;

const livro = livros.find(livro => livro.idLivro == idLivro);

    if (!livro) {
        return res.status(404).send({ message: 'Livro não encontrado.' });
}

    res.status(200).send(livro);
};

module.exports = buscarAluguelPorIdLivro;