import axios from 'axios';

// Configuración del cliente API
const apiClient = axios.create({
  baseURL: 'https://api.twelvedata.com/', 
  timeout: 8000, 
});

// Interceptor de solicitudes (opcional)
apiClient.interceptors.request.use(
  (config) => {
    // Puedes agregar tokens de autenticación aquí si es necesario
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuestas para manejar los errores (opcional)
apiClient.interceptors.response.use(
  (response) => {
    // Maneja la respuesta exitosa aquí
    return response;
  },
  (error) => {
    // Manejo de errores en las respuestas
    if (error.response) {
      console.error(`Error: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
      console.error('Error: No response received from server', error.request);
    } else {
      console.error('Error setting up request', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;