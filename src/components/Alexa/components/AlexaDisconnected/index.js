import { useContext } from "react";

import { AlexaDisconnectedWrapper } from "./styles";
import IconRefresh from '../../../../assets/icons/icon-refresh.png';
import { getAlexa } from "../../../../api/alexa";
import { GlobalContext } from "../../../../GlobalContext";

export default function AlexaDisconnected() {
  const { setAlexaIsConnected } = useContext(GlobalContext);
  
  function checkConnection() {
    getAlexa().then(alexa => alexa.connected 
      ? setAlexaIsConnected(alexa.connected)
      : alert('Alexa Desconectada!')
    )
  }

  return (
    <AlexaDisconnectedWrapper>
      Alexa Desconectada
      <button onClick={checkConnection}>
        <img src={IconRefresh} />
      </button>
    </AlexaDisconnectedWrapper>
  )
}