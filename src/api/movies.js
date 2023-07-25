import axios from 'axios';

export const baseUrl = process.env.PROD_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getMovies() {
  const response = await axios.get('/movies');
  return response.data;
}

export async function searchMovie(searchQuery) {
  const response = await axios.get('/movies/search', {
    params: { searchQuery }
  });
  return response.data;
}

export async function newMovie(movie) {
  const response = await axios.post('/movies', movie);
  return response.data;
}

export async function editMovie(movieId, done, rating) {
  const response = await axios.put('/movies', {movieId, done, rating});
  return response.status === 200;
} 

export async function getMovieGenres() {
  const response = await axios.get('/movies/genres');
  return response.data;
}