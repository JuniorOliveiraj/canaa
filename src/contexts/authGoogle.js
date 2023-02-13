import { useState, useEffect, createContext } from 'react';

import {/*getAuth, */signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { auth } from "../firebase";
import * as Photos from "../contexts/galeriDePhotos";


export const authGoogleContex = createContext({});
export const provider = new GoogleAuthProvider();
export const AuthGoogle = ({ children }) => {
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const login = async () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user)


                sessionStorage.setItem("@AuthFirebase: token", token);
                sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                /*const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);*/
            });
    };

    /*  ********************************************************************************************
    ****************************** senha *********************************************************** */



    const register = async (registerEmail, registerPassword, nameRegister) => {
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword, nameRegister)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                //   const errorMessage = error.message;
                console.log(errorCode)

                if (error == "FirebaseError: Firebase: Error (auth/invalid-email).") {
                    alert("Email invalido ")
                }
                if (error == "FirebaseError: Firebase: Error (auth/wrong-password).") {
                    alert("Senha Incorreta ")
                } else {
                    alert(error)
                }
            });
    }




    const LoginSenha = async (loginEmail, loginPassword) => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user)
                sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user));
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
              //  const errorMessage = error.message;


                if (error == "FirebaseError: Firebase: Error (auth/invalid-email).") {
                    alert("Email invalido ")
                }
                if (error == "FirebaseError: Firebase: Error (auth/wrong-password).") {
                    alert("Senha Incorreta ")
                } else {
                    alert(error)
                }
            });
    }

    const logout = async () => {
        await signOut(auth);
    };
    const log = auth.currentUser;
    //   {user?.email}
    /* ****************************************************
          DWLOAND URL IMG
    ****************************************************************************************/
    const [loand, setLoand] = useState(false)
    const [photos, setphotos] = useState([])
    useEffect(() => {
        const getPhotos = async () => {
            setLoand(true);
            setphotos(await Photos.getAll());
            setLoand(false);
        }; getPhotos()
    }, []);
    const a = "adasdasdad"






    return (
        <authGoogleContex.Provider
            value={{ signed: !!user, user, auth, logout, login, log, LoginSenha, register, loand, photos, a  }}>
            {children}
        </authGoogleContex.Provider>


    )


}
