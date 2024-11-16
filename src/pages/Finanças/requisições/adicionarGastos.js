import axios from 'axios';
import urlApi from '../../../_mock/url';
export default function AdicionarGastos(usuario, data,) {
    return new Promise((resolve, reject) => {
        if (usuario) {
            async function add() {
                try {
                    try {
                        const caminho = '/gatos/cartao';
                        const response = await axios.get(`${urlApi}${caminho}`, {
                            params: {
                                userID: usuario.uid,
                                gastos: data.mensagen,
                            },
                            headers: {
                                authorization: usuario.accessToken,
                            },
                        });

                        ;
                        console.log(data.mensagen);
                        resolve(response)

                    } catch (error) {
                        reject(error)
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