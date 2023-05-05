import axios from 'axios';

export const baseUrl = process.env.PROD_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getAlexa() {
  const response = await axios.get('/alexa');
  return response.data;
}

export async function alexa(command) {
  const response = await axios.get(`/alexa/make?command=${command}`);
  return response.data;
}