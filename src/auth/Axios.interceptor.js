import axios from 'axios';
import config from '../config'; // CORREÇÃO: Importando a exportação padrão
import { authService } from './auth.service'; // CORREÇÃO: Importando o objeto de serviço

const axiosInstance = axios.create({
  // CORREÇÃO: Acessando a URL da API através da exportação padrão
  baseURL: config.API_URL,
});

// Interceptador de Requisição (Request Interceptor)
axiosInstance.interceptors.request.use(
  
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptador de Resposta (Response Interceptor)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response.data.error;

    // --- TRATAMENTO DE ERRO APRIMORADO ---

    // 1. Se o token expirou (erro 401), desloga o usuário.
    if (error.response && error.response.status === 401 || message === "Token Expired") {
      authService.logout(); // CORREÇÃO: Chamando a função logout a partir do objeto de serviço
      window.location.reload();
      return Promise.reject(error);
    }

    // 2. Se a API enviou uma mensagem de erro específica, use-a.
    if (error.response && error.response.data) {
      error.message = error.response.data;
    }

    // 3. Rejeita a promise com o objeto de erro agora aprimorado.
    return Promise.reject(error);
  }
);

export default axiosInstance;
