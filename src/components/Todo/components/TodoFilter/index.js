import { useState, useEffect } from "react";

import { TodoFilterWrapper } from "./styles";
import IconSearch from '../../../../assets/icons/icon-search.png';
import IconDone from '../../../../assets/icons/icon-done.png';
import IconNotDone from '../../../../assets/icons/icon-not-done.png';
import IconAll from '../../../../assets/icons/icon-all.png';

export default function TodoFilter({filter, setFilter, selected, filterName, setFilterName}) {
  const filters = [
    {icon: IconAll, label: 'all'},
    {icon: IconNotDone, label: 'to-do'},
    {icon: IconDone, label: 'done'},
  ];
  let label = selected === 'game' ? 'Jogo' 
            : selected === 'movie' ? 'Filme'
            : selected === 'serie' ? 'Série'
            : selected === 'book' && 'Livro'
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {e.key === 'Escape' && setIsSearch(false)};
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TodoFilterWrapper>
      {isSearch 
        ? <input placeHolder={`Buscar ${label} adicionado`}  
            value={filterName} onChange={e => setFilterName(e.target.value)}
          />
        : <button onClick={() => setIsSearch(true)}>
            <img src={IconSearch} />
          </button>
      }
      {filters.map(filterType =>
        <button key={filterType.label} 
          className={filter === filterType.label ? 'active' : ''} 
          onClick={() => setFilter(filterType.label)}
        >
          <img src={filterType.icon} alt={filterType.label}/>
        </button>  
      )}
    </TodoFilterWrapper>
  )
}