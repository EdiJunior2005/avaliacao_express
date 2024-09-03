const criarAluguel = require("./aluguel/criarAluguel");
const editarAluguel = require("./aluguel/editarAluguel");
const listarAluguel = require("./aluguel/listarAluguel");
const removerAluguel = require("./aluguel/removerAluguel");

const express = require("express");
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

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
