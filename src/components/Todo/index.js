import { useEffect, useState } from 'react';
import { TodoContainer } from './styles';

import IconGames from '../../assets/icons/icon-games.png';
import IconMovies from '../../assets/icons/icon-movies.png';
import IconSeries from '../../assets/icons/icon-series.png';
import TodoHeader from './components/TodoHeader';
import ListItems from './components/ListItems';
import TodoFilter from './components/TodoFilter';
import ClickedItem from './components/ClickedItem';

export default function Todo() {
  const items = [
    {label: 'movie', icon: IconMovies},
    {label: 'serie', icon: IconSeries},
    {label: 'game', icon: IconGames},
  ];

  const [selected, setSelected] = useState(items[0].label);
  const [filter, setFilter] = useState('all');
  const [searchResponse, setSearchResponse] = useState(null);
  const [showSearchResponse, setShowSearchResponse] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  
  function cleanWindow() {
    setSearchResponse(null);
    setShowSearchResponse(null);
    setClickedItem(null);
  }

  useEffect(() => {
    cleanWindow();
  }, [selected]);

  useEffect(() => {
    function handleKeyDown(e) {e.key === 'Escape' && cleanWindow()};
    window.addEventListener('keydown', handleKeyDown);
    window.removeEventListener('keydown', handleKeyDown);
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
        <TodoHeader 
          selected={selected} setClickedItem={setClickedItem}
          searchResponse={searchResponse} setSearchResponse={setSearchResponse} 
          showSearchResponse={showSearchResponse} setShowSearchResponse={setShowSearchResponse}
        />
        <ListItems selected={selected} filter={filter} />
        {clickedItem && 
          <ClickedItem item={clickedItem} setItem={setClickedItem} type={selected} cleanWindow={cleanWindow} />
        }
        <TodoFilter filter={filter} setFilter={setFilter} />
      </main>
    </TodoContainer>
  )
}