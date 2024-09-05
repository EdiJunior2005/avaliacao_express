const { aluguel } = require('../data');

const formatarData = (data) => {
    const [dia, mes, ano] = data.split('-');
    return `${ano}-${mes}-${dia}`;
};

const buscarAluguelPorData = (req, res) => {
    const { dataAluguel } = req.query;

    console.log('Parâmetro dataAluguel recebido:', dataAluguel);

    if (!dataAluguel) {
        return res.status(400).send({ message: 'Data de aluguel não fornecida.' });
    }

    const dataFormatada = formatarData(dataAluguel);

    console.log('Data formatada para comparação:', dataFormatada);

    const resultados = aluguel.filter(alugueis => {
        const dataAluguelFormatada = formatarData(alugueis.dataAluguel);
        return dataAluguelFormatada === dataFormatada;
    });

    console.log('Resultados encontrados:', resultados);

    if (resultados.length === 0) {
        return res.status(404).send({ message: 'Nenhum aluguel encontrado.' });
    }

    res.status(200).send(resultados);
};

module.exports = buscarAluguelPorData;