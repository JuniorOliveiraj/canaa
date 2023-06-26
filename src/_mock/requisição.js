import axios from 'axios';
import urlApi from './url';
export default function RequisicaoGet( params) {
    return new Promise((resolve, reject) => {
            async function add() {
                try {
                        try {
                            console.log(params.data)
                            const response = await axios.get(`${urlApi}${params.caminho}`, {
                                params: params.data,
                                headers: {
                                    authorization: params.authorization,
                                },
                            });
                            console.log(response);
                            resolve(response)
                           
                        } catch (error) {
                            console.log(error);
                            reject(error)
                        }

                } catch (error) {
                    console.log("Erro ao fazer upload dos dados:", error);
                }
            }
            add()      
    })

}