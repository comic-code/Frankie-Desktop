import styled from "styled-components";
import { DefaultContainer } from "../Defaults";

export const AlexaContainer = styled(DefaultContainer)`
  height: 100vh;
  flex-direction: column;

  main {
    display: flex;
    margin-top: auto;
    border-top: 2px solid var(--primary);
    width: 100%;
    background-color: var(--background);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    justify-content: center;

    button {
      height: auto;
      border-radius: 0;
      flex: 1;
      border-left: 2px solid var(--primary);
      
      &:first-child {
        border-left: none;
        border-bottom-left-radius: 12px;
      }
      &:last-child {
        border-bottom-right-radius: 12px;
      }

      &.active {
        background-color: var(--primary);
      }

      img {
        width: 40px;
      }
    }
  }

  section {

  }
`