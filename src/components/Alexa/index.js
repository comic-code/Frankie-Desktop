import { useContext, useEffect, useState } from 'react';
import { AlexaContainer, AlexaIsDisconnected } from './styles';
import { GlobalContext } from '../../GlobalContext';

import FreeTextGames from '../../assets/icons/alexa/icon-free-text.png';
import LightMovies from '../../assets/icons/alexa/icon-light.png';
import IconSpotify from '../../assets/icons/alexa/icon-spotify.png';
import IconSay from '../../assets/icons/alexa/icon-say.png';
import IconReminder from '../../assets/icons/alexa/icon-reminder.png';
import AlexaDisconnected from './components/AlexaDisconnected';
import AlexaLight from './components/AlexaLight';

export default function Alexa() {
  const items = [
    {label: 'light', icon: LightMovies},
    {label: 'spotify', icon: IconSpotify},
    {label: 'free-text', icon: FreeTextGames},
    {label: 'reminder', icon: IconReminder},
    {label: 'say', icon: IconSay},
  ];
  const [selected, setSelected] = useState(items[0].label);
  const { alexaIsConnected, setAlexaIsConnected } = useContext(GlobalContext)

  return (
    <AlexaContainer>
      {!alexaIsConnected 
        ? <AlexaDisconnected />
        : selected === 'light' ? <AlexaLight /> : ''
      }
      <main>
        {items.map((item, index) =>
          <button key={index}
             className={selected === item.label ? 'active' : ''}
             onClick={() => setSelected(item.label)} 
          >
            <img src={item.icon} alt={item.label} />
          </button>
        )}
      </main>
    </AlexaContainer>
  )
}