import axios from 'axios';
import config from '../config'; // Importando a configuração correta

// Função para fazer logout - pode ser chamada de qualquer lugar
const logout = () => {
  localStorage.removeItem('token');
};

export const authService = {
  async login(email, password) {
    const normalizedEmail = email.toLowerCase().trim();

    // Usando a instância do Axios sem o interceptador de token para a requisição de login
    const { data } = await axios.post(
      `${config.API_URL}/v1/Auth/SignIn`,
      {
        username: normalizedEmail,
        password,
        role: 1,
        tenantName: 'development.com.br',
        frontUrl: 'development.com.br',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          accept: '*/*',
        },
      }
    );

    if (!data?.token) {
      throw new Error('Token não recebido da API');
    }

    // --- CORREÇÃO CRUCIAL ---
    // 1. Salva o token recebido no localStorage
    localStorage.setItem('token', data.token);

    // 2. Retorna o token para que o resto da aplicação possa usá-lo se necessário
    return data.token;
  },

  // Exportando a função de logout junto com o serviço
  logout,
};
