import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

import { NavigationContainer } from './styles';
import IconSettings from '../../assets/menu/icon-settings.png';
import IconTodo from '../../assets/menu/icon-todo.png';
import IconZap from '../../assets/menu/icon-zap.png';
import IconRPG from '../../assets/menu/icon-rpg.png';
import IconAlexa from '../../assets/menu/icon-alexa.png';

export default function Navigation() {
  const { activeWindows, setActiveWindows } = useContext(GlobalContext);
  const windows = [
    {label: 'Configurações', icon: IconSettings, route: 'config'},
    // {label: 'Zap', icon: IconZap, route: 'whatsapp'},
    // {label: 'RPG', icon: IconRPG, route: 'rpg'},
    {label: 'Alexa', icon: IconAlexa, route: 'alexa'},
    {label: 'A Fazer', icon: IconTodo, route: 'todo'},
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