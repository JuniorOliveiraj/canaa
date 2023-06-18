import axios from 'axios';
import urlApi from '../../../_mock/url';
export default function listarNoticias(onFilterName) {
    return new Promise((resolve, reject) => {
        const caminho = '/noticias/buscarNoticias';
        const q = onFilterName !== '' ? onFilterName : null; // valor da variável tema 
        const lang = 'pt';// valor da variável lingauem 
        const country = 'br';
        const max = '90';
        async function add() {
            try {
                try {
                    const response = await axios.get(`${urlApi}${caminho}`, {
                        params: {
                            q: q,
                            lang: lang,
                            country: country,
                            max: max
                        },
                    });
                    
                    resolve(response.data);
                } catch (error) {
                    reject(false)
                }
                
            } catch (error) {
                reject(false)
                console.log("Erro ao fazer upload dos dados:", error);
            }
        }
        add()

    })

}

