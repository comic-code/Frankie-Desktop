import styled from "styled-components";
import { DefaultContainer } from "../Defaults";

export const TodoContainer = styled(DefaultContainer)`
  justify-content: flex-start;
  
  aside {
    height: calc(100vh - 4px);
    width: 50px;
    border-right: 2px solid var(--primary);
    display: flex;
    flex-direction: column;

    button {
      display: flex;
      flex: 1;
      align-items: center;
      border-radius: 0;

      &.active {
        background-color: var(--primary);
      }

      &:first-child {
        border-top-left-radius: 10px;
      }


      &:last-child {
        border-bottom-left-radius: 10px;
      }
    }

  }

  main {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--background);
    width: 100%;
  }
`