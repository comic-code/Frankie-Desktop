import { createContext, useEffect, useState } from 'react';

import { getGameGenres, getGames } from './api/games';
import { getMovieGenres, getMovies } from './api/movies';
import { getSerieGenres, getSeries } from './api/series';

let movieGenres = [];
let gameGenres = [];
let serieGenres = [];

export const GlobalContext = createContext({});
export default function GlobalProvider({ children }) {
  const [activeWindows, setActiveWindows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [games, setGames] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getMovieGenres().then(result => movieGenres = result);
    getMovies().then(movies => setMovies(movies));
    
    getSerieGenres().then(result => serieGenres = result);
    getSeries().then(movies => setSeries(movies));
    
    getGameGenres().then(result => gameGenres = result);
    getGames().then(games => { setGames(games); });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        activeWindows, setActiveWindows,
        movies, setMovies, movieGenres,
        games, setGames, gameGenres,
        series, setSeries, serieGenres
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}