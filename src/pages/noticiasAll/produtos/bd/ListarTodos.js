import axios from 'axios';
import urlApi from '../../../../_mock/url';
export default function ListarTodosProdutos(logado, userToken) {
    return new Promise((resolve, reject) => {
         const headers = {
          authorization: `${user.accessToken}`
        };
        if (logado) {
            async function add() {
                try {
                    try {
                        const caminho = '/produtos/listar-todos';
                        const response = await axios.get(`${urlApi}${caminho}`,  { headers });
                        console.log("token",userToken);
                        console.log(response.data);
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
