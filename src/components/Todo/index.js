import { useEffect, useState } from 'react';
import { TodoContainer } from './styles';

import IconGames from '../../assets/icons/icon-games.png';
import IconMovies from '../../assets/icons/icon-movies.png';
import IconSeries from '../../assets/icons/icon-series.png';
import IconBooks from '../../assets/icons/icon-books.png';
import TodoHeader from './components/TodoHeader';
import ListItems from './components/ListItems';
import TodoFilter from './components/TodoFilter';
import ClickedItem from './components/ClickedItem';
import BooksHeader from './components/TodoHeader/BooksHeader';

export default function Todo() {
  const items = [
    {label: 'movie', icon: IconMovies},
    {label: 'serie', icon: IconSeries},
    {label: 'game', icon: IconGames},
    {label: 'book', icon: IconBooks},
  ];

  const [selected, setSelected] = useState(items[0].label);
  const [filter, setFilter] = useState('all');
  const [filterName, setFilterName] = useState('');
  const [searchResponse, setSearchResponse] = useState(null);
  const [showSearchResponse, setShowSearchResponse] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  
  function cleanWindow() {
    setSearchResponse(null);
    setShowSearchResponse(null);
    setClickedItem(null);
    setFilterName('');
  }

  useEffect(() => {
    cleanWindow();
  }, [selected]);

  useEffect(() => {
    setFilter('all');
  }, [filterName])

  useEffect(() => {
    function handleKeyDown(e) {e.key === 'Escape' && cleanWindow()};
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TodoContainer>
      <aside>
        {items.map(item => 
          <button key={item.label} className={selected === item.label ? 'active' : ''} onClick={() => setSelected(item.label)}>
            <img src={item.icon} alt="" />  
          </button>
        )}
      </aside>
      <main>
        {selected === 'book'
          ? <BooksHeader />
          : <TodoHeader 
              selected={selected} setClickedItem={setClickedItem}
              searchResponse={searchResponse} setSearchResponse={setSearchResponse} 
              showSearchResponse={showSearchResponse} setShowSearchResponse={setShowSearchResponse}
            />
        }
        <ListItems selected={selected} filter={filter} filterName={filterName} />
        {clickedItem && 
          <ClickedItem item={clickedItem} setItem={setClickedItem} type={selected} cleanWindow={cleanWindow} />
        }
        <TodoFilter selected={selected} 
          filter={filter} setFilter={setFilter}
          filterName={filterName} setFilterName={setFilterName}
        />
      </main>
    </TodoContainer>
  )
}