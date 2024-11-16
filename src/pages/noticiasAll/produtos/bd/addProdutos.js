import axios from 'axios';
import urlApi from '../../../../_mock/url';
export default function AdicionarProduto(logado, data, url, userToken) {

    return new Promise((resolve, reject) => {
        if (logado) {
            async function add() {
                try {
                        try {
                            const caminho = '/produtos/adicionar';
                            const response = await axios.get(`${urlApi}${caminho}`, {
                                params: {
                                    name: data.name,
                                    valor: data.valor,
                                    quantidade: data.quantidade,
                                    ativo: data.ativo ? 1 : 0,
                                    imagen: url,
                                },
                                headers: {
                                    authorization: userToken,
                                },
                            });

                            ;
                            resolve(response)
                           
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