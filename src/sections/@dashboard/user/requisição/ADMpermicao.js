import axios from 'axios';
import urlApi from '../../../../_mock/url';
export default function tornarAdm(usuario, userSelct,cargo) {
    return new Promise((resolve, reject) => {
        if (usuario) {
            async function add() {
                try {
                    try {
                        const caminho = '/users/tornar-adm';
                        const response = await axios.get(`${urlApi}${caminho}`, {
                            params: {
                                userID: usuario.uid,
                                userSelct: userSelct.id,
                                cargo:cargo
                            },
                            headers: {
                                authorization: usuario.accessToken,
                            },
                        });
                        ;
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