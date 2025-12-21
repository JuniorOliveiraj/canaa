import axios from 'axios';
import urlApi from '../_mock/url';

export const authService = {
  async login(email, password) {
    const normalizedEmail = email.toLowerCase().trim();

    const { data } = await axios.post(
      `${urlApi}/v1/Auth/SignIn`,
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

    // ✅ RETORNA APENAS A STRING DO TOKEN
    return data.token;
  },
};
