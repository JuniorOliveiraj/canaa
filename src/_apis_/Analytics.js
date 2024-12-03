import axios from "axios";
import urlApi from "../_mock/url";
import mock from './mock';


export async function GetDados(mes, ano, rota) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${urlApi + rota}`, { params: mes });
      resolve(response);
    } catch (error) {
      reject(error);
      console.log('erro', error);
    }
  });
}



mock.onGet('/api/Analytics/gastos/all').reply(async (config) => {
  try {
    const { mes, ano, rota } = config.params;
    const dados = await GetDados(mes, ano, rota);
    return [200, { dados }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});


//-----------------------------------------------------------------

function mapearGasto(gasto) {
  return {
    id: gasto.id || crypto.randomUUID(), // Gera um ID único se não existir
    name: gasto.name,
    avatar: gasto.avatarImage ? gasto.avatarImage : "https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/rowfeed/svg/ic_payments_default_v2.svg",
    type: 'Expense', // Define um valor fixo se necessário
    message: 'Gastos mercado pago',
    category: gasto.name, // Usa o nome do gasto como categoria
    date: new Date(gasto.data).getTime(), // Converte a data para timestamp
    status: 'completed', // Define um valor padrão ou mapeia se houver campo correspondente
    amount: gasto.valor,
    handleNotion: gasto.handleNotion, 
  };
}
mock.onGet('/api/Analytics/gastos/list').reply(async (config) => {
  try {
    const { mes, ano, rota } = config.params;
    const dados = await GetDados(mes, ano, rota);
    const gastosMapeados = await dados.data.resultadoVerificacao.map(mapearGasto);

    return [200, { gastosMapeados }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
