const { livros } = require('../data');

const listarLivro = (req, res) => {
    res.status(200).send(livros);
};

module.exports = listarLivro