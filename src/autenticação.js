import { useState, createContext } from 'react';
import {/* getAuth, signInWithPopup,*/ GoogleAuthProvider } from "firebase/auth";


// components

// mock
//import USERLIST from '../../_mock/user';





import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

export const authGoogleContex = createContext({});
export const provider = new GoogleAuthProvider();
export const AuthGoogle = ({ children }) => {
  const { loanding, setLoanding } = useState(false)
  const [user, setUser] = useState(null)

  //+*******************************************
  //    mensagem de alerda de falhas 
  const [errorMessage, setErrorMessage] = useState()
  //+*******************************************
  //    mensagem de alerda de falhas 
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


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

  const login = async (loginEmail, loginPassword) => {

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
      console.log(user)
      setUser(user)
        return true;
    } catch (error) {
      console.log(error.message);
      if (error === "FirebaseError: Firebase: Error (auth/invalid-email).") {
        setErrorMessage("Email invalido ")
    }
    if (error === "FirebaseError: Firebase: Error (auth/wrong-password).") {
      setErrorMessage("Senha Incorreta ")
    } else {
      setErrorMessage(error.message === "Firebase: Error (auth/user-not-found)." ? "usuario incorreto " : error.message)
    }
      return false
    }

  };









  const logout = async () => {
    await signOut(auth);
  };

  const acoontUser = []
  if (user) {
    const usuario = async () => {
      try {

        await acoontUser.push({
          displayName: user.displayName !== null ? user.displayName : user.email,
          email: user.email,
          photoURL: user.photoURL,
          sobrenome: '',
          telefone:'',
          role:'',
          comunity:'',
        })


      } catch (error) {
        console.log("Fire base => ", error.message)
      }
    };
    usuario()


  } else {
    acoontUser.push({
      displayName: 'Junior Oliveira',
      email: 'demo@junior.cc',
      photoURL: 'https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_800_800/0/1656433703054?e=1673481600&v=beta&t=0BQ4CcNHqAfALp3abBGJSnPZLFjZ6vq2jAMfvrvlt8Y',
      sobrenome: '',
      telefone:'',
      role:'',
      comunity:'',
    })
  }


  return (
    <authGoogleContex.Provider
      value={{ signed: !!user, logout, login, register, user, loanding, acoontUser, errorMessage }}>
      {children}
    </authGoogleContex.Provider>
  )

}




