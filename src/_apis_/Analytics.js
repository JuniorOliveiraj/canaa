import axios from "axios";
import urlApi from "../_mock/url";
import mock from './mock';


export async function GetDados(mes,ano,rota) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${urlApi+rota}`, { params: mes });
        resolve(response);
      } catch (error) {
        reject(error);
        console.log('erro', error);
      }
    });
  }
  
  
  
  mock.onGet('/api/Analytics/gastos/all').reply(async (config) => {
    try {
      const { mes, ano, rota} = config.params;
      //const rota = "/list/gastos/total";
      const dados = await GetDados(mes, ano,rota);
      return [200, { dados}];
    } catch (error) {
      console.error(error);
      return [500, { message: 'Internal server error' }];
    }
  });
  