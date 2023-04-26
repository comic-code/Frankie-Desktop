import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getBooks() {
  const response = await axios.get('/books');
  return response.data;
}

export async function getBooksGenres() {
  const response = await axios.get('/books/genres');
  return response.data;
}

export async function newBook(book) {
  const response = await axios.post('/books', book);
  return response.data;
}

export async function editBook(bookId, done, rating) {
  const response = await axios.put('/books', {bookId, done, rating});
  return response.data;
}