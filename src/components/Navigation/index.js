import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

import { NavigationContainer } from './styles';
import IconSettings from '../../assets/icons/icon-settings.png';
import IconTodo from '../../assets/icons/icon-todo.png';
import IconZap from '../../assets/icons/icon-zap.png';
import IconAlexa from '../../assets/icons/icon-alexa.png';

export default function Navigation() {
  const { activeWindows, setActiveWindows } = useContext(GlobalContext);
  const windows = [
    {label: 'Configurações', icon: IconSettings, route: 'config'},
    {label: 'Zap', icon: IconZap, route: 'whatsapp'},
    {label: 'A Fazer', icon: IconTodo, route: 'todo'},
    {label: 'Alexa', icon: IconAlexa, route: 'alexa'},
  ];

  function handleOpen(route) {
    window.electron.openWindow(route);

    setActiveWindows(prevWindows => {
      const windowIndex = activeWindows.indexOf(route);
      if (windowIndex !== -1) {
        const newWindows = [...prevWindows];
        newWindows.splice(windowIndex, 1);
        return newWindows;
      } else {
        return [...prevWindows, route];
      }
    })
  }

  return (
    <NavigationContainer>
      {windows.map((window, index) =>
        <button key={index} onClick={() => handleOpen(window.route)} 
          className={activeWindows.some(activeWindow => activeWindow === window.route) ? 'active' : ''}
        >
          <img src={window.icon} alt={window.label} />
        </button>
      )}
    </NavigationContainer>
  )
}