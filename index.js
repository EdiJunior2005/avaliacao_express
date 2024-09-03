const criarAluguel = require("./aluguel/criarAluguel");
const editarAluguel = require("./aluguel/editarAluguel");
const listarAluguel = require("./aluguel/listarAluguel");
const removerAluguel = require("./aluguel/removerAluguel");

const express = require("express");
const buscarEstudantePorCurso = require("./estudantes/buscarEstudantePorCurso");
const buscarEstudantePorMatricula = require("./estudantes/buscarEstudantePorMatricula");
const buscarEstudantePorNome = require("./estudantes/buscarEstudantePorNome");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("seja bem vindo!!");
});

app.get("/alugueis", listarAluguel);
app.post("/aluguel", criarAluguel);
app.put("/aluguel/:id", editarAluguel);
app.delete("/aluguel/:id", removerAluguel);

app.get("/estudantes/curso", buscarEstudantePorCurso);
app.get("/estudantes/matricula", buscarEstudantePorMatricula);
app.get("/estudantes/nome", buscarEstudantePorNome);

const buscarLivroPorAno = require("./livros/buscarLivroPorAno");
app.get("/livros/buscar/ano", buscarLivroPorAno);

const buscarLivroPorAutor = require("./livros/buscarLivroPorAutor");
app.get("/livros/buscar/autor", buscarLivroPorAutor);

const buscarLivroPorGenero = require("./livros/buscarLivroPorGenero");
app.get("/livros/buscar/genero", buscarLivroPorGenero);

const buscarLivroPorTitulo = require("./livros/buscarLivroPorTitulo");
app.get("/livros/buscar/titulo", buscarLivroPorTitulo);

const buscarAlugueisPorIdEstudante = require("./aluguel/buscarAluguelPorIdDoEstudante");
app.get("/alugueis/estudante/:idEstudante", buscarAlugueisPorIdEstudante);

const buscarAlugueisPorIdLivro = require("./aluguel/buscarAluguelPorIdDoLivro");
app.get("/alugueis/livro/:idLivro", buscarAlugueisPorIdLivro);

const buscarAlugueisPorData = require("./aluguel/buscarAluguelPorData");
app.get("/alugueis/data", buscarAlugueisPorData);

const cadastrarEstudantes = require("./estudantes/cadastrarEstudantes");
const listarEstudantes = require("./estudantes/listarEstudantes");
const editarEstudante = require("./estudantes/editarEstudantes");
const removerEstudantes = require("./estudantes/removerEstudantes");

app.post("/estudante/cadastrar", cadastrarEstudantes);
app.get("/estudante/listar", listarEstudantes);
app.put("/estudante/editar/:id", editarEstudante);
app.delete("/estudante/remover/:id", removerEstudantes);

const criarLivro = require("./livros/criarLivro");
app.post("/livro/criar", criarLivro);

const listarLivro = require("./livros/listarLivro");
app.get("/livro/listar", listarLivro);

const editarLivro = require("./livros/editarLivro");
app.put("/livro/editar/:id", editarLivro);

const deletarLivro = require("./livros/deletarLivro");
app.delete("/livro/deletar/:id", deletarLivro);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});