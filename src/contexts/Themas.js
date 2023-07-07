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

  const [isLoading, setIsLoading] = useState(true);
  const [onFilterName, setOnFilterName] = useState("");
  const [noticiasFavoritas, setNoticiasFavoritas] = useState([]);
  const [darkModeThem, setDarkModeThem] = useState(false);
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
        const url = urlApi + '/set-theme';
        const userId = user ? user.uid : '';
        const token = user ? user.accessToken : '';
        const headers = {
          'Authorization': token,
          'Id': userId,
        };
        axios.get(url, { headers })
          .then(response => {
            if (response.data) {
              setDarkModeThem(response.data.themastatus === 0 ? false : true);
            }
          })
          .catch(error => {
            console.error('Erro:', error);
          });



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



  // Define a lista final de notícias, com o status atualizado


  return (
    <AlteracaoThema.Provider
      value={{ darkModeThem, setDarkModeThem, isLoading, setIsLoading, ok, onFilterName, setOnFilterName, adicionarFavorito, noticiasFavoritas, debounce }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




