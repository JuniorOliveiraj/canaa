import axios from 'axios';
import urlApi from '../../../../_mock/url';
export default function AdicionaNoticia( data, url, userToken, id, name) {
    return new Promise((resolve, reject) => {
            async function add() {
                try {
                        try {
                            const caminho = '/noticias/adicionar';
                            const response = await axios.get(`${urlApi}${caminho}`, {
                                params: {
                                    noticia: data,
                                    urlImagen:url,
                                    id:id,
                                    name: name
                                },
                                headers: {
                                    authorization: userToken,
                                },
                            });

                            console.log(response);
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
    })

}