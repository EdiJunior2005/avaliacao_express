const { livros } = require('../data');

function criarLivro(req, res){
    const novoLivro = {
        id: livros[livros.length -1].id +1,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano
    }
    livros.push(novoLivro)
    res
    .status(201)
    .send({message: 'Livro criado com sucesso!', livros:novoLivro})
}
module.exports = criarLivro