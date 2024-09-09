const express = require("express");
const listarConsulta = require("./consultas/listarConsulta");
const criarConsulta = require("./consultas/criarConsulta");
const editarConsulta = require("./consultas/editarConsulta");
const removerConsulta = require("./consultas/removerConsulta");
const listarMedico = require("./medicos/listarMedicos");
const criarMedico = require("./medicos/criarMedicos");
const editarMedico = require("./medicos/editarMedicos");
const removerMedico = require("./medicos/removerMedicos");
const listarPaciente = require("./pacientes/listarPaciente");
const criarPaciente = require("./pacientes/criarPaciente");
const editarPaciente = require("./pacientes/editarPaciente");
const removerPaciente = require("./pacientes/removerPaciente");
const buscarPorMedico = require("./consultas/buscarPorMedico");
const buscarPorPaciente = require("./consultas/buscarPorPaciente");
const buscarPorEspecialidade = require("./medicos/buscarMedicoPorEspecialidade");
const buscarMedicoPorNome = require("./medicos/buscarMedicoPorNome");
const buscarPacientePorNome = require("./pacientes/buscarPacientePorNome");
const buscarPorNascimento = require("./pacientes/buscarPacientePorNascimento");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Seja bem-vindo!!");
});

app.get("/consultas/buscarMedico/:idMedico", buscarPorMedico);
app.get("/consultas/buscarPaciente/:idPaciente", buscarPorPaciente);
app.get("/consultas/", listarConsulta);
app.post("/consultas/", criarConsulta);
app.put("/consultas/:id", editarConsulta);
app.delete("/consultas/:id", removerConsulta);

app.get("/medicos/buscarEspecialidade", buscarPorEspecialidade);
app.get("/medicos/buscarNome", buscarMedicoPorNome);
app.get("/medicos", listarMedico);
app.post("/medicos", criarMedico);
app.put("/medicos/:id", editarMedico);
app.delete("/medicos/:id", removerMedico);

app.get("/pacientes/buscarNome", buscarPacientePorNome);
app.get("/pacientes/buscarNascimento", buscarPorNascimento)
app.get("/pacientes", listarPaciente);
app.post("/pacientes", criarPaciente);
app.put("/pacientes/:id", editarPaciente);
app.delete("/pacientes/:id", removerPaciente);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
