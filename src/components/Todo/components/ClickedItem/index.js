import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../../../GlobalContext';
import { ClickedItemWrapper } from './styles';
import IconDone from '../../../../assets/icons/icon-done.png';
import IconNotDone from '../../../../assets/icons/icon-not-done.png';
import { newMovie } from '../../../../api/movies';
import { newGame } from '../../../../api/games';
import { newSerie } from '../../../../api/series';

export default function ClickedItem({item, setItem, type, cleanWindow}) {
  const ratingNotes = [
    '0.0 / 5.0 ⭐️', '0.5 / 5.0 ⭐️',
    '1.0 / 5.0 ⭐️', '1.5 / 5.0 ⭐️',
    '2.0 / 5.0 ⭐️', '2.5 / 5.0 ⭐️',
    '3.0 / 5.0 ⭐️', '3.5 / 5.0 ⭐️',
    '4.0 / 5.0 ⭐️', '4.5 / 5.0 ⭐️',
    '5.0 / 5.0 ⭐️',
  ];
  const { movies, setMovies, games, setGames, series, setSeries } = useContext(GlobalContext);

  function handleAddNewItem() {
    const items = type === 'movie' ? movies
                : type === 'game' ? games
                : type === 'serie' && series;
    const newFunction = type === 'movie' ? newMovie
                      : type === 'game' ? newGame
                      : type === 'serie' && newSerie;

    const setFunction = type === 'movie' ? setMovies
    : type === 'game' ? setGames
    : type === 'serie' && setSeries;

    const have = items.some(element => element.name === item.name);
    if(have) {
      alert(item.name + ' já existe em sua lista.');
    } else {
      newFunction(item).then(() => {
        setFunction(old => [item, ...old]);
        cleanWindow();
      });
    }
  }

  function handleDone() {
    setItem(item => ({...item, done: !item.done}));
  }

  useEffect(() => {
    setItem(old => ({...old, rating: null}));
  }, [item?.done]);

  return (
    <ClickedItemWrapper backdrop={item.backdrop}>
      <div className="content">
        <h1>{item.name}</h1>
        <h2>({item.formatted_release_date.substring(6, 10)})</h2>
      
        <div className='overview'>
          <img src={item.poster} alt="poster"/>
          <p>{item.overview}</p>
        </div>
              
        <footer>
          <div className="genres">
            {item.genres.map(genre => 
              <span key={genre.id}>{genre.name}</span>
            )}
          </div>
          <div className="addArea">
            <span>
              <button onClick={handleDone}>
                <img src={item.done ? IconDone : IconNotDone} alt="" />
              </button>
              {item.done &&
                <select 
                  value={item.rating} 
                  onChange={e => setItem(old => ({...old, rating: e.target.value}))}
                >
                  <option value="">Sem nota</option>
                  {ratingNotes.map(note => 
                    <option key={note}>{note}</option>
                  )}
                </select>
              }
            </span>
            <button onClick={handleAddNewItem}>Adicionar</button>
          </div>
        </footer>
      </div>
    </ClickedItemWrapper>
  )
}