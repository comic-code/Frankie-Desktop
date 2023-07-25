import axios from 'axios';

export const baseUrl = process.env.PROD_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getGames() {
  const response = await axios.get('/games');
  return response.data;
}

export async function getGameGenres() {
  const response = await axios.get('/games/genres');
  return response.data;
}

export async function searchGame(searchQuery) {
  const response = await axios.get('/games/search', {
    params: { searchQuery }
  });
  return response.data;
}

export async function newGame(game) {
  const response = await axios.post('/games', game);
  return response.data;
}