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
  const [loadUser, setLoadUser] = useState(1)
  useEffect(() => {
    function loadUserFromLocalStorage() {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userLocal = JSON.parse(userString);
        if (userLocal) {
          if (userLocal.accessToken) {
            const url = urlApi + '/users/userLoad';
            const headers = {
              'Authorization': userLocal.accessToken,
              'Id': userLocal.uid,
            };
            axios.get(url, { headers })
              .then(response => {
                if (response.data) {
                  const user = {
                    uid: response.data.user[0].id,
                    email: response.data.user[0].email,
                    displayName: response.data.user[0].displayName,
                    updated_at: response.data.user[0].updated_at,
                    accessToken: response.data.token,
                    permission_level: response.data.user[0].permission_level,
                    role: response.data.user[0].role,
                    photoURL: response.data.user[0].photoURL,  
                    //outros dados do susuario
                    phoneNumber: response.data.user[0].phoneNumber,
                    country: response.data.user[0].country,
                    address: response.data.user[0].address,
                    state: response.data.user[0].state,
                    city: response.data.user[0].city,
                    zipCode: response.data.user[0].zipCode,
                    about: response.data.user[0].about,
                    isPublic: response.data.user[0].isPublic,
                  };
                  localStorage.setItem("user", JSON.stringify(user));
                  setUser(user);
                  setLogado(true);

                }
              })
              .catch(error => {
                console.error('Erro: ', error);
               console.log('Erro: ', error);
              });

          }
        }
      } else {
        setLogado(false)
      }
    }
    loadUserFromLocalStorage();
  }, [loadUser]);


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
          permission_level: user.permission_level,
          role: user.role,
          accessToken:user.accessToken,
          //ouros dados do usuario
          phoneNumber: user.phoneNumber,
          country: user.country,
          address: user.address,
          state: user.state,
          city: user.city,
          zipCode: user.zipCode,
          about: user.about,
          isPublic: user.isPublic,
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
      permission_level: '',
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
            uid: response.data.userId,
            email: response.data.user.email,
            displayName: response.data.user.name,
            updated_at: response.data.user.updated_at,
            accessToken: response.data.token,
            permission_level: response.data.user.permission_level,
            role: response.data.user.role,
            photoURL: response.data.user.photoURL,


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
            displayName: response.data.user.displayName,
            updated_at: response.data.user.updated_at,
            accessToken: response.data.token,
            permission_level: response.data.user.permission_level,
            role: response.data.user.role,
            photoURL: response.data.user.photoURL,
            //outros dados do ususario
            phoneNumber: response.data.user.phoneNumber,
            country: response.data.user.country,
            address: response.data.user.address,
            state: response.data.user.state,
            city: response.data.user.city,
            zipCode: response.data.user.zipCode,
            about: response.data.user.about,
            isPublic: response.data.user.isPublic,
          };
          
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.error === "email incorreto.") {
          setErrorMessage("email incorreto");
        } else if (error.response.data.error === "Senha inválida.") {
          setErrorMessage("Senha inválida.");
        } else {
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


  const reloadAcoontUserSet = async () => {
    await setLoadUser(loadUser + 1)
    try {
      await acoontUser.push({
        id: user.uid,
        displayName: user.displayName !== null ? user.displayName : user.email,
        email: user.email,
        photoURL: user.photoURL,
        sobrenome: '',
        telefone: '',
        permission_level: user.permission_level,
        role: user.role,
        //outros dados 
        phoneNumber: user.phoneNumber,
        country: user.country,
        address: user.address,
        state: user.state,
        city: user.city,
        zipCode: user.zipCode,
        about: user.about,
        isPublic: user.isPublic,

      })

    } catch (error) {
      console.log("Fire base => ", error.message)
    }

  }

  return (
    <authGoogleContex.Provider
      value={{ signed: !!user, logout, login, register, user, loanding, acoontUser, LoginApiPhp, errorMessage, logado, reloadAcoontUserSet }}>
      {children}
    </authGoogleContex.Provider>
  )

}




