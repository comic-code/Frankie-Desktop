import { useEffect, useState } from 'react';

import { HeaderWrapper, SearchResponse } from './styles';
import { searchMovie } from '../../../../api/movies';
import { searchGame } from '../../../../api/games';
import { searchSerie } from '../../../../api/series';

export default function TodoHeader(
  {selected, showSearchResponse, setShowSearchResponse, searchResponse, setSearchResponse, setClickedItem} ) {
  let label = selected === 'game' ? 'Novo Jogo' 
            : selected === 'movie' ? 'Novo Filme'
            : selected === 'serie' && 'Nova Série'

  const [searchText, setSearchText] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);

  function handleSearch(e) {
    e.preventDefault();
      
    const searchFunction = 
      selected === 'movie' ? searchMovie 
      : selected === 'game' ? searchGame
      : selected === 'serie' && searchSerie;
    
      searchFunction(searchText).then(response => {
      setSearchResponse(response);
      setShowSearchResponse(true);
    })
  }

  useEffect(() => {
    !searchText && setShowSearchResponse(false);
    setClickedItem(null)
  }, [searchText]);

  return (
    <HeaderWrapper onSubmit={handleSearch}>
      <input placeholder={label} 
        value={searchText} onChange={e => setSearchText(e.target.value)}
      />
      <button>Buscar</button>
          
      {showSearchResponse &&
        <SearchResponse>
          <div className="resultWrapper">
            {searchResponse.length > 0 
              ? <>{searchResponse.map(element => 
                  <div key={element.id}>
                      <img 
                        onMouseEnter={() => setHoveredItem(element)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => setClickedItem(element)}
                        src={element.poster} alt={element.name}
                      />
                    </div>
                )}</>
              : <span>Sem Resultados</span>
            }
          </div>
          {hoveredItem && 
            <label className='hoveredItem'>
              {hoveredItem.name}
            </label>
          }
        </SearchResponse>
      }
    </HeaderWrapper>
  )
}