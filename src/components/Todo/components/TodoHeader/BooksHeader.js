import { useEffect, useState, useContext } from 'react';
import { BooksHeaderWrapper, NewBook } from './styles';

import { GlobalContext } from '../../../../GlobalContext';
import { newBook } from '../../../../api/books';

export default function BooksHeader() {
  const { booksGenres, ratings, setBooks } = useContext(GlobalContext);
  const [addingBook, setAddingBook] = useState(false);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [coverURL, setCoverURL] = useState('');
  const [rating, setRating] = useState('');
  const [author, setAuthor] = useState('');
  const [coverIsValid, setCoverIsValid] = useState(false);

  function handleNewBook(e) {
    e.preventDefault();
    if(!title || !author || !coverIsValid || !genre) {
      return alert('Preencha os campos corretamente!');
    }
    newBook({title, genre, coverURL, author, rating}).then(() => {
      setBooks(old => {
        return [...old, {name: title, poster: coverURL, rating, author, genres: [genre]}];
      })
      setAddingBook(false);
      setTitle('');
      setGenre('');
      setAuthor('')
      setCoverURL('');
    })
  }

  useEffect(() => {
    const linkRegex = /^https?:\/\//;
    linkRegex.test(coverURL) && setCoverIsValid(true);
  }, [coverURL]);

  return (
    <BooksHeaderWrapper onSubmit={handleNewBook}>
      <h1>Livros</h1>
      <button type="button" onClick={() => setAddingBook(!addingBook)}>
        {addingBook ? '˄' : '+'}
      </button>
      <NewBook opened={addingBook}>
        <div className='left'>
          {coverIsValid 
            ? <img src={coverURL} alt="Capa" 
              onError={() => setCoverIsValid(false)} onLoad={() => setCoverIsValid(true)}
              />
            : <span className="coverInvalid">
                Sem Capa
              </span>
          }
          <select value={genre} onChange={e => setGenre(e.target.value)}>
            <option value="">Gênero</option>
            {booksGenres.map(genre => <option value={genre}>{genre}</option>)}
          </select>
        </div>
        <div>
          <label>
            Título 
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
          </label>
          <label>
            URL da capa
            <input type="text" value={coverURL} onChange={e => setCoverURL(e.target.value)} />
          </label>
          <label>
            Autor
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
          </label>
          <span>
            <select value={rating} onChange={e => setRating(e.target.value)}>
              <option value="">Nota</option>
              {ratings.map(rating => <option value={rating}>{rating}</option>)}
            </select>
            <button>Adicionar</button>
          </span>
        </div>
      </NewBook>
    </BooksHeaderWrapper>
  )
}