const { aluguel } = require('../data');

const buscarAluguelPorIdLivro = (req, res) => {
const { idLivro } = req.params;

const livro = aluguel.filter((l) => l.idLivro == idLivro);
console.log(livro);

    if (livro.length === 0) {
        return res.status(404).send({ message: 'Livro não encontrado.' });
}
    res.status(200).send(livro);
};

module.exports = buscarAluguelPorIdLivro;