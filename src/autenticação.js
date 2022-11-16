import { useState, createContext } from 'react';
import {/* getAuth, signInWithPopup,*/ GoogleAuthProvider } from "firebase/auth";

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
        const {loanding,setLoanding } = useState(false)
       const [user, setUser] = useState(null)
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      

        const register = async (registerEmail, registerPassword) => {
            try {
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
                    setLoanding(true)
                    setUser(user)
                    sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user))
                    setLoanding(false)
            } catch (error) {
                console.log(error.message)
                alert(error)
            }
         }
      
        const login = async ( loginEmail, loginPassword) => {
          try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginEmail,
              loginPassword
            );
            console.log(user)
          } catch (error) {
            console.log(error.message);
          }
        };




      
        const logout = async () => {
          await signOut(auth);
        };
      

    
      
 
    return (
        <authGoogleContex.Provider
            value={{ signed: !!user,logout,login,register,user,loanding   }}>
            {children}
        </authGoogleContex.Provider>
    )

}




