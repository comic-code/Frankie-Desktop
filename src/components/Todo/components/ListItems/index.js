import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../../GlobalContext";
import Item from "./Item";
import { ListItemsWrapper } from "./styles";
import { editMovie } from "../../../../api/movies";
import { editBook } from "../../../../api/books";

export default function ListItems({selected, filter, filterName}) {
  const { movies, setMovies, games, setGames, series, setSeries, books, setBooks } = useContext(GlobalContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  function handleSave(check, rate) {
    const editSubmit = selected === 'movie' ? editMovie
                      // : selected === 'game' ? editGame
                      // : selected === 'serie' ? editSerie
                      : selected === 'book' && editBook;
    const setFunction = selected === 'movie' ? setMovies
                      : selected === 'game' ? setGames
                      : selected === 'serie' ? setSeries
                      : selected === 'book' && setBooks;

    editSubmit(editingItem.id, check, rate).then(() => {
      setFunction(old => old.map(item => {
        if(item.id === editingItem.id) {
          return {
            ...item,
            done: check,
            rating: rate
          }
        } 
        return item
      }))
      setEditingItem(null);
    })    
  }

  useEffect(() => {
    selected === 'movie' && setSelectedItems(movies);
    selected === 'game' && setSelectedItems(games);
    selected === 'serie' && setSelectedItems(series);
    selected === 'book' && setSelectedItems(books);
  }, [selected, movies, games, series, books]);

  return (
    <ListItemsWrapper>
      <span>{selectedItems.length}</span>
      {selectedItems.map(item => {
        const match =
          filter === 'all' ? !filterName ? true : `${item.name}`.toUpperCase().includes(filterName.toUpperCase()) 
          : filter === 'to-do' ? !item.done 
          : item.done
        
        return match && 
          <Item 
            key={item.id} 
            editing={item.id === editingItem?.id} 
            setEditing={setEditingItem}
            save={handleSave}
            item={item} 
          />
      })}
    </ListItemsWrapper>
  )
}