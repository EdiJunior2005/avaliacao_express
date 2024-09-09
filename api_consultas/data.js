const medicos = [
    {
        id: 1, nome: "edi", especialidade: "ortopedia"
    }
]
const pacientes = [
    {
        id: 1, nome: "laura", dataNascimento: "20-07-2005"
    }
]
const consultas = [
    {
        id: 1, data: "09-09-2024", idMedico: 1, idPaciente: 1, descricao: "avaliação do joelho esquerdo"
    }
]
module.exports = { medicos, pacientes, consultas }