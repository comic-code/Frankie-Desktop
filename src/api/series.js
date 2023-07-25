import axios from 'axios';

export const baseUrl = process.env.PROD_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getSeries() {
  const response = await axios.get('/series');
  return response.data;
}

export async function searchSerie(searchQuery) {
  const response = await axios.get('/series/search', {
    params: { searchQuery }
  });
  return response.data;
}

export async function newSerie(serie) {
  const response = await axios.post('/series', serie);
  return response.data;
}

// export async function ratingMovie(movieId, rating) {
//   const response = await axios.put('/movies', {movieId, rating});
//   return response.status === 200;
// } 

export async function getSerieGenres() {
  const response = await axios.get('/series/genres');
  return response.data;
}