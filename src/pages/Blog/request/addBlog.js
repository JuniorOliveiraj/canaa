import axios from 'axios';
import urlApi from '../../../_mock/url';

export default function AdicionarBlog(usuario, values, urlCapa) {
  return new Promise(async (resolve, reject) => {
    if (usuario) {
      try {
        console.log(usuario);
        const caminho = '/blog/adicionar';

        const response = await axios.get(`${urlApi}${caminho}`, {
          params: {
            dadosBlog: values,
            userId: usuario.uid,
            urlCapa:urlCapa
          },
          headers: {
            authorization:usuario.accessToken,
          },
        });
        ;

   
          resolve(response.data);
       
      } catch (error) {
        console.log("Erro ao fazer upload dos dados:", error);
        reject(error);
      }
    } else {
      console.log('Faça login');
      reject(new Error('Usuário não autenticado'));
    }
  });
}
