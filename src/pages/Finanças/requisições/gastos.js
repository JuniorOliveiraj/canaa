import axios from 'axios';
import urlApi from '../../../_mock/url';
export default function ListarTodosGastos(logado, userToken, id) {
    return new Promise((resolve, reject) => {
        const headers = {
            authorization: `${userToken}`
        };
        if (logado) {
            async function add() {
                try {
                    try {
                        const caminho = '/gatos/list-gastos-total';
                        const response = await axios.get(`${urlApi}${caminho}?userID=1`, { headers });
                        resolve(response.data)

                    } catch (error) {
                        console.log(error);
                        reject(false)
                    }

                } catch (error) {
                    console.log("Erro ao fazer upload dos dados:", error);
                }
            }
            add()
        } else {
            console.log('faça login');
            reject(false)
        }
    })

}
