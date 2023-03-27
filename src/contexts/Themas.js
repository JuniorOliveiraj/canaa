import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import urlApi from '../_mock/url';

// components

// mock
//import USERLIST from '../../_mock/user';





const url = urlApi ;
export const AlteracaoThema = createContext({});

export const AlterThema = ({ children }) => {
  const [darkModeThem,  setDarkModeThem] = useState(false);
  const [ok, setOk] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [noticiasTodas, setNoticiasTodas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onFilterName, setOnFilterName] = useState("");
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
      setIsLoading(false)
      const caminho = '/noticias/buscarNoticias';
      const q = 'noticias'; // valor da variável tema 
      const lang = 'pt';// valor da variável lingauem 
      const country = 'br';
      const max = '90';
      if (q !== null) {
        debounce(() => {
          axios.get(`${url}${caminho}?q=${q}&?lang=${lang}&?country=${country}&?max=${max}`)
            .then((response) => {
              if (response.data.message === 'Limite de requisições diárias excedido') {
                console.log('error');
            
              } else {
                setNoticias(response.data.articles);
                setNoticiasTodas(response.data.articles);
                setIsLoading(false);
                setOk(response.data.articles =! 0 && true);
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
  }, [url]);


  async function fetchData2() {
    setIsLoading(false)
    const caminho = '/noticias/buscarNoticias';
    const q = onFilterName !== '' ? onFilterName : null; // valor da variável tema 
    const lang = 'pt';// valor da variável lingauem 
    const country = 'br';
    const max =  '90';
    console.log(q)
    if (q !== null) {
      debounce(() => {
        console.log(q)
        axios.get(`${url}${caminho}?q=${q}&?lang=${lang}&?country=${country}&?max=${max}`)
          .then((response) => {
            if (response.data.message === 'Limite de requisições diárias excedido') {
              console.log('error');
           
              setNoticias([]);

            } else {
              setNoticias(response.data.articles);
              console.log("dados", response);
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


  return (
    <AlteracaoThema.Provider
      value={{  darkModeThem,  setDarkModeThem, noticias, isLoading, fetchData2, setIsLoading, ok, onFilterName, setOnFilterName, noticiasTodas }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




