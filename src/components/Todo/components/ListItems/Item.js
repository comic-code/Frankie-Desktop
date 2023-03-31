import IconDone from '../../../../assets/icons/icon-done.png';
import IconNotDone from '../../../../assets/icons/icon-not-done.png';

export default function Item({item}) {
  return (
    <li>
      <img src={item.poster} alt='sem poster' />
      <div>
        <span>{item.name}</span>
        <div className="row">
          {!item.done
            ? <img src={IconNotDone} alt="" /> 
            : <>
                <img src={IconDone} alt="" /> 
                <span className='rating'>{item.rating}</span>
              </>
          }
        </div>
      </div>
    </li>
  )
}