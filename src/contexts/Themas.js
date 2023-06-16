import { useState, createContext, useEffect, useContext } from 'react';
import axios from 'axios';
import urlApi from '../_mock/url';
import { authGoogleContex } from '../autenticação';
// components

// mock
//import USERLIST from '../../_mock/user';





const url = urlApi;
export const AlteracaoThema = createContext({});

export const AlterThema = ({ children }) => {
  const [ok, setOk] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [noticiasTodas, setNoticiasTodas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onFilterName, setOnFilterName] = useState("");
  const [noticiasFavoritas, setNoticiasFavoritas] = useState([]);
  const [noticiasComStatusAtualizado, setNoticiasComStatusAtualizado] = useState([]);
  const [listaFinalDeNoticias, setlistaFinalDeNoticias] = useState([]);
  const [darkModeThem, setDarkModeThem] = useState(true);
  const { user } = useContext(authGoogleContex);
  useEffect(() => {
    function darkmodeLocal() {
      const darkThemeLocal = localStorage.getItem('thema');
      if (darkThemeLocal) {
        setDarkModeThem(darkModeThem);
      } else {
        localStorage.setItem('thema', false);
        setDarkModeThem(darkModeThem);
      }
    }
    darkmodeLocal();
  }, [darkModeThem]);

  useEffect(() => {
    const AuterThema = () => {
      setTimeout(() => {
        const url = urlApi + '/set-theme';
        const userId = user ? user.uid : '';
        const token = user ? user.accessToken : '';
        const headers = {
          'Authorization': token,
          'Id': userId,
        };
        console.log(userId, headers);
        axios.get(url, { headers })
          .then(response => {
            console.log(response.data);
            if (response.data) {
              setDarkModeThem(response.data.themastatus === 0 ? false : true);
            }
          })
          .catch(error => {
            console.error('Erro:', error);
          });
      }, 2000); // 3000 milissegundos = 3 segundos

    };
    AuterThema()


  }, [setDarkModeThem, user]);

  // useEffect(() => {
  //   axios.get('https://api-node-psi.vercel.app/users')
  //   .then(response => {
  //     console.log(response.data);
  //     alert('foi')
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     alert('n~~ao foi')
  //   });
  // }, []);
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  useEffect(() => {
    async function fetchData2() {
      //const url2 = urlApi;
      setIsLoading(false)
      const caminho = '/noticias/buscarNoticias';
      const q = 'noticias'; // valor da variável tema 
      const lang = 'pt';// valor da variável lingauem 
      const country = 'br';
      const max = '90';
      if (q !== null) {
        debounce(() => {
          axios.get(`${url}${caminho}`, {
            params: {
              q: q,
              lang: lang,
              country: country,
              max: max
            },
            // headers: {
            //   'Access-Control-Allow-Origin': '*',
            //   'Access-Control-Allow-Headers': '*'
            // }
          })
            .then((response) => {
              if (response.data.message === 'Limite de requisições diárias excedido') {
                console.log('Limite de requisições diárias excedido');

              } else {
                setNoticias(response.data.articles);
                setNoticiasTodas(response.data.articles);
                setIsLoading(false);
                setOk(response.data.articles = !0 && true);
              }
            })
            .catch((error) => {

              console.error(error);
              setNoticias([]);
            });
        }, 1000)

          ();
      }

    }
    fetchData2()
  }, []);
  async function fetchData2() {
    setIsLoading(false)
    const caminho = '/noticias/buscarNoticias';
    const q = onFilterName !== '' ? onFilterName : null; // valor da variável tema 
    const lang = 'pt';// valor da variável lingauem 
    const country = 'br';
    const max = '90';
    if (q !== null) {
      debounce(() => {
        axios.get(`${url}${caminho}`, {
          params: {
            q: q,
            lang: lang,
            country: country,
            max: max
          },
        })
          .then((response) => {
            if (response.data.message === 'Limite de requisições diárias excedido') {
              console.log('Limite de requisições diárias excedido');

              setNoticias([]);

            } else {
              setNoticias(response.data.articles);
              setIsLoading(false);
              setOk(noticias.articles = !0 && true)
            }
          })
          .catch((error) => {
            console.error(error);

            setNoticias([]);
          });
      }, 1000)

        ();
    }

  }


  async function adicionarFavorito(id, noticia, status, news_id) {
    setIsLoading(false);
    const caminho = '/favoritos/adicionar';
    debounce(() => {
      axios.get(`${url}${caminho}`, {
        params: {
          id: id,
          noticia: noticia,
          status: status,
          news_id: news_id
        }
      })
        .then((response) => {
          setIsLoading(false);

        })
        .catch((error) => {
          console.error(error);

        });
    }, 1000)

      ();
  }


  useEffect(() => {
    async function listarFavorito(id) {
      setIsLoading(false);
      const caminho = '/favoritos/listar';
      axios.get(`${url}${caminho}`, {
        params: {
          id: id,
        }
      })
        .then((response) => {
          setIsLoading(false);
          setNoticiasFavoritas(response.data);
          setOk(response.data.articles = !0 && true)
        })
        .catch((error) => {
          console.error(error);
        });


    }
    function loadUserFromLocalStorage() {
      const userString = localStorage.getItem('user');
      if (userString) {
        listarFavorito(JSON.parse(userString).uid);
      }
    }

    loadUserFromLocalStorage();

  }, []);

  useEffect(() => {
    // Atualiza o status das notícias que estão nas duas listas
    const noticiasComStatusAtualizado = noticias.map(noticia => {
      const encontradaEmFavoritas = noticiasFavoritas.find(favorita => favorita.title === noticia.title);
      if (encontradaEmFavoritas) {
        return { ...noticia, status: 0 };
      }

      return noticia;
    });
    setNoticiasComStatusAtualizado(noticiasComStatusAtualizado);
  }, [noticias, noticiasFavoritas]);

  setTimeout(() => {
    setlistaFinalDeNoticias(noticiasComStatusAtualizado)
  }, 1000);

  // Define a lista final de notícias, com o status atualizado


  return (
    <AlteracaoThema.Provider
      value={{ darkModeThem, setDarkModeThem, noticias, isLoading, fetchData2, setIsLoading, ok, onFilterName, setOnFilterName, noticiasTodas, adicionarFavorito, noticiasFavoritas, listaFinalDeNoticias, debounce }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




