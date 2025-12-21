import axios from 'axios';

axios.interceptors.request.use((config) => {
  const stored = localStorage.getItem('user');

  if (stored) {
    const { accessToken } = JSON.parse(stored);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});
