import { useState, createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import { auth } from "./firebase";
import account from "./_mock/account";
import urlApi from "./_mock/url";
import "./App.css";

export const authGoogleContex = createContext({});
export const provider = new GoogleAuthProvider();

export const AuthGoogle = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const formatUserData = (data) => ({
    uid: data.ID,
    email: data.EMAIL,
    displayName: data.NOME || data.EMAIL,
    updated_at: data.updated_at,
    accessToken: data.token,
    permission_level: data.PAPEL,
    role: data.COMPANY,
    photoURL: data.FOTO,
    phoneNumber: data.phoneNumber,
    country: data.country,
    address: data.address,
    state: data.state,
    city: data.city,
    zipCode: data.zipCode,
    about: data.about,
    isPublic: data.isPublic,
    senha: data.SENHA,
  });

  useEffect(() => {
    const loadUserFromLocalStorage = () => {
      const userString = localStorage.getItem("user");
      if (!userString) return setLoggedIn(false);

      const localUser = JSON.parse(userString);
      if (!localUser?.accessToken) return;

      axios.get(`${urlApi}/users/userLoad`, {
        headers: {
          Authorization: localUser.accessToken,
          Id: localUser.uid,
        },
      })
      .then((response) => {
        if (response.data?.user?.[0]) {
          const userData = formatUserData({ ...response.data.user[0], token: response.data.token });
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          setLoggedIn(true);
        }
      })
      .catch((error) => console.error("Erro ao carregar usuário:", error));
    };

    loadUserFromLocalStorage();
  }, [reloadTrigger]);

  const register = async (email, password) => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setUser(response.user);
      sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(response.user));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.get(`${urlApi}/login`, { params: { email, password } });
      const { message, user, token } = response.data;

      if (message === "email incorreto.") return setErrorMessage("E-mail incorreto.");
      if (message === "Senha inválida.") return setErrorMessage("Senha incorreta.");

      const formattedUser = formatUserData({ ...user, token });
      localStorage.setItem("user", JSON.stringify(formattedUser));
      setUser(formattedUser);
    } catch (error) {
      console.error("Erro no login:", error);
      const msg = error.response?.data?.error;
      setErrorMessage(msg === "email incorreto." ? "E-mail incorreto." : msg === "Senha inválida." ? "Senha inválida." : "Servidor offline.");
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const loginApiPhp = (name, email, password) => {
    axios.get(`${urlApi}/register`, { params: { name, email, password } })
      .then((response) => {
        const { message, user, token } = response.data;

        if (message === "email incorreto.") return setErrorMessage("E-mail incorreto.");
        if (message === "senha incorreto.") return setErrorMessage("Senha incorreta.");

        const formattedUser = formatUserData({ ...user, token });
        localStorage.setItem("user", JSON.stringify(formattedUser));
        setUser(formattedUser);
      })
      .catch((error) => console.error("Erro na API PHP:", error));
  };

  const reloadAccountUserSet = () => setReloadTrigger((prev) => prev + 1);

  const accountUser = user ? [{
    id: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    permission_level: user.permission_level,
    role: user.role,
    accessToken: user.accessToken,
    phoneNumber: user.phoneNumber,
    country: user.country,
    address: user.address,
    state: user.state,
    city: user.city,
    zipCode: user.zipCode,
    about: user.about,
    isPublic: user.isPublic,
    senha: user.senha,

  }] : [{
    displayName: account.displayName,
    email: account.email,
    photoURL: account.photoURL,
    permission_level: '',
    role: '',
  }];

  return (
    <authGoogleContex.Provider
      value={{
        signed: !!user,
        user,
        login,
        logout,
        register,
        loginApiPhp,
        errorMessage,
        loading,
        loggedIn,
        reloadAccountUserSet,
        accountUser
      }}
    >
      {children}
    </authGoogleContex.Provider>
  );
};
