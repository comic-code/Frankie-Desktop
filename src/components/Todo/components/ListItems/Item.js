import { useState, useContext, useEffect } from 'react';

import { ItemWrapper } from './styles';
import IconDone from '../../../../assets/icons/icon-done.png';
import IconNotDone from '../../../../assets/icons/icon-not-done.png';
import { GlobalContext } from '../../../../GlobalContext';

export default function Item({item, editing, setEditing, save}) {
  const { ratings } = useContext(GlobalContext);
  const [check, setCheck] = useState(item.done);
  const [rate, setRate] = useState(item.rating || '');

  useEffect(() => {
    if(!editing) {
      setCheck(item.done);
      setRate(item.rating);
    }
  }, [editing]);

  useEffect(() => {
    !check && setRate('');
  }, [check]);

  return (
    <ItemWrapper onClick={() => setEditing(item)} editing={editing}>
      <img src={item.poster} alt='sem poster' />
      <div>
        <span>{item.name}</span>
        <div className="row">
          {editing
            ? <img src={!check ? IconNotDone : IconDone} alt="" onClick={() => setCheck(old => !old)} /> 
            : <img src={!item.done ? IconNotDone : IconDone} alt="" /> 
          }
          {editing
            ? <select value={rate} onChange={(e) => setRate(e.target.value)}>
                <option value=''>Sem Nota</option>
                {ratings.map(rate => <option value={rate}>{rate}</option>)}
              </select>
            : <span className='rating'>{item.rating || 'Sem Nota'}</span>
          }
          {editing && <button onClick={() => save(check, rate)}>Salvar</button>}
        </div>
      </div>
    </ItemWrapper>
  )
}