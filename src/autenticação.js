import { useState, createContext, useEffect } from 'react';
import {/* getAuth, signInWithPopup,*/ GoogleAuthProvider } from "firebase/auth";
import account from './_mock/account';
import axios from 'axios';
// components
import urlApi from './_mock/url';
// mock
//import USERLIST from '../../_mock/user';
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";
export const authGoogleContex = createContext({});
export const provider = new GoogleAuthProvider();
export const AuthGoogle = ({ children }) => {
  const url = urlApi;
  const [logado, setLogado] = useState(false)
  useEffect(() => {
    function loadUserFromLocalStorage() {
      const userString = localStorage.getItem('user');
      if (userString) {
        setUser(JSON.parse(userString));
        setLogado(true);
      }else{
        setLogado(false)
      }
    }
    loadUserFromLocalStorage();
  }, []);


  const { loanding, setLoanding } = useState(false)
  const [user, setUser] = useState(null)

  //+*******************************************
  //    mensagem de alerda de falhas 
  const [errorMessage, setErrorMessage] = useState()

  //+*******************************************
  //    mensagem de alerda de falhas 
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const register = async (registerEmail, registerPassword) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      setLoanding(true)
      setUser(user)
      sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user))
      setLoanding(false)
    } catch (error) {
      console.log(error.message)
      alert(error)
    }
  }

  // const login = async (loginEmail, loginPassword) => {

  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );

  //     sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
  //     console.log(user)
  //     setUser(user)
  //     return true;
  //   } catch (error) {
  //     console.log(error.message);
  //     if (error === "FirebaseError: Firebase: Error (auth/invalid-email).") {
  //       setErrorMessage("Email invalido ")
  //     }
  //     if (error === "FirebaseError: Firebase: Error (auth/wrong-password).") {
  //       setErrorMessage("Senha Incorreta ")
  //     } else {
  //       setErrorMessage(error.message === "Firebase: Error (auth/user-not-found)." ? "usuario incorreto " : error.message)
  //     }
  //     return false
  //   }

  // };
  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload(false);
  };


  const acoontUser = []
  if (user) {
    const usuario = async () => {
      try {
        await acoontUser.push({
          id: user.uid,
          displayName: user.displayName !== null ? user.displayName : user.email,
          email: user.email,
          photoURL: user.photoURL,
          sobrenome: '',
          telefone: '',
          role: '',
          comunity: '',
        })
      } catch (error) {
        console.log("Fire base => ", error.message)
      }
    };
    usuario()
  } else {
    acoontUser.push({
      displayName: account.displayName,
      email: account.email,
      photoURL: account.photoURL,
      sobrenome: '',
      telefone: '',
      role: '',
      comunity: '',
    })
  }


  const LoginApiPhp = (name, email, password) => {
    console.log(name, email, password);
    axios
      .get(`${url}/register`, {
        params: {
          name: name,
          email: email,
          password: password,
        },
      })
      .then((response) => {
        if (response.data.message === "email incorreto.") {
          setErrorMessage("email incorreto");
        } else if (response.data.message === "senha incorreto.") {
          setErrorMessage("senha incorreto.");
        } else {
          const user = {
            uid: response.data.user.id,
            email: response.data.user.email,
            displayName: response.data.user.name,
            updated_at: response.data.user.updated_at,
            accessToken: response.data.accessToken,
          };

          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = async (loginEmail, loginPassword) => {
    axios
      .get(`${url}/login`, {
        params: {
          email: loginEmail,
          password: loginPassword,
        },
      })
      .then((response) => {
        if (response.data.message === "email incorreto.") {
          setErrorMessage("email incorreto");
        } else if (response.data.message === "Senha inválida.") {
          setErrorMessage("senha incorreto.");
        } else {
          const user = {
            uid: response.data.user.id,
            email: response.data.user.email,
            displayName: response.data.user.name,
            updated_at: response.data.user.updated_at,
            accessToken: response.data.accessToken,
          };
         
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        }
      })
      .catch((error) => {
        console.log(error);
        if(error.response.data.error === "email incorreto."){
          setErrorMessage("email incorreto");
        }else if(error.response.data.error === "Senha inválida."){
          setErrorMessage("Senha inválida.");
        }else{
          setErrorMessage("serivor stoped");
        }
      });
  }




  // async function LoginApiPhp(name, email, password) {
  //   const caminho = '/teste';
  //   axios.get(`http://localhost:8080/teste?name=${name}&email=${email}&password=${password}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);

  //     });

  // }




  return (
    <authGoogleContex.Provider
      value={{ signed: !!user, logout, login, register, user, loanding, acoontUser, LoginApiPhp, errorMessage , logado}}>
      {children}
    </authGoogleContex.Provider>
  )

}




