import axios from 'axios';
import urlApi from '../../../_mock/url';
export default function editarUsusario(usuario, data,urlImg) {
    return new Promise((resolve, reject) => {
        if (usuario) {
            async function add() {
                try {
                    try {
                        const caminho = '/users/update';
                        const response = await axios.get(`${urlApi}${caminho}`, {
                            params: {
                                userID: usuario.uid ? usuario.uid:usuario.id,
                                form: data,
                                urlImg: urlImg,
                            },
                            headers: {
                                authorization: usuario.accessToken,
                            },
                        });
                        console.log(response);

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