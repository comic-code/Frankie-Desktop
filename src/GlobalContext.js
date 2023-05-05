import { createContext, useEffect, useState } from 'react';

import { getGameGenres, getGames } from './api/games';
import { getMovieGenres, getMovies } from './api/movies';
import { getSerieGenres, getSeries } from './api/series';
import { getBooks } from './api/books';
import { getAlexa } from './api/alexa';

export const GlobalContext = createContext({});
export default function GlobalProvider({ children }) {
  const [activeWindows, setActiveWindows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [games, setGames] = useState([]);
  const [books, setBooks] = useState([]);
  const [alexaIsConnected, setAlexaIsConnected] = useState(false);
  const [series, setSeries] = useState([]);
  const ratings = [
    "0.0 / 5.0 ⭐️", "0.5 / 5.0 ⭐️", "1.0 / 5.0 ⭐️", "1.5 / 5.0 ⭐️", "2.0 / 5.0 ⭐️", "2.5 / 5.0 ⭐️",
    "3.0 / 5.0 ⭐️", "3.5 / 5.0 ⭐️", "4.0 / 5.0 ⭐️", "4.5 / 5.0 ⭐️", "5.0 / 5.0 ⭐️",
  ]
  let movieGenres = [];
  let gameGenres = [];
  let serieGenres = [];
  let booksGenres = ['Aventura', 'Biografia', 'Comédia', 'Drama', 'Fantasia', 'Ficção Científica', 'Terror', 'Mistério', 'Romance', 'Romance de amor'];

  useEffect(() => {
    getMovieGenres().then(result => movieGenres = result);
    getMovies().then(movies => setMovies(movies));
    
    getSerieGenres().then(result => serieGenres = result);
    getSeries().then(movies => setSeries(movies));
    
    getGameGenres().then(result => gameGenres = result);
    getGames().then(games => setGames(games));

    getBooks().then(books => setBooks(books));

    getAlexa().then(alexa => setAlexaIsConnected(alexa.connected));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        activeWindows, setActiveWindows,
        movies, setMovies, movieGenres,
        games, setGames, gameGenres,
        series, setSeries, serieGenres,
        books, setBooks, booksGenres, ratings,
        alexaIsConnected, setAlexaIsConnected
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}