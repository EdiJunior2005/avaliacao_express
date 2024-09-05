const express = require("express");

// Importar controladores
const criarAluguel = require("./aluguel/criarAluguel");
const editarAluguel = require("./aluguel/editarAluguel");
const listarAluguel = require("./aluguel/listarAluguel");
const removerAluguel = require("./aluguel/removerAluguel");
const buscarEstudantePorCurso = require("./estudantes/buscarEstudantePorCurso");
const buscarEstudantePorMatricula = require("./estudantes/buscarEstudantePorMatricula");
const buscarEstudantePorNome = require("./estudantes/buscarEstudantePorNome");
const cadastrarEstudantes = require("./estudantes/cadastrarEstudantes");
const listarEstudantes = require("./estudantes/listarEstudantes");
const editarEstudante = require("./estudantes/editarEstudantes");
const removerEstudantes = require("./estudantes/removerEstudantes");
const criarLivro = require("./livros/criarLivro");
const listarLivro = require("./livros/listarLivro");
const editarLivro = require("./livros/editarLivro");
const deletarLivro = require("./livros/deletarLivro");
const buscarLivroPorAno = require("./livros/buscarLivroPorAno");
const buscarLivroPorAutor = require("./livros/buscarLivroPorAutor");
const buscarLivroPorGenero = require("./livros/buscarLivroPorGenero");
const buscarLivroPorTitulo = require("./livros/buscarLivroPorTitulo");
const buscarAlugueisPorIdEstudante = require("./aluguel/buscarAluguelPorIdDoEstudante");
const buscarAluguelPorIdLivro = require("./aluguel/buscarAluguelPorIdDoLivro");
const buscarAluguelPorData = require("./aluguel/buscarAluguelPorData");

const app = express();
const port = 3000;

app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.send("Seja bem-vindo!!");
});

app.get("/alugueis", listarAluguel);
app.post("/aluguel", criarAluguel);
app.put("/aluguel/:id", editarAluguel);
app.delete("/aluguel/:id", removerAluguel);

app.get("/estudantes/curso", buscarEstudantePorCurso);
app.get("/estudantes/matricula", buscarEstudantePorMatricula);
app.get("/estudantes/nome", buscarEstudantePorNome);

app.post("/estudante/cadastrar", cadastrarEstudantes);
app.get("/estudante/listar", listarEstudantes);
app.put("/estudante/editar/:id", editarEstudante);
app.delete("/estudante/remover/:id", removerEstudantes);

app.post("/livro/criar", criarLivro);
app.get("/livro/listar", listarLivro);
app.put("/livro/editar/:id", editarLivro);
app.delete("/livro/deletar/:id", deletarLivro);

app.get("/livros/buscar/ano", buscarLivroPorAno);
app.get("/livros/buscar/autor", buscarLivroPorAutor);
app.get("/livros/buscar/genero", buscarLivroPorGenero);
app.get("/livros/buscar/titulo", buscarLivroPorTitulo);

app.get("/aluguel/estudante/:idEstudante", buscarAlugueisPorIdEstudante);
app.get("/aluguel/livro/:idLivro", buscarAluguelPorIdLivro);
app.get("/aluguel/data", buscarAluguelPorData);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
