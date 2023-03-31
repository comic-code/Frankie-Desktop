import { TodoFilterWrapper } from "./styles";
import IconDone from '../../../../assets/icons/icon-done.png';
import IconNotDone from '../../../../assets/icons/icon-not-done.png';
import IconAll from '../../../../assets/icons/icon-all.png';

export default function TodoFilter({filter, setFilter}) {
  const filters = [
    {icon: IconAll, label: 'all'},
    {icon: IconNotDone, label: 'to-do'},
    {icon: IconDone, label: 'done'},
  ];
  return (
    <TodoFilterWrapper>
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