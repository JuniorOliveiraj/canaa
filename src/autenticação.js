import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import urlApi from './_mock/url';
import { authService } from './auth/auth.service';
import { decodeJwt } from './auth/jwt.utils';

export const authGoogleContex = createContext({});

export const AuthGoogle = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accountUser, setAccountUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 🔁 restaura sessão
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) return;

    const parsed = JSON.parse(stored);
    if (parsed?.accessToken) {
      setUser(parsed);
      setAccountUser(parsed);
      setLoggedIn(true);
    }
  }, []);

  // 🔐 LOGIN (mesma assinatura)
  const login = async (email, password) => {
    try {
      setLoading(true);
      setErrorMessage('');

      const token = await authService.login(email, password);

      // 🔓 tudo vem do JWT agora
      const decoded = decodeJwt(token);
 
      const authUser = {
        ...decoded,
        accessToken: token,
      };
      console.log(authUser);
      setUser(authUser);
      setAccountUser(authUser);
      setLoggedIn(true);

      localStorage.setItem('user', JSON.stringify(authUser));
    } catch (error) {
      setLoggedIn(false);
      setErrorMessage(
        error?.response?.data?.error ||
        error?.message ||
        'Servidor indisponível'
      );
    } finally {
      setLoading(false);
    }
  };

  // 🚪 LOGOUT (inalterado)
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setAccountUser(null);
    setLoggedIn(false);
  };

  // 🔄 Mantido para compatibilidade (agora reusa JWT)
  const reloadAccountUserSet = async () => {
    const stored = localStorage.getItem('user');
    if (!stored) return;

    const parsed = JSON.parse(stored);
    setAccountUser(parsed);
  };

  // ⚠️ Mantidos para não quebrar quem consome
  const register = async () => {
    throw new Error('register não implementado neste contexto');
  };

  const loginApiPhp = async () => {
    throw new Error('loginApiPhp não implementado neste contexto');
  };

  return (
    <authGoogleContex.Provider
      value={{
        signed: loggedIn,
        user,
        login,
        logout,
        register,
        loginApiPhp,
        errorMessage,
        loading,
        loggedIn,
        reloadAccountUserSet,
        accountUser,
      }}
    >
      {children}
    </authGoogleContex.Provider>
  );
};
