import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../../GlobalContext";
import Item from "./Item";
import { ListItemsWrapper } from "./styles";

export default function ListItems({selected, filter}) {
  const { movies, games, series } = useContext(GlobalContext);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    selected === 'movie' && setSelectedItems(movies);
    selected === 'game' && setSelectedItems(games);
    selected === 'serie' && setSelectedItems(series);
  }, [selected, movies, games, series]);

  return (
    <ListItemsWrapper>
      {selectedItems.map(item => {
        const match = 
          filter === 'all' ? true
          : filter === 'to-do' ? !item.done 
          : item.done
        
        return match && <Item key={item.id} item={item} />
      })}
    </ListItemsWrapper>
  )
}