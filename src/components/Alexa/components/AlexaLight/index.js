import { alexa } from "../../../../api/alexa";
import { AlexaLightWrapper } from "./styles";

export default function AlexaLight() {
  const colors = [
    {label: 'Branco aconchegante', rgb: '#FF952B'},
    {label: 'Branco suave', rgb: '#FFAA57'},
    {label: 'Branco', rgb: '#FFD0A4'},
    {label: 'Branco diurno', rgb: '#FFD0A4'},
    {label: 'Branco forte', rgb: '#F5F3FE'},
    {label: 'Vermelho', rgb: '#FE0000'},
    {label: 'Carmesim', rgb: '#FF1846'},
    {label: 'Salmão', rgb: '#FFA07A'},
    {label: 'Laranja', rgb: '#FFA601'},
    {label: 'Dourado', rgb: '#FED501'},
    {label: 'Verde', rgb: '#00FF00'},
    {label: 'Turquesa', rgb: '#49FFED'},
    {label: 'Ciano', rgb: '#00FEFE'},
    {label: 'Azul celeste', rgb: '#93E0FE'},
    {label: 'Azul', rgb: '#0001FE'},
    {label: 'Roxo', rgb: '#AA21FF'},
    {label: 'Magenta', rgb: '#FD00FD'},
    {label: 'Rosa', rgb: '#FEBDCD'},
    {label: 'Lavanda', rgb: '#9E80FE'},
  ]

  function handleChangeColor(label) {
    alexa(`Luz ${label}`);
  }
  return (
    <AlexaLightWrapper>
      {colors.map((color, index) => 
        <button 
          onClick={() => handleChangeColor(color.label)}
          key={index} 
          style={{ background: color.rgb }} 
        />
      )}
    </AlexaLightWrapper>
  )
}