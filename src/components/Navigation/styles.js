import styled from 'styled-components';
import { DefaultContainer } from '../Defaults';

export const NavigationContainer = styled(DefaultContainer)`
  padding: 5px;

  button {
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 10rem;
    color: var(--white);
    overflow-x: hidden;
    
    img {
      height: 35px;
      width: 35px;
    }

    &:hover {
      background-color: var(--primary);
    }

    &.active {
      background-color: var(--primary);
    }
  }
`

    